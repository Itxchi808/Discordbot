const { MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
	name: 'onayla',
	description: 'HWID ONAYLAR',
	execute(message, args) {
		message.content = message.content.replace(".onayla", "");
	  	try {
			fetch("http://localhost:3000/api?o=w&w="+message.content)
	  	} catch (err) {
			console.log(err)
	  	}
      		message.reply({ content: 'Başarılı!'});
		},
};