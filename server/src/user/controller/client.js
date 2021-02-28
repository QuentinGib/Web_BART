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
            console.log(user[0].rôle)
            res.status(200).json({rôle: user[0].rôle, pub_key: user[0].pub_key});     
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
};

exports.fetchkey  = (req, res, next) => {
    sql= 'SELECT pubkey FROM user WHERE nom = ? AND prenom = ?'
    const insert = [req.body.nom,req.body.prenom]
    sql = mysql.format(sql,insert);
    pool.query(sql,function(error,results,fields){
        if(error) throw error
        const user = results
        if(!user){ return res.status(401).json({error : "bad search"})};
        res.status(200).json({user: user[0]})
        })
};