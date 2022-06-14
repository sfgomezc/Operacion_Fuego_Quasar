const { satellites } = require("../models/satellites");
const trilateration = require("node-trilateration");


const getLocation = () => {

    var beacons = [];
    satellites.forEach(itemSatellite => {
        beacons.push({
            x: itemSatellite.position.x,
            y: itemSatellite.position.y,
            distance: itemSatellite.distance
        });
    });

    if (beacons.find(x => x.distance == undefined) != undefined) {
        throw 'Error: There is not enough information.';
    }

    let position = trilateration.calculate(beacons);

    return {
        x: position.x,
        y: position.y
    };
}

module.exports = { getLocation };
