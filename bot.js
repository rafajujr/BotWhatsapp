const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    webVersionCache: {
      type: "remote",
      remotePath:
        "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
    },
  });

client.on('ready', () => {
    console.log('Cliente está on-line!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message_create', message => {
	if (message.body.toLocaleLowerCase() === 'boa noite') {
		client.sendMessage(message.from, 'Olá seja bem vindo');
        client.sendMessage(message.from, 'Escolha uma das opções');
        client.sendMessage(message.from, '1 - quero aceitar Jesus');
        client.sendMessage(message.from, '2 - quero me batizar');
        client.sendMessage(message.from, '3 - quero se aclamado');
        client.sendMessage(message.from, '4 - quero é nada');
	}

    if (message.body.toLocaleLowerCase() === '1') {
		client.sendMessage(message.from, 'faça essa oração...');
	}

    if (message.body.toLocaleLowerCase() === '2') {
		client.sendMessage(message.from, 'preencha o link do formulário...');
	}

    if (message.body.toLocaleLowerCase() === '3') {
		client.sendMessage(message.from, 'preencha o link do formulrio');
	}

    if (message.body.toLocaleLowerCase() === '4') {
		client.sendMessage(message.from, 'Vá em paz e Deus abençoe!');
	}
});

client.initialize();