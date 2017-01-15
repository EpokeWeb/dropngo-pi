var ReadlineKeypad = require('./readlineKeypad');

function validateNIP(nip, callback) {
  console.log('validateNIP', 'waiting for nip...');

  ReadlineKeypad((line) => {
    if (line == nip) {
      console.log('validateNIP', 'successful');
      callback();
    } else {
      console.log('validateNIP', 'error invalid nip');
      validateNIP(nip, callback);
    }
  });
}


exports = module.exports = validateNIP;

