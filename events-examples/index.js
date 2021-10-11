
const EventEmitter = require('events')
const door = new EventEmitter()

door.on('close', ()=> console.log('closing door'));
door.on('open', ()=> console.log('opening door'));

door.emit('open');
door.emit('open');
door.emit('close');

door.removeAllListeners();