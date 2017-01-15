var Dropngo = require('./dropngo');
var Lock = require('./lock');
var config = require('./config')
var ReadlineKeypad = require('./readlineKeypad');
var ReadCharKeypad = require('./readCharKeypad');
var validateNIP = require('./validateNip');
var toggleLockOnKey = require('./toggleLockOnKey');
var dropngo = new Dropngo();


Lock.lock();
toggleLockOnKey('-');


dropngo.on('connection', function(data) {
  console.log('connection', data);
});


dropngo.on('fulfillment', function(data) {
  var nip = data.nip;

  validateNIP(nip, () => {
      Lock.unlock();

      ReadCharKeypad(() => {
        Lock.lock();

        var nip = dropngo.fulfilled({ notify: !!data.notify });

        validateNIP(nip, () => {
          Lock.unlock();

          ReadCharKeypad(() => {
              Lock.lock();
          });
        });
      });
  });
});


dropngo.connect(config.dropngo);

