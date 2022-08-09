const {SlashCommandBuilder} = require("@discordjs/builders")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		const ayarlar = require("../ayarlar.json") 
		const data = new SlashCommandBuilder()
			.setName('onayla')
			.setDescription('HWID onaylar.')
			.addStringOption(option =>
				option.setName('input')
					.setDescription('HWID')
					.setRequired(true));
		
		console.log(`${client.user.tag} adıyla giriş yapıldı.`);
	},
};
