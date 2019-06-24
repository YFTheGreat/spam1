const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592731287585030144")
setInterval(function() {
channel.send(`Chief Pat Server Rules

DO NOT TAG CHIEF PAT

Tagging Chief Pat may result in an instant kick from the server, repeated offenders will be banned

1. Be Respectful at all times. The following content is not permitted in any channel:
•    NSFW comments or pictures of any kind
•    Obscene, Racial, or Religious conversations/posts
•    Spamming (text or voice channels)
•    Advertising of any kind without permission
•    Bypassing word filter
•    Discriminatory jokes and language, hate speech (which calls out a group by their age, race, gender), etc
•    Displaying offensive, derogatory, or sexually explicit content
•    Verbal abuse, insults, or threats towards others
•    Advocating for or encouraging any of the above behavior

2. Follow the Terms of Service (TOS), Community Guidelines and Partner Code of Conduct
•    https://discordapp.com/tos
•    https://discordapp.com/guidelines
•    https://support.discordapp.com/hc/en-us/articles/360024871991-Discord-Partnership-Code-of-Conduct

3. Respect the Staff. The staff will attempt to be fair and unbiased on every account.  If you feel the staff was unfair or biased, please open a ticket from #support-center and then proceed to share appropriate screen shot proof. These messages will be reviewed by staff and action taken if necessary.

4. No Ignorance. Not knowing the rules is never an excuse to breaking any of the above rules. It is your job to make sure you know the rules. An announcement will be made each time the rules are updated however.
For further access to the server, please react below with a check. By reacting to this message you agree to have read, understood and agree to abide by our server’s rules. Ignorance will not be tolerated as an excuse.

If you accept this and still break any rule you are subject to any punishment the staff deems appropriate.`);
}, 30)
})

client.login(process.env.BOT_TOKEN);