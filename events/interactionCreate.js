module.exports = {
    name: 'interactionCreate',
    execute(interaction, client) {
        if (!interaction.isCommand()) return
        if (interaction.commandName === 'onayla') {
          const string = interaction.options.getString('input');
          try {
            fetch("http://localhost:3000/api?o=w&w="+string)
          } catch (err) {
            console.log(err)
          }
          return interaction.reply({ content: "Başarılı." })
        }
    }
}