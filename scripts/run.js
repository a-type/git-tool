const net = require('net');
const exec = require('child_process').exec;

const port = 3000;

const client = new net.Socket();

// start webpack
exec('npm run webpack');

let startedElectron = false;
const tryConnection = () => client.connect({ port: port }, () => {
  client.end();
  if (!startedElectron) {
    console.info('starting electron');
    exec('npm run electron');
    startedElectron = true;
    console.info('done');
  }
});

tryConnection();

client.on('error', () => {
  setTimeout(tryConnection, 1000);
});
