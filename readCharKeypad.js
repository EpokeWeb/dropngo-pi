var inputevent = require('input-event');
var event0 = new inputevent('by-id/usb-05d5_KEYBOARD-event-kbd')

function ReadCharKeypad(callback) {

  event0.on("keyup", (raw) => {
    console.log('ReadCharKeypad', 'keyup');
    var character = translateKey(raw.keyId);

    if (!character) {
      console.log('ReadlineKeypad', 'error unknown character', raw);
      return callback('-1');
    }

    event0.removeAllListeners();
    callback(character);
  });
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


