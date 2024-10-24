const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=DjJ3jRKY#6BOX1mWQCPCiCs8Wh42_uyUfV7-WikOjHY1Q2mbJzU4",
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
