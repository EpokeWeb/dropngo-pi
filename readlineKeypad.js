var inputevent = require('input-event');

function ReadlineKeypad(callback) {
  var line, k = new inputevent('event0')

  k.on("keydown", function (character) {
    character = translateKey(character.keyId);

    // Valid input
    if(IsNumeric(character)) {
      line += character;

      // Length ok
      if(line.length() == 5) {
        k.removeAllListeners();
        callback(line);
      }
    }

    // Error :: cancel previous input
    else {
      line = '';
      console.log("Errored : input so far has been cancelled");
    }
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
      return null
  }
}

exports = module.exports = ReadlineKeypad;


