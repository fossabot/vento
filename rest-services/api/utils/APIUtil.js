
const uuidv1 = require('uuid/v1');


module.exports.omit =  function(key, obj) {
    //sails.log(obj);
    const { [key]: omitted, ...rest } = obj;
    //sails.log(rest);
    return rest;
}

module.exports.getCreatePayload = (data) => {
    let payload = [];
    [data].map(elem => {
        elem['id'] = uuidv1();
        payload.push(elem);
    });

    return payload;
}

module.exports.addUUID = (obj) => {
    obj['id'] = uuidv1();
    return obj;
}

module.exports.createEmailPayload = (to, subject, message) => {
    let obj = {};
    obj['to'] = to;
    obj['subject'] = subject;
    obj['message'] = message;
    return obj;
}

module.exports.daysDiff = (date1, date2) => {
    let differenceInTime = date2 - date1;
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays;
}

module.exports.daysDiffFromNow = (timestamp) => {
   return this.dayDiffs(new Date().getTime(), timestamp);
}