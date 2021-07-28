const Discord = require("discord.js");
const client = new Discord.Client();

const { AutoPoster } = require('topgg-autoposter')

const poster = AutoPoster('Topgg Token', client) // your discord.js or eris client

// optional
poster.on('posted', (stats) => { // ran when succesfully posted
  console.log(`Posted stats to Top.gg | ${stats.serverCount} servers`)
})

//keep alive
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`REAL LISTENING  http://localhost:${port}`));

client.login('DISCORD_BOT_TOKEN');
