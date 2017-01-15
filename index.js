var Dropngo = require('./dropngo');
var Lock = require('./lock');
var config = require('./config')
var ReadlineKeypad = require('./readlineKeypad');
var dropngo = new Dropngo();


function validateNIP(nip, callback) {
  console.log('waiting for nip...');

  ReadlineKeypad((line) => {
    if (line == nip) {
      callback();
    }
  });
}


Lock.lock();


dropngo.on('connection', function(data) {
  console.log('connection', data);
});


dropngo.on('fulfillment', function(data) {
  var nip = data.nip;

  validateNIP(nip, () => {
      Lock.unlock();

      ReadlineKeypad((line) => {
        Lock.lock();

        var nip = dropngo.fulfilled({ notify: !!data.notify });

        validateNIP(nip, () => {
          Lock.unlock();

          ReadlineKeypad((line) => {
              Lock.lock();
          });
        });
      });
  });
});


dropngo.connect(config.dropngo);

