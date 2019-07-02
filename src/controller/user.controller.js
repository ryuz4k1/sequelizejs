const User      = require("../models/user");
const Utils     = require("../helper/utils");
const Op        = require('sequelize').Op;



class UserController{

    constructor(router){
        this.router = router;
        this.routers();

        this.utils = new Utils();
    }

    routers() {
        this.router.post("/register", this.register.bind(this));
        this.router.post("/login", this.login.bind(this));
        this.router.get("/users",this.users.bind(this));

        this.router.get('/testCases',this.testCases.bind(this));
    }

    async login(req, res){
        try{
            const user = await User.findOne({ where: { phone: req.body.phone, password: req.body.password }});
            if (!user) {
                return res.send("user not found");                
            }
            return res.status(201).send({"succes" : user});
        }
        catch(e){
            return res.send(e);
        }
    }
    
    
    async register(req, res){
        console.log(req.body);
        try{
            let user = await User.findOne({ where: { phone: req.body.phone }});
    
            if (user) {
                return res.send( "user already exist", user);
            }

            user = await User.create(req.body);

            return res.status(201).send({"succes" : user});
        }
        catch(e){
            return res.send(e);
        }
        
    }
    
    async users(req, res){
        try{
            let users = await User.findAll();
            return res.send(users);
        }
        catch(e){
            return res.send(e);
        }
    }


    async testCases(req,res) {

        try{
            let a1 = await User.findByPk(1);

            // search for attributes
            let a2 = await User.findOne({ where: {first_name: 'Murat'} })

            
            let a3 = await User.findAndCountAll({
                where: {
                    first_name: {
                      [Op.like]: '%Murat%'
                    }
                 },
                 limit: 2
            });

            console.log(a3.rows);
            console.log(a3.count);
            

            return res.send({"a1":a1,"a2":a2,"a3":a3});
        }
        catch(e){
            return res.send(e);
        }



    }

    
}

module.exports = UserController;



