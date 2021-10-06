//Auto loop status
client.on('ready', () => {
    console.log(`Online ${client.user.tag}`);
   

    client.user.setStatus('dnd');
    setInterval(() => {
        const statuses = [
            `Tiktok `,
            'Youtube',
            `Top.gg`,
            `industry baby`,
            `Me`,
            `Customspin YT`,
            `Hockey`,
            `Console`,
            `Cocomellon`,
            `Free guy`,
            `trains`,
            `anime`,
            `my site`,
            'Jokes',
        
            
            
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING" })
    }, 10000)
});

// Guild leave or join


client.on("guildCreate", guild => {
  const embed = new MessageEmbed()
  .setTitle("I got added to a new guild")
  .setColor("GREEN")
  .setDescription(`I got added to ${guild.name}, \n with ${guild.memberCount} members\n\n Total servers: ${client.guilds.cache.size} \n Id: ${guild.id} \n Owner id: ${guild.ownerID} \n Owner name: ${guild.owner}  `)
  .setTimestamp()
  const LogChannel = client.channels.cache.get("")
  LogChannel.send(embed)
})

client.on("guildDelete", guild => {
  const embed1 = new MessageEmbed()
  .setTitle("I left a guild...")
  .setColor("RED")
  .setDescription(`I left ${guild.name},\n that had ${guild.memberCount} members\n\n Total servers: ${client.guilds.cache.size} \n Id: ${guild.id} \n Owner id: ${guild.ownerID} \n name: ${guild.owner}`)
  .setTimestamp()
  const LogChannel = client.channels.cache.get("")
  LogChannel.send(embed1)
})

// Auto message

client.on("message", (message) => {
    if (message.content === "family") {
        message.channel.send(`family, yes family`);
    }
    if (message.content === "dom territo") {
        message.channel.send(`family is the most important thing`);
    }
    if (message.content === "sad") {
        message.channel.send(`:/ when your sad i am to `);
    }
        if (message.content === "dom territo?") {
        message.channel.send(`family is the most important thing`);
        }   
        if (message.content === "burger") {
        message.channel.send(`I WANT IT BIG`);
        }
        if (message.content === "servers") {
        message.channel.send(`I am Active in ${client.guilds.cache.size} Servers`);
        }
        if (message.content === "Top-gg") {
        message.channel.send(`Join!!! https://discord.gg/dbl`);
        }
        if (message.content === "top-gg") {
        message.channel.send(`Join!!! https://discord.gg/dbl`);
        }if (message.content === "Top.gg") {
        message.channel.send(`Join!!! https://discord.gg/dbl`);
        }
        if (message.content === "top.gg") {
        message.channel.send(`Join!!! https://discord.gg/dbl`);
        }
        if (message.content === "qt") {
        message.channel.send(`OMG!!! a qt :heart:`);
        }
        if (message.content === "cutie") {
        message.channel.send(`OMG!!! a cutie :heart:`);
        }
   
});


// Chat bot '
const Chat = require("easy-discord-chatbot");
const chat = new Chat({ name: "BOT NAME" });


client.on("message", async message => {
  if(message.channel.name === "ai-chat" && !message.author.bot) {    
    let reply = await chat.chat(message.content)
   message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
  if (message.content.includes(`@`)) {
    return message.reply(`**:x: Please dont mention anyone**`);
  }
   
 message.channel.startTyping();
setTimeout(function(){
    message.channel.stopTyping();
    message.reply(reply);
}, 5000);

  }
  }); 

// Make nickname and channel
client.on("guildCreate", guild => {
 
 
 guild.me.setNickname("Dummy");


});


client.on("guildCreate", guild => {
console.log("Joined server!")

guild.channels.create("suggestions", {type: 'text'})
})
