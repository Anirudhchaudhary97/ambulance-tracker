

// defining hospital schema

const mongoose = require("mongoose");
const { Schema } = mongoose;

const hospitalSchema = new Schema({
  hospitalName: {
    type:String,
    required:true,
  },
  latlng: {
    type: [Number],
    required: true,
    validate: {
        validator: function(arr) {
          return arr.length === 2 && 
                 arr.every(num => typeof num === 'number');
        },
        message: 'latlng must be an array of two numbers'
      }
  },
});

const Hospital = mongoose.model("Hospital",hospitalSchema);
module.exports = Hospital;