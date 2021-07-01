const mongoose = require("mongoose");

const Prize = mongoose.model("Prize");



module.exports.prizeGetAll = (req, res) => {
  let offset = req.params.offset;
  let count = req.params.count;
  // return count;
  let maxCount = 0;
  // blocking funcnt
  Prize.count({}, (error, result) => {
      maxCount = result
      console.log(maxCount);

      if (req.query && req.query.offset) {
          offset = parseInt(req.query.offset);
      }
      if (req.query && req.query.count) {
          count = parseInt(req.query.count);
      }
      if (isNaN(offset) || isNaN(count)) {
          res.status(400).json({ message: "QueryString Offset and Count must be a number" });
          return;
      }
      if (count > maxCount) {
          res.status(400).json({ message: "QueryString Count must not exceed " + maxCount });
      } else {
          Prize.find().skip(offset).limit(count).exec((err, prizes) => {

              if (err) {
                  res.status(400).json(err);
              } else {
                  res.status(200).json({
                      prizes,
                      maxCount
                  });
              }
          });
      }
  });
}



















// module.exports.prizeGetAll = function(req,res){
//     console.log("GET all prizes");
//     console.log(req.query);
//     var offset= 0;
//     var count= 10;
//     if(req.query && req.query.offset){
//       offset = parseInt(req.query.offset);
//     }
//     if (req.query && req.query.count) {
//     count= parseInt(req.query.count, 10); 
//     }
// //     if(isNaN(offset)|| isNaN(count)){
// //       res.status(400).json({"message":"QueryString Offset and Count should be numbers"});
// //       return;
// //   }
// //   if(count > maxCount){
// //     res.status(400).json({"message":"Cannot exceed count of "+ maxCount});
// //     return;
// // }
//     Prize.find().skip(offset).limit(count).exec(function(err,prizes){
//       console.log("Found games", prizes);
//       res.status(200).json(prizes);
//     })   
// }
module.exports.prizeGetOne = function(req, res){
  console.log("Get One prize");
  const prizeId = req.params.prizeId;
  Prize.findById(prizeId).exec(function(err,prize){
      res.status(200).json(prize);
  });
}

module.exports.deleteOnePerson = function(req, res){
  const response = {
    status : 204,
    message : ""
  };
  console.log("Delete a person");
  const prizeId = req.params.prizeId;
  Prize.findByIdAndDelete(prizeId).exec(function(err,prize){
    if(err){
      response.status = 500;
      response.message = err;
    }else if(! prize){
      response.status = 404;
      response.message = {"message": "prize Id not found"};
    }
    res.status(200).json(prize);
    });
};


module.exports.addOnePerson = function(req, res){
  const response = {
      status : 201,
      message : ""
  };
  const newPerson = {};
  newPerson.firstname = req.body.firstname;
  newPerson.surname = req.body.surname;
  newPerson.born = req.body.born;
  // newPerson.died = req.body.experience;
  // newPerson.bornCountry = req.body.bornCountry;
  // newPerson.bornCountryCode = req.body.bornCountryCode;
  newPerson.year = parseInt(req.body.year);
  newPerson.category = req.body.category;
  
 
  Prize.create(newPerson, function(err, person){
      if(err){
          console.log("Error creating job");
          res.status(400).json(err);
      }else{
         console.log("person created", person);
      res.status(201).json(person);
      }
  });
 
}