const { MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
	name: 'clear',
	description: 'HWID listesini temizler.',
	async execute(message, args) {
        if (message.author.id == "757171801574080552") {
            try {
              var res = await fetch("http://localhost:3000/clear")
              } catch (err) {
                console.log(err)
              }
              message.reply({ content: "Response: \n"+`${res}`}); 
        }
		},
};