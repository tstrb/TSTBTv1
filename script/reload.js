module.exports.config = {
	name: "reload",
	version: "1.0.0",
	role: 1,
	credits: "Chill with Tea",
	description: "The bot command will restarts",
	commandCategory: "Penguin",
	usages: "reload + time",
	cooldown: 5
};

module.exports.run = async ({ api, event, args }) => {
 const permission = global.config.GOD;
  	if (!permission.includes(event.senderID)) return api.sendMessage(`⚠️You don't have permission to use this command. Only LaFhanGa chokra`, event.threadID, event.messageID);
	const { threadID, messageID } = event;
	var time = args.join(" ");
	var rstime = "68";
	if (!time) rstime = "69";
	else rstime = time;
	api.sendMessage(`[Bot] => Will reload the bot later ${rstime} second more !`, threadID);
	return setTimeout(() => { api.sendMessage("[Bot] => Reloading Bot !",event.threadID,() => process.exit(1) )},	rstime * 1000);
}
