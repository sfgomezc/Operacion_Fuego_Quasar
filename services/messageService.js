const { satellites } = require("../models/satellites");


const getMessage = () => {

    let messages = [];
    satellites.forEach(satellite => {
        messages.push(satellite.message);
    });

    let result = [];
    let err;
    for (let i = 0; i < messages[0].length; i++) {
        err = true;
        for (let j = 0; j < messages.length; j++) {
            const message = messages[j];
            const itemMessage = message[i];

            if (itemMessage) {
                result.push(itemMessage);
                err = false
                break;
            }
        };

        if (err) {
            throw 'Error: There is not enough information to decrypt message.';
        }
    };

    let response = removeDuplicateItems(result);

    return response.join(' ').trim();
}


function removeDuplicateItems(result) {

    let response = [];
    result.forEach(element => {
        if (!response.includes(element))
            response.push(element);
    });

    return response;
}

module.exports = { getMessage };
