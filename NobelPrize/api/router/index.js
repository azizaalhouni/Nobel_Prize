const express = require("express");
const router = express.Router();

const prizeController = require("../controller/controller");



router.route("/prizes")
.get(prizeController.prizeGetAll)
.post(prizeController.addOnePerson);

 router.route("/prizes/:prizeId")
 .get(prizeController.prizeGetOne)
 .delete(prizeController.deleteOnePerson);




module.exports = router;