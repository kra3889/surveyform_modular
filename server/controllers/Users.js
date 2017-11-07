const mongoose = require("mongoose");
const User = mongoose.model('User');


module.exports = {
    index: function(req, res){
        console.log('this');
        User.find({}, (err, _users)=>{
            if(err){
                console.log(err);
            }
            else
            {
                res.render('index.ejs', {users : _users})
            }
        })
    },
    create: (req, res)=>{
        console.log(this);
        console.log(req.body);
        const newUser = new User( req.body );
        
        newUser.save((error)=>{
            console.log('in error');
            if(error){
                res.redirect('/');
                console.log('recieved errors', error);
            } else {
                console.log('added user');
                res.redirect('/success');
                console.log('*'.repeat(90));
                console.log(newUser);
                // users.push(req.body);
            }
        })},
        success: (req, res)=>{
            console.log('this');
            User.find({}, (err, _users)=>{
                if(err){
                    console.log(err);
                } else {
                    res.render('success.ejs', {users: _users});
                }
            })
         },

    }
