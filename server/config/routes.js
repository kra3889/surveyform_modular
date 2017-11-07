const users = require('./../controllers/Users.js');

module.exports=function(app){
   app.get('/', users.index);
   app.post('/users',users.create);
   app.get('/success', users.success);
};
