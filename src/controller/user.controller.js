const User      = require("../models/user");

class UserController{

    constructor(router){
        this.router = router;
        this.routers();
    }

    routers() {
        this.router.post("/register", this.register.bind(this));
        this.router.post("/login", this.login.bind(this));
    }

    async login(req,res){
        try{
            const user = await User.findOne({ where: { phone: req.body.phone, password: req.body.password }});
            if (!user) {
                return res.send("user not found");                
            }
            return res.send("succes", user);
        }
        catch(e){
            return res.send(e);
        }
    }
    
    
    async register(req,res){
        try{
            let user = await User.findOne({ where: req.body.phone });
    
            if (user) {
                return res.send( "user already exist", user);
            }
        }
        catch(e){
            return res.send(e);
        }
        
    }
    
    async users(req,res){
        try{
            let users = await User.findAll();
            return res.send(users);
        }
        catch(e){
            return res.send(e);
        }
    }
    
}

module.exports = UserController;



