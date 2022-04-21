const {
	MessageEmbed
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { MessageButton, MessageActionRow } = require('discord.js')
const { handlemsg } = require(`${process.cwd()}/handlers/functions`)
module.exports = {
	name: "developer",
	category: "🔰 Info",
	aliases: ["dev", "Sh3hub"],
	description: "Shows Information about the Developer",
	usage: "developer",	
	type: "bot",
	run: async (client, message, args, cmduser, text, prefix) => {
		let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
		
		try {	
			let button_public_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.invite).setURL("https://discord.com/api/oauth2/authorize?client_id=938371797097795634&permissions=8&scope=bot%20applications.commands")
			let button_support_dc = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.dc).setURL("https://instagram.com/huuubsky")
			let button_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.botlist).setURL(`https://www.youtube.com/channel/UCUIHYE0qOWBOwLnxeCBP6bA`)
			const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
			message.reply({embeds: [new MessageEmbed()
				.setColor(es.color)
				.setFooter(client.getFooter(es))
				.setTimestamp()
				.setThumbnail("https://cdn.discordapp.com/avatars/442355791412854784/df7b527a701d9a1ab6d73213576fe295.webp?size=1024")
				.setTitle(client.la[ls].cmds.info.developer.title)
				.setURL("https://instagram.com/huuubsky")
				.addField("🆕 NEW NERDGAMEHOUSE", `> Version of this Bot on [\`Sh3hub#6290\`'s Github](https://github.com/syihabuddinsanni)\n> [Link](https://github.com/Sh3hub6966/Multipurpose-discord-bot)`)
					.setDescription(client.la[ls].cmds.info.developer.description)],
components: allbuttons
			}).catch(error => console.log(error));
		} catch (e) {
			console.log(String(e.stack).grey.bgRed)
			return message.reply({embeds: [new MessageEmbed()
			  .setColor(es.wrongcolor)
			  .setFooter(client.getFooter(es))
			  .setTitle(client.la[ls].common.erroroccur)
			  .setDescription(eval(client.la[ls]["cmds"]["info"]["color"]["variable2"]))
			]});
		}
	}
}
/**
 * @INFO
 * Bot Coded by Sh3hub#6290 | https://discord.gg/milrato
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
