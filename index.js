import Settings from './config';
import { BOLD, GOLD, LIGHT_PURPLE, RESET, DARK_GRAY, WHITE, ITALIC, GREEN, RED, GRAY, OBFUSCATED, DARK_PURPLE, BLUE, DARK_AQUA, DARK_BLUE, DARK_GREEN, DARK_RED, AQUA, YELLOW } from './misc/formatting';
import './features/flareAlert';
import './features/esp-boxrender/entityEspRender';
import './features/esp-boxrender/slayerEsp';
import './features/esp-boxrender/starredmobEsp';
import './features/guiConfig';

function cryptPlayer(args) {
    if (args.length === 0 || !args[0]) { // Check if no arguments were provided
        ChatLib.chat("Please enter a username when using that command!");
        return;
    }
    const cryptMessage = new TextComponent(`${BOLD}${GOLD}[${LIGHT_PURPLE}Archie Addons${GOLD}]${RESET} Skycrypt for ${args[0]}: ${GREEN}${BOLD}CLICK ME!`)
        .setHoverValue(`Click to open link.`)
        .setClick('open_url', `https://sky.shiiyu.moe/stats/${args[0]}`);
    ChatLib.chat(cryptMessage);
}

const welcomeMessage = new TextComponent(`${BOLD}${GOLD}[${LIGHT_PURPLE}Archie Addons${GOLD}]${RESET} Loaded!${RESET}`).setHoverValue(`Click to open the Archie Addons GUI.`).setClick("run_command", "/archieaddons");

register("gameload", (user) => {
    ChatLib.chat(welcomeMessage);
});

register("command", (user) => {
    Settings.openGUI(); 
}).setName("archie").setAliases("notarat","aa", "archieaddons", "araara");

register('command', (...args) => {
    if (args.length === 0 || !args[0]) {
        ChatLib.chat("Please enter a username when using that command!");
    } else {
        cryptPlayer(args);
    }
}).setName("crypt")

register("command", (user) => {
    //testing
}).setName("testcode");
//     const newMessage = new Message(`${DARK_PURPLE}${OBFUSCATED}AAA${RESET}${GOLD}♆♆♆ ${RESET}${GREEN}+500 Aura${RESET} ${GOLD}♆♆♆${RESET}${DARK_PURPLE}${OBFUSCATED}AAA${RESET}`)
// the amount of dashes to span all of chat: ----------------------------------------------------