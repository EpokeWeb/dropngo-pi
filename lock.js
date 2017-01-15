var gpio = require("onoff").Gpio;
var out = new gpio(18, 'out')
var blue = new gpio(23, 'out')
var green = new gpio(25, 'out')

function lock() {
  console.log('Lock#lock');
  out.writeSync(1);
  blue.writeSync(1);
  green.writeSync(0);
}

function unlock() {
  console.log('Lock#unlock');
  out.writeSync(0);
  blue.writeSync(0);
  green.writeSync(1);
}


function toggle() {
  console.log('Lock#toggle');
  var state = out.readSync();
  console.log('Lock#toggle','current state', state);
  state ? unlock() : lock();
}

//process.on('SIGINT', function(){
//  console.log('Lock#SIGINT');
//  out.unexport();
//});

exports.lock = lock;
exports.unlock = unlock;
exports.toggle = toggle;
