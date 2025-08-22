const fs = require('fs-extra');
const path = require("path");

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID "DULLAH-MD;;;H4sIAAAAAAAAA7VVy46jRhT9lVYtp62xeYOllgIYbPwC2+BHR1nwKOhq83JRGOiRF6NI2SZKVrMYKdsov5CPifIF/QkR7u6ZVjKZ6UgJEqi4lO4959Q9lzcgzVABJ7AB/Tcgx+joEtguSZND0AdKGYYQgw4IXOKCPoh01d774cFpKtvxqmtrJ8nTQ84U1GChK15gjLab6cQiFVNcgVMH5KUXI/8zCbsJXsMIMv70rucPtTupSO/CKIhZjejcWuYlRlRrPE/Wcu8KnNqMLsIojbT8BiYQu/EENpaL8Mvgs8pothcZWFfmRhkxE6bGYRana3GzNOqZkSNLpxxh3iwd+WXwIyaU9TUUbX8z7prBDB3jOm1EqixpvbuoNOdSsdb8qFtFzgP8AkUpDIwApgSR5sW6VxauDfugZnF28GUmyUMy8lY51hYabdrmUonWARwO0nD7Qt1rmhk6s2MzK6QFWwzGGimDZaPfoqSLpvuxwGSTcW1NuHIbPQdu4ade2f8b3TeaJmacZs/NmwXXqMiVez5j541dGtp0M1Z9UcKXMmsX68XL4Ce3NbLSLGNnhZpRW0iLd2RH7/3gelpPFKaKC5+WlkO5dp7Bd0mJP4dSsvfJjJsmy4G1CZzrLU1qll8uqqb26WkUTlO6jIf6NDRDwXMnWxdfEoaSF4xlmDmTxJTMz11tp3usAj2a3S2qzbUsL67OjPawMQLQp04dgGGECoJdgrK0jdFUB7jBcQV9DMlZXVDe+WtMMQOr5iReqrlQzAbL2Y0pzzlbEzEn0uaAMqh9dhNdgQ7IcebDooDBCBUkw80MFoUbwQL0vz4fVMsZwyQjcIwC0Ae0IIgMJzI9XvyqeF3duKRw8/x1CgnogBBnyQyCPsEl7IDzfl7iGV4WKZmjKVGie+yAUihJl2Ve1BldY1uCyUNNGyWwIG6Sgz4lcJwoUIxInTr/CQxpILFKT6UElqF1VpAZSdQ4ipN0lRZ4nv8SDO70TQeksCYPTdxKz1AdECJcECct8zhzg6cOf/ro+n5WpmTVpL7aLiAG/WdhSAhKo6IlVqYu9m/QEaotD9AP3biAH04bYhg8cXmcYGoWtE0o7QbKeLkdgxZ7m+iv0vRZ7u/qpG67Gdy/f/f2/v277y+UDHVe6dhN9xcXH4K///bdxflx/9O3P9//+MOv/+f9x9tfXoEOiM/wOUGSOI7p8SzF9aSWQRs/fRCu5RlA4qK4AH2gGuGymuwUzbDqzHeGQ1mLZDWSwUehn9z7YA/aGTd4yXS7O0kqd9pdpQf40hAyfZmP+AkxJ4ej78z5W0bvXX0iCegD37RnVlWu8iBZrTxaYwxjt7UExRoHk6ZQd3vKXFyaw8YtRsXddXJbVaslq2l2fMyD9eVhMBDMBb9X+T1N1AmeUrkFPTm6aqsF8Ih8+LyYQK89VAbrSOQnt1TdnU+HuLtaeWuSW7zniUQb+ptumkfjyifO1IxVdruEZoa19KDR8tw2nXo7Dy8Lw1MtkVfT/dpUooe5cp5r8eP/BD1aHp1fQwTP4/mxV77UUg+428bvnTrPUjzO+3+YmUoQq/6hF3S7tBV6iTITla3bRSavOO7yEmEbHTCjD2Am1QE4tQ7MY5eEGU5AHxSJ54IOwFnZ2shIw+wzlVQ5MpTHaRq7BZE/WvMTbheYh10WzvKRW9y0AqwF4eC0PmvkPF8Rlzw5HcjtZWYInP4EyWLycxEJAAA=",
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME : process.env.OWNER_NAME || "*@⁨𝙁𝙏 Boi,*Frank  𝙁𝙏 ༆  ༆ 𓃠",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "27783583068",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT_NAME : process.env.BOT_NAME || '*@⁨𝙁𝙏 Boi,*Frank  𝙁𝙏 ༆  ༆ 𓃠-xᴍᴅ v²',
    URL : process.env.IMAGE_MENU || 'https://files.catbox.moe/hznuyq.jpeg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY,
    WARN_COUNT : process.env.WARN_COUNT || '3',
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'no',
    ANTICALL : process.env.ANTICALL || 'no',
    AUTO_REACT : process.env.AUTO_REACT || 'no',
    AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
    AUTO_READ : process.env.AUTO_READ || 'yes',
    AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
    AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
    AUTO_BIO : process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'no',
    AUTO_STICKER : process.env.AUTO_STICKER || 'yes',
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'yes',
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'yes',
    ANTIBAD: process.env.ANTIBAD || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
        : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
};

let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`File updated: ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
