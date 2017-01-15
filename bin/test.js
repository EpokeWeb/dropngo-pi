var lock = require('../lock');

lock.lock();

setTimeout(() => {
  lock.unlock();
  setTimeout(() => {
    lock.lock();
  }, 2000)
}, 2000);
