const Hospital = require("../models/Hospital");

// Add a new hospital
const addHospital = async (req, res) => {
  try {
    const hospitalInfo = await Hospital.create(req.body);
    res.json({ msg: "Hospital successfully added", hospitalInfo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Failed to add hospital", error });
  }
};

// Get the list of all hospitals
const allHospital = async (req, res) => {
  try {
    const hospitalList = await Hospital.find();
    res.json({ msg: "hospital list successfully found", hospitalList });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Failed to retrieve hospital list", error });
  }
};

// Delete a hospital by ID
const deleteHospital = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedHospital = await Hospital.findByIdAndDelete(id);
      if (deletedHospital) {
        res.json({ msg: "Hospital successfully deleted", deletedHospital });
      } else {
        res.status(404).json({ msg: "Hospital not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Failed to delete hospital", error });
    }
  };

  // Update a hospital by ID
const updateHospital = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedHospital = await Hospital.findByIdAndUpdate(id, req.body, { new: true });
      if (updatedHospital) {
        res.json({ msg: "Hospital successfully updated", updatedHospital });
      } else {
        res.status(404).json({ msg: "Hospital not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Failed to update hospital", error });
    }
  };

module.exports = { addHospital, allHospital,deleteHospital,updateHospital };
