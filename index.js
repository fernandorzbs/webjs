const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');


const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    } 
});

client.on('message_create', message => {
	console.log("mensaje create --"+message.body);
});

client.initialize();