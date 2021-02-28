const mysql = require('mysql')
const pool = require('../model/dbpool')




exports.fetchcollab = (req,res,next) => {
    sql= 'SELECT * FROM ressource'
    pool.query(sql,function(error,results,fields){
        if(error) throw error
        const ressources = results
        if(!ressources){ return res.status(401).json({error : "bad search"})};
        res.status(200).json({ressources: ressources})
        })
}