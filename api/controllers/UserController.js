/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    login: async function (req, res) {

        if (req.method == "GET") return res.view('user/login');

        if (!req.body.username || !req.body.password) return res.badRequest();

        var user = await User.findOne({ username: req.body.username });

        if(!user) return res.redirect("/item/noaccount");

        //if (!user) return res.status(401).send("User not found");

        const match = await sails.bcrypt.compare(req.body.password, user.password);

        //if (!match) return res.status(401).send("Wrong Password");
        
        if(!match) return res.redirect("/item/wrongpassword");


        req.session.regenerate(function (err) {

            if (err) return res.serverError(err);

            req.session.username = req.body.username;

            req.session.userid = user.id;

            req.session.userrole= user.role;

            sails.log("[Session] ", req.session);

            // return res.ok("Login successfully.");


            if (req.session.userrole == "admin") {
                return res.redirect("/item/adminindex");
            }
            else if(req.session.userrole=="user"){
                return res.redirect("/item/userindex");
            }




            // else if (user.role == "admin") {
            //     return res.redirect("/item/homepage");
            // }


        });



    },

    logout: async function (req, res) {

        req.session.destroy(function (err) {

            if (err) return res.serverError(err);

            return res.redirect("/");
            // return res.redirect("/apartment/visitorindex")

        });
    },

    


};

