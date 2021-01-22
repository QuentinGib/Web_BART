const jwt = require("jsonwebtoken");
module.exports = (req,res,next) => {
    try {
    const token = req.headers.authorization.replace('Bearer','')   
    jwt.verify(token,"POPOLIPOPO");
    next();

    }
    catch (err) { res.status(401).json({message: "ouai l'erreeeeur"})
        
    }
}