const express = require("express");


const { addHospital, allHospital, deleteHospital, updateHospital } = require("../controllers/hospital");
const router = express.Router();


router.post("/admin/addHospital", addHospital);
router.get("/hospitals", allHospital);
router.delete("/admin/deleteHospital/:id", deleteHospital);
router.put("/admin/updateHospital/:id", updateHospital);

module.exports = router;