const mysql = require('mysql')
const pool = require('../model/dbpool')
const bcrypt = require('bcrypt')




exports.register = (req, res, next) => {
    bcrypt.hash(req.body.pwd, 10)
        .then(hash => {
            pwd = hash
            sql='INSERT INTO user (pwd, pub_key, rôle, prenom, nom, email) VALUES (?,?,?,?,?,?)'
            var insert = [pwd,req.body.pub_key,req.body.rôle,req.body.prenom,req.body.nom,req.body.email]
            sql = mysql.format(sql,insert);
            pool.query(sql,function(error,results,fields){
            if(error) throw error;
            })              
            if(req.body.rôle == "client") 
            {
                sql = 'INSERT INTO client (nom_C, prenom_C, contact) VALUES (?,?,?)'
                var insert2 = [req.body.nom,req.body.prenom,req.body.contact]
                sql = mysql.format(sql,insert2);
                pool.query(sql,function(error,results,fields){
                    if(error) throw error;
                    })
            }
            if(req.body.rôle == "ressource") 
            {
                console.log("ressource")
                sql = 'INSERT INTO ressource (nomCollab, prenomCollab, TJM) VALUES (?,?,?)'
                var insert3 = [req.body.nom,req.body.prenom,req.body.TJM]
                sql = mysql.format(sql,insert3);
                pool.query(sql,function(error,results,fields){
                    if(error) throw error;
                    })
            }
            res.status(201).json({ message:"Inscription succès" })
            
        })
        
    
};

exports.login = (req, res, next) => {

    
    sql= 'SELECT * FROM user WHERE email = ?'
    const insert = req.body.email
    sql = mysql.format(sql,insert);
    pool.query(sql,function(error,results){
        if(error) throw error
        const user = results
        if(!user[0]) {return res.status(401).json({error : "Invalid Credential"}) }
        
        bcrypt.compare(req.body.pwd,user[0].pwd)
        .then(result => {
            if(!result){ return res.status(401).json({error : "invalid credential"})};
            res.status(200).json({user: user[0]})
            
        })
        .catch(error => { this.error = error })
        })
        
               

};


exports.fetchname  = (req, res, next) => {
    sql= 'SELECT prenom,nom FROM user WHERE pub_key = ?'
    const insert = req.body.pub_key
    sql = mysql.format(sql,insert);
    pool.query(sql,function(error,results,fields){
        if(error) throw error
        const user = results
        if(!user){ return res.status(401).json({error : "bad search"})};
        res.status(200).json({user: user[0]})
        })
}

