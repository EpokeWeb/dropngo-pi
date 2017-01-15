var lock = require('./lock');

lock.lock();

setTimeout(() => {
  lock.unlock();
}, 2000);
