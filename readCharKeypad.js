var inputevent = require('input-event');
//var event0 = new inputevent('by-id/usb-05d5_KEYBOARD-event-kbd')
var event0 = new inputevent('event0')



function ReadCharKeypad(response) {
  var callback = (raw) => {
    console.log('ReadCharKeypad', 'keyup', raw.keyId);
    var character = translateKey(raw.keyId);

    if (character === undefined) {
      console.log('ReadCharKeypad', 'error unknown character', raw);
    }

    event0.removeListener('keyup', callback);

    setTimeout(() => {
      response(character || '');
    }, 500);
  };

  event0.on("keyup", callback);
}


function translateKey (keyId) {
  switch (keyId) {
    case "KEY_KP0":
      return 0;
    case "KEY_KP1":
      return 1;
    case "KEY_KP2":
      return 2;
    case "KEY_KP3":
      return 3;
    case "KEY_KP4":
      return 4;
    case "KEY_KP5":
      return 5;
    case "KEY_KP6":
      return 6;
    case "KEY_KP7":
      return 7;
    case "KEY_KP8":
      return 8;
    case "KEY_KP9":
      return 9;
    case "KEY_KPMINUS":
      return '-';
    case "KEY_KPPLUS":
      return '+';
    case "KEY_KPDOT":
      return '.';
    default:
      return undefined;
  }
}

exports = module.exports = ReadCharKeypad;


