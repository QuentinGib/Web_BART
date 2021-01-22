const bcrypt = require('bcrypt');
const User = require("../model/User");
const jwt = require("jsonwebtoken");

exports.register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                name: req.body.name,
                password: hash,
                secret: req.body.secret,
              });
              user.save()
              .then(() => res.status(201).json({ user }))
              .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
    
};


exports.login = (req,res,next) => {
    const username = req.body.name
    User.findOne({name: username})
    .then(user => {
        if(!user) { return res.status(401).json({error : "Username is incorrect"});
    }
    bcrypt.compare(req.body.password, user.password)
    .then(result => {
        if(!result){ return res.status(401).json({error : "Password is incorrext"})};
        res.status(200).json({
            userId: user._id,
            token: jwt.sign(
                {userId: user._id},
                "POPOLIPOPO",
                {expiresIn: '24h'}
            )
            });       
    })
    .catch(error => res.status(500).json({error}));
    })
    .catch(error=> res.status(500).json({error}));
};

exports.secret = (req,res,next) => {
    res.json(req.secret)
}