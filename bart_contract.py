import smartpy as sp


whitelist_id_t = sp.TNat
users_t = sp.big_map(tkey = sp.TAddress, tvalue = whitelist_id_t)

class Contrat(sp.Contract):
    def __init__(self,admin , issuer):
        self.init(TJM = sp.map(),
                  time = sp.map(),
                  onepoint = sp.map(),
                  client= sp.map(),
                  ressource = sp.map(),
                  validationclient = sp.map(),
                  validationressource = sp.map(),
                  validateact= sp.map(),
                  users = users_t, 
                  admin = admin,
                  issuer = issuer,
                  
                  )


        
    def assertAdmin(self): # Permet de vérifier si le sender est bien l'admin du smart-contract
        sp.verify((sp.sender == self.data.admin), message = "only admin may update")
        

    def assertOnepoint(self): # Permet de vérifier si le sender est un employé de Onepoint
        sp.verify((self.data.users[sp.sender] == sp.nat(0)), message = "issuer is not a whitelist as onepoint")
        return sp.sender

        
    def assertNotIssuer(self, user): # Permet de vérifier que l'user ajouté n'est pas l'issuer
        sp.verify(~(self.data.issuer == user), message = "issuer is not a user")
        return user   
    
    def addUserWhitelist(self, user, whitelist_id): # Ajoute un nouvel utilisateur avec son niveau de whitelist ( 0 = Onepoint staff)
        
        sp.if (whitelist_id.is_some()):
            self.data.users[user] = whitelist_id.open_some()
            
        sp.else:
            del self.data.users[user]

            
            
    @sp.entry_point # Permet au client d' un contrat de le déclarer comme validé
    def validateContratClient(self,id):
        sp.verify(self.data.client[id]== sp.sender , message = 'This is not the contract linked to your address')
        self.data.validationclient[id]= True
        
    @sp.entry_point # Permet à la ressource d' un contrat de le déclarer comme validé
    def validateContratRessource(self,id):
        sp.verify(self.data.ressource[id]== sp.sender , message = 'This is not the contract linked to your address')
        self.data.validationressource[id]= True
        

    @sp.entry_point # Fonction pour que les employés Onepoint broadcast les nouveaux contrats
    def newContrat(self, params):
        self.assertOnepoint()
        self.data.onepoint[params.id] = sp.sender
        self.data.client[params.id] =  params.client
        self.data.ressource[params.id] =  params.ressource
        self.data.TJM[params.id] = params.TJM
        self.data.time[params.id] =   params.temp
        self.data.validationclient[params.id] = False
        self.data.validateact[params.id] = False
        self.data.validateressource[params.id] = False
        
    @sp.entry_point # Fonction pour changer l'admin
    def setAdmin(self, new_admin):
        self.assertAdmin()
        self.data.admin = new_admin
    
    @sp.entry_point # Fonction pour ajouter un nouvel utilisateur et sa whitelist
    def addUser(self, new_user_params):
        self.assertAdmin()
        self.addUserWhitelist(new_user_params.new_user, new_user_params.new_user_whitelist)
        
  
    @sp.entry_point #Fonction pour que le client valide l'activité
    def validateActivity(self,id):
        sp.verify((self.data.client[id]== sp.sender), message = 'This is not the contract linked to your address')
        self.data.validateact[id]= True
    

   
@sp.add_test(name = "Testing")
def test():
    test_bot =  Contrat(sp.address("tz1YDrxgE7aoDXN1FSWnzpCDYN7wRJuGVHZ9"),sp.address("tz1YDrxgE7aoDXN1FSWnzpCDYN7wRJuGVHZ9"))
    scenario = sp.test_scenario()
    scenario += test_bot
    
    # Test change_name function below
    
    scenario += test_bot.addUser(
            new_user = sp.address("tz1djN1zPWUYpanMS1YhKJ2EmFSYs6qjf4bW"), 
            new_user_whitelist = sp.some(0)
            ).run(sender = sp.address("tz1YDrxgE7aoDXN1FSWnzpCDYN7wRJuGVHZ9"))
            
    scenario += test_bot.addUser(
            new_user = sp.address("tz31YDrxgE7aoDXN1FSDczpCDYN7wRJuGVHZ9"), 
            new_user_whitelist = sp.some(1)
            ).run(sender = sp.address("tz1YDrxgE7aoDXN1FSWnzpCDYN7wRJuGVHZ9"))       
    
    
    scenario += test_bot.newContrat(TJM=sp.nat(200),temp = sp.nat(30),client = sp.address("tz1ePT7nRT9ANnjzcdbREJHWmfEBJnS7rWtJ"),ressource = sp.address("tz1ePT7nRT9ANnjzcdbREJHWmfEBJnS7rWtK"), id = "id_contrat").run(sender = sp.address("tz1djN1zPWUYpanMS1YhKJ2EmFSYs6qjf4bW"))
    
    # Shouldn't work
    #scenario += test_bot.validateContrat("id_contrat").run(sender =sp.address("tz1ePT7nRT9ANnjzzdbREJHWmfEBJnS7rWtK"))
    
    #Should work
    scenario += test_bot.validateContratClient("id_contrat").run(sender =sp.address("tz1ePT7nRT9ANnjzcdbREJHWmfEBJnS7rWtJ"))
    scenario += test_bot.validateActivity("id_contrat").run(sender =sp.address("tz1ePT7nRT9ANnjzcdbREJHWmfEBJnS7rWtJ"))