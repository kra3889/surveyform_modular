const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 8888;

const app = express();


app.use(express.static(path.join(__dirname, './client/static')));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(PORT, ()=>{
  console.log(`Listening on port: ${PORT}!`)});





//   var UserSchema = new mongoose.Schema({
//     name: String,
//     comment: String,
//
// })
//
// mongoose.model('User', UserSchema);
// var User = mongoose.model('User')
//
// mongoose.Promise = global.Promise;
//
// // const allUsers = [
// //     {
// //         name: 'Phil',
// //         location: 'Tulsa',
// //         language: 'JavaScript',
// //         comment: 'JS rocks!!!'
// //     }
// // ];
//
// // ES6 arrow function
// app.get('/', (req, res)=>{
//     res.render('index');
// });
//
// app.post('/users', (req, res)=>{
//     console.log('-'.repeat(90));
//     console.log(`Form Submitted!`);
//     var user = new User({name: req.body.name, location: req.body.loc, language: req.body.lang, comment: req.body.comment});
//     console.log(req.body);
//     user.save();
//     res.redirect('/success');
// })
//
// app.get('/success', (req, res)=>{
//     User.find({}, function(err,users) {
//       res.render('success', {users: users});
//
//   })
// })
