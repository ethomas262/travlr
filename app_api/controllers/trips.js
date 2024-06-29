const mongoose = require('mongoose');
const Trip = require('../Models/travlr');
const Model = mongoose.model('trips');






const tripsAddTrip = async (req, res) => {
  getUser(req, res,
    async (req, res) => {

      const trip = await Model.create({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.send(err)
        });
    }
  );
}

const tripsUpdateTrip = async (req, res) => {
  console.log(req.body);
  getUser(req, res, (req, res) => {
    Model.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      },
      { new: true }
    )
      .then((trip) => {
        if (!trip) {
          return res.status(404).send({
            message: "Trip not found with code " + req.params.tripCode,
          });
        }
        res.send(trip);
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Trip not found with code " + req.params.tripCode,
          });
        }
        return res
          .status(500) // server error
          .json(err);
      });
  });
};

const trips = async (req, res) => {
  const z = await Model
    .find({})
    .exec()

  if (!z) {
    return res
      .status(404)
      .json(err)
  }
  else {
    return res
      .status(200)
      .json(z)
  }
}
const tripsFindCode = async (req, res) => {
  Model.find({ code: req.params.tripCode }).exec((err, trip) => {
    if (!trip) {
      return res.status(404).json({ message: "trip not found" });
    } else if (err) {
      return res.status(404).json(err);
    } else {
      return res.status(200).json(trip);
    }
  });
};

module.exports = {
  trips,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsFindCode,
};

