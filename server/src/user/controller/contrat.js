const mysql = require('mysql')
const pool = require('../model/dbpool')
const bcrypt = require('bcrypt')


exports.generate = (req, res, next) => {

    sql='INSERT INTO contrat (id_Contrat, mission, datecommencement, datefin, descriptif) VALUES (?,?,?,?,?)'
    var insert = [req.body.idContrat,req.body.mission,req.body.datecommencement,req.body.datefin, req.body.descriptif]
    sql = mysql.format(sql,insert);
    pool.query(sql,function(error,results,fields){
    if(error) throw error;
    })              
    res.status(201).json({ message:"Contrat succès" })
    
};

exports.modify = (req,res,next) => {
    sql = 'UPDATE contrat SET datefin = ? WHERE id_Contrat = ?'
    var insert = [req.body.datefin,req.body.idContrat]
    sql = mysql.format(sql,insert);
    pool.query(sql,function(error,results,fields){
        if(error) throw error;
        })              
        res.status(200).json({ message:"Modif succès" })
}

exports.fetchall = (req,res,next) => {
    sql= 'SELECT * FROM contrat WHERE id_Contrat = ?'
    var insert = req.body.idContrat
    sql = mysql.format(sql,insert);
    pool.query(sql,function(error,results,fields){
        if(error) throw error
        const contrats = results
        if(!contrats){ return res.status(401).json({error : "bad search"})};
        res.status(200).json({contrats: contrats})
        })
}



