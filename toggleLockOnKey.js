var ReadCharKeypad = require('./readCharKeypad');
var Lock = require('./lock');

function toggleLockOnKey(lockKey) {
  function doToggle() {
    ReadCharKeypad((key) => {
      if (key == lockKey) {
        console.log('toggleLockOnKey', 'toggle'); 
        Lock.toggle();
      }
      doToggle();
    });
  }

  doToggle();
}


exports = module.exports = toggleLockOnKey;
