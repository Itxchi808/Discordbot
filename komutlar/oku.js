const { MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
	name: 'oku',
	description: 'HWID listesini okur.',
	async execute(message, args) {
        if (message.author.id == "757171801574080552") {
            try {
                var read = await fetch("http://localhost:3000/api?o=r").then(response => response.text())
              } catch (err) {
                console.log(err)
              }
                  message.reply({ content: '``'+`${read}`+'``'});
        }
        else {
            message.reply({content: "Bunu yapmak için yetkiniz yok."})
        }
		},
};