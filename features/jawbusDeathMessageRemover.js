import Settings from '../config';
register('chat', (message, event) => {
    if (Settings.jawbusMessageHider) {
        if (message && message.toLowerCase().includes("was killed by lord jawbus")) {
            cancel(event);
            ChatLib.chat("HEHE");
        }
    }
})
console.log('Skaro >>> JawbusMessageHider Loaded.')