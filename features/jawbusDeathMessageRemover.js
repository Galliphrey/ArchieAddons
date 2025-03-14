import Settings from '../config';
register('chat', (event) => {
    let message = ChatLib.getChatMessage(event, true); // Get the message

    if (Settings.jawbusMessageHider) { // Ensure the setting is enabled
        if (message && message.toLowerCase().includes("was killed by lord jawbus")) {
            cancel(event); // Cancel the message
            ChatLib.chat("HEHE"); // Confirm cancellation
            print("[DEBUG] Blocked message: " + message);
        }
    }
}).setPriority(Priority.HIGHEST);
console.log('Skaro >>> JawbusMessageHider Loaded.')