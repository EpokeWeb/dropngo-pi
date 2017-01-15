var validateNIP = require('../validateNip');

validateNIP(12345, function() {
   console.log('NIP Valide. Merci!'); 

  validateNIP(54321, function() {
     console.log('NIP Valide. Merci!'); 
  });
});

