const CornUtil = require('../api/utils/CronUtil');

module.exports.cron = {
    myFirstJob: {
        // schedule: '30 08 15 10 sep *',
        //schedule: '*/5 * * * * *',
         schedule: '0 01 12 * * *',
        // in May 17 15:47:30 GMT-0300 (BRT)
        onTick: function() {
            CornUtil.notify();
        }
    }
  };