const locationService = require('./locationService');
const messageService = require('./messageService');


const getSecret = () => {

    let position = locationService.getLocation();
    let message = messageService.getMessage();
    return { position, message };
}

module.exports = { getSecret };
