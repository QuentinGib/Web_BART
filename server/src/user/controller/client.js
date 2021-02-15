const mysql = require('mysql')
const pool = require('../model/dbpool')
const bcrypt = require('bcrypt')




exports.register = (req, res, next) => {
    bcrypt.hash(req.body.pwd, 10)
        .then(hash => {
            pwd = hash
            sql='INSERT INTO user (pwd, pub_key, rôle, nom, email) VALUES (?,?,?,?,?)'
            var insert = [pwd,req.body.pub_key,req.body.rôle,req.body.nom,req.body.email]
            sql = mysql.format(sql,insert);
            pool.query(sql,function(error,results,fields){
            if(error) throw error;
            })              
            res.status(201).json({ message:"Inscription succès" })
            
        })
        .catch(error => res.status(400).json({ error: "erreur" }));
    
};

exports.login = (req, res, next) => {

    
    sql= 'SELECT * FROM user WHERE email = ?'
    const insert = req.body.email
    console.log(req.body)
    sql = mysql.format(sql,insert);
    pool.query(sql,function(error,results){
        if(error) throw error
        const user = results
        if(!user[0]) {return res.status(401).json({error : "Invalid Credential"}) }
        
        bcrypt.compare(req.body.pwd,user[0].pwd)
        .then(result => {
            if(!result){ return res.status(401).json({error : "invalid credential"})};
            res.status(200).json({rôle: user[0].rôle})
            
        })
        .catch(error => { this.error = error })
        })
        
               

};