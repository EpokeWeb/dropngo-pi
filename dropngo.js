const EventEmitter = require('events');
const net = require('net');

class Dropngo extends EventEmitter {
  constructor() {
    super();
    this.socket = new net.Socket();
    this.socket.on('data', (data) => {
        this.handleData(data)
    });
  }

  connect(options) {
    console.log('Dropngo#connect', options);
    this.socket.connect(options);   
  }


  fulfilled(options) {
    console.log('Dropngo#fulfilled', options);
    var notify = options && options.notify || false;
    const nip = this.generateNIP();
    this.sendData('pickup', {nip: nip, notify: notify});
    return nip;
  }

  generateNIP() {
    return Math.floor(Math.random() * 90000 + 9999);
  }

  handleData(raw) {
    const data = JSON.parse(raw);
    console.log('Dropngo#handleData', data);
    this.emit(data.name, data.payload)
  }

  sendData(name, payload) {
    var data = {name: name, payload: payload}
    console.log('Dropngo#sendData', data);
    
    if (!this.socket || !this.socket.remoteAddress) {
      console.log('error', 'Dropngo socket not connected');
    }
      
    this.socket.write(JSON.stringify(data));
  }
}

module.exports = Dropngo;
