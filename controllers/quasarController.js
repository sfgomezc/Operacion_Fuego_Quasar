const secretService = require('../services/secretService');
const satelliteService = require('../services/satelliteService');


const topsecret = async (req, res) => {
    
    try {
        let allSatellites = req.body.satellites;
        satelliteService.updateSatellites(allSatellites);
        let response = secretService.getSecret();
        res.json(response);
    }
    catch (ex) {
        console.log(ex);
        return res.status(404).json({ ex });
    }
}

const topsecret_split_post = async (req, res) => {
    
    try {
        let allSatellites = [];
        allSatellites.push({
            name: req.params.satellite_name,
            distance: req.body.distance,
            message: req.body.message
        });
        satelliteService.updateSatellites(allSatellites);
        let response = secretService.getSecret();
        res.json(response);
    }
    catch(ex) {
        console.log(ex);
        return res.status(404).json({ ex });
    }
}

const topsecret_split_get = async (req, res) => {
    
    try {
        let response = secretService.getSecret();
        res.json(response);
    }
    catch (ex) {
        console.log(ex);
        return res.status(404).json({ ex });
    }
}


module.exports = { topsecret, topsecret_split_post, topsecret_split_get };
