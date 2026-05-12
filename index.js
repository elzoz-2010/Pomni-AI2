import { Client } from 'meowsab';
import { group, access } from "./system/control.js";
import UltraDB from "./system/UltraDB.js";
import sub from './sub.js';

/* =========== Client ========== */
const client = new Client({
  phoneNumber: '201067964575', // Bot number
  prefix: [".", "/", "!"],
  fromMe: false, 
  owners: [
  // Owner 1
    { name: "𝐸𝐿𝑍𝑂𝑍 𝑒𝑙𝑚𝑜𝑠ℎ𝑎𝑔ℎ𝑖𝑏", lid: "247579682029763@lid", jid: "201067964575@s.whatsapp.net" },
  // Owner 2
    { name: "emam", lid: "221307316789354@lid", jid: "201146212805@s.whatsapp.net" },
  // Owner 3
    { name: "Sukuna", jid: "201067964575@s.whatsapp.net", lid: "50414477168824@lid" },
  // Owner 4 
   { name: "عمورتي", jid: "201146212805@s.whatsapp.net", lid: "51664513925368@lid" }
  ],
  settings: { noWelcome: false },
  commandsPath: './plugins'
});

client.onGroupEvent(group);
client.onCommandAccess(access);

/* =========== Database ========== */
if (!global.db) {
    global.db = new UltraDB();
}

/* =========== Config ========== */
const { config } = client;
config.info = { 
  nameBot: "♡ 𝐸𝐿𝑍𝑂𝑍🎪 〈", 
  nameChannel: "𝐸𝐿𝑍𝑂𝑍🕷️", 
  idChannel: "120363407772474123@newsletter",
  urls: {
    repo: "https://github.com/deveni0/Pomni-AI",
    api: "https://emam-api.web.id",
    channel: "https://whatsapp.com/channel/0029VbCb2P4EVccEXogcoJ1R"
  },
  copyright: { 
    pack: 'ڤـ ـ VA ـ ـا', 
    author: '𝐸𝐿𝑍𝑂𝑍'
  },
  images: [
    "https://i.pinimg.com/originals/11/26/97/11269786cdb625c60213212aa66273a9.png",
    "https://i.pinimg.com/originals/e2/21/20/e221203f319df949ee65585a657501a2.jpg",
    "https://i.pinimg.com/originals/bb/77/0f/bb770fad66a634a6b3bf93e9c00bf4e5.jpg"
  ]
};

/* =========== Start ========== */
client.start();

setTimeout(async () => {
if (client.commandSystem) { 
sub(client)
  }
}, 2000);


/* =========== Catch Errors ========== */
process.on('uncaughtException', (e) => {
    if (e.message.includes('rate-overlimit')) {}
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err)
});


/* 
=========== Memory Monitor ========== 

setInterval(() => {
    const used = process.memoryUsage().rss / 1024 / 1024
    if (used > 800) {
        console.log(`🔄 Bot memory full (${used.toFixed(1)}MB), restarting...`)
        process.exit(1) 
    }
}, 300_000) 

*/
