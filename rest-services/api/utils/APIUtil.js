
const uuidv1 = require('uuid/v1');


module.exports.omit =  function(key, obj) {
    const { [key]: omitted, ...rest } = obj;
    return rest;
}

module.exports.getCreatePayload = (data) => {
    let payload = [];
    data.map(elem => {
        elem['id'] = uuidv1();
        payload.push(elem);
    });

    return payload;
}

module.exports.addUUID = (obj) => {
    obj['id'] = uuidv1();
    return obj;
}