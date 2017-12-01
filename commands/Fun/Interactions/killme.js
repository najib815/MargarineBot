exports.run = async (client, message) => {
    let User = message.author.username;

    message.channel.send(`${User} has died.`).then(Message => {
        setTimeout(() => { Message.edit("Respawning..."); }, 1000);
        setTimeout(() => { Message.edit(`Revival complete. Welcome back, ${User}`); }, 1000);
    });
};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: ["kms", "killmepermanently"],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
};
      
exports.help = {
    name: "killme",
    description: "Kill yourself with this command. Now comes with free revival!",
    usage: "",
    usageDelim: "",
};