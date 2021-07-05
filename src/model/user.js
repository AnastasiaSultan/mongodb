

const mongoose = require('mongoose');

//Создание схемы
var userSchema = new mongoose.Schema({
    login: { type: String, required:true, index: true},
    password: { type: String, required:true },
    name: {type: String, required:true, default:"NoName"}
  });
  
  //Создание модели из схемы.
  const UserModel = mongoose.model("UserModel", userSchema);
  const New = new UserModel({ login: 'nastia1', password: '123', name: 'Nastia'},
  New.save(function (err) {
  if (err) return handleError(err);
  //save
  
}));
  
module.exports = UserModel;