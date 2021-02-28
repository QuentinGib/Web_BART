const mysql = require('mysql')
const pool = require('../model/dbpool')
const bcrypt = require('bcrypt')


exports.generate = (req, res, next) => {
    
    
};

exports.modify = (req,res,next) => {
    sql = 'UPDATE contrat SET etat_contrat = 1 WHERE id_Contrat = ?'
    const insert = req.body.id_Contrat
    sql = mysql.format(sql,insert);
    pool.query(sql,function(error,results,fields){
        if(error) throw error;
        res.status(200)
        })

};

exports.fetchall = (req,res,next) => {
    sql= 'SELECT * FROM contrat'
    pool.query(sql,function(error,results,fields){
        if(error) throw error
        const contrats = results
        if(!contrats){ return res.status(401).json({error : "bad search"})};
        res.status(200).json({contrats: contrats})
        })
}



