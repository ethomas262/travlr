const mongoose = require('mongoose');
const Trip = require('../Models/travlr');
const Model = mongoose.model('trips');

const tripsFindByCode = async(req,res) => {
    const q = await Model
    .find({'code' : req.params.tripCode})
    .exec();

    //console.log(q);

    if(!q){
        return res
            .status(404)
            .json(err);

    }
    else{
        return res
        .status(200)
        .json(q);

    }
}
const trips = async(req, res) => {
    const z = await Model
        .find({})
        .exec()
    
    if(!z){
        return res
            .status(404)
            .json(err)
    }
    else{
        return res
            .status(200)
            .json(z)
    }
}

module.exports = {
    trips,
    tripsFindByCode
};

