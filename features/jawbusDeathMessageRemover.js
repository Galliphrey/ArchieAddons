import Settings from '../config';
register('chat', (message, event) => {
    if (Settings.jawbusMessageHider) {
        if (message.toLowerCase().includes("was killed by lord jawbus")) {
            cancel(event);
            ChatLib.chat("HEHE"); // just here as a debug thing atm, will be removed once i get this working
        }
    }
})
console.log('Skaro >>> JawbusMessageHider Loaded.')