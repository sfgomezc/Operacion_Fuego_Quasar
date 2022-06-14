const { satellites } = require("../models/satellites");


const updateSatellites = (allSatellites) => {
    try {
        allSatellites.forEach(itemSatellite => {
            let satellite = satellites.find(x => x.name.toUpperCase() == itemSatellite.name.toUpperCase());
            if (satellite) {
                satellite.distance = itemSatellite.distance;
                satellite.message = itemSatellite.message;
            }
        });
    } catch (err) {
        throw err;
    }
}
module.exports = { updateSatellites };
