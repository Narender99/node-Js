const mongoose = require('mongoose');

const Dishes = require('./modules/dishes');

const url = 'mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(url);

connect.then((db) =>{
      console.log('connected');

      var newDish = Dishes({
          name : 'chicken bugger',
          description : 'tasty'

      });

       newDish.save()
       .then((dish)=>{
            console.log(dish);
         
            return Dishes.find({}).exec();
       })
       .then((dishes) =>{
           console.log(dishes);

           return Dishes.remove({});
       })
       .then(() =>{
           return mongoose.connection.close();
       })
       .catch((err) =>{
           console.log(err);
       });
});
