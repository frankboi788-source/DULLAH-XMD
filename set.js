const fs = require('fs-extra');
const path = require("path");

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA7VWy47iRhT9lVYtAxqM30ZqKX6CocGAsXlEWRR2AWX8olwG3CMWUaRsEyWrWYyUfX4hH5NPmE+ITHfPtJJJpyNNLNmyr0u3zj2+51y/BWmGCzRAFei8BTnBR0hRfUurHIEO0MrNBhHQBCGkEHSAY+4OHoR0tVjLCasdhvc9x1kNlDMvpOXdIB1USsY1WmvHU2/BpQnych3j4IWEurOq7MESenZ7PabxqV+sPZuIxn4W+LZZspNhj3atscWrxS241BkhJjjdmvkOJYjAeICqMcTkdfAzzdFNfeNYe9XkJ2QRSeWmXwmxG0VG43xQpnBYKVpLZHrF6+CzpxyiqBHjFc2QkJfuskW3S2uXLEK066GoMXLTcIxWCyw/wC/wNkWhHaKUYlq9mne363uyl4RHMTDy+fye6yuDqSNMHDTxJ4lk8xFhVoft2WTN1wEfOfNzFciZuBoflNIToX/Sql2jxea7oyt3u0l2lARxkJnq/jnwMXnqlf1/4b2w93frxVTzV8rU787Wlt3YwSo37gxlvwuiSDwtj6o0G+9N/nXwLUsc3Y3u2c2C16PtDo8quX1ouBbxfG/mjcacFKyn5UTEc/4TfEhL8hLKBGeQhf3+rl0S7mgqqy6Otn7Foznnj92tGXbjtYb7jl/gUORMbjEYdx1Xk2HY9WSimhPZ9OI+Zxjn1Soqq+nSEspocnutaI8qOwSd9qUJCNrighJIcZbWMZaXmgCGRxcFBNErvUCJy934sEHunSmmeDNruUKfE+KzxNu5fWf0T6puzOYHDrPFLWiCnGQBKgoU9nBBM1INUVHALSpA55vrl6qLJijJKOrjsG5bSZI5QeYYUf66eHPaQVrAPH+TIgqaYEOyZIhAh5ISNcF1vcTosqKqkmRZos4aCmtpBsvICi9zvMAbVl1h8rDnDCeooDDJQactCYLI8ZwiXZpfBAbTlkxB4GVdlyWdE3SdEwRGtBRR1DSWFbUXYfAM84VgyLyiS6IhyobIC7Kum5qiiiYjWLxl8rqsvAyjLV++bYIUnemDmOoW4NpNsMGkoF5a5nEGwyelPb2EQZCVKXWrNNDrG0RA51kYUYrTbVEXVqaQBDt8RHpdB+hsYFygj12HCAqfanl0Uj0LazGwpuirznIGaux1or9S0+GZv7OTwnox+PD+3Xcf3r/78UbLcPMri8B0f3PzMfjH7z/cXC8ffvn+15sPP//02/95giaIr9gFSVEEgWNEvi0wSg2/jl8+slYXGSIKcVzUg8heT0+DpWYOxfZe9rpd1d6q+lYFn1h+spAHibJevyJTrtVaKkq5NO9PVkgatpRZ07wnDqgzOBwDbyRGnMXcfiYJ6IBhQKezNTFGwWl1NxrsleW23+YWDcGUynIeDZ3MMqPsyFrDxkJCau9sRfLeOKulcN8QlpPDaj4yR/NtPphuR3wSyv5mlGvqbb1biI44QM83O7tKSslIa7VGfMuny3LoFidixJPWfTE8ODLBpQnvjYZz5uwZ3AWtqmeHATb6fSv3l4fdwpUYfxXO1HJQ9E/c+ZyhHJ8ezO1qrvHjUMOPtoOvjxuMrjPisVH+rZ8ecNddz1yaz1I8Dp1/MG4tjPXgwIStFjverBNtKGsL2MKOqHlw2sBkhg+EswyUKecQXGr55TGkm4wk9WxK1hA0AcnKWkN2usle+l1Rt7b2aOkxLKj6SZefM772w6oxyfIeLHY1Ab4kHbxaZJWa5y6F9EnmQK0Py8fg8idKXJjOlgkAAA==',
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
