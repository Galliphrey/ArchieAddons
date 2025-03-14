import Settings from './config';
import { GRAY, RESET, BOLD, DARK_PURPLE, GOLD, LIGHT_PURPLE } from './misc/formatting';
import './features/flareTimer'

register("gameload", (user) => {
    ChatLib.chat(`
    ${BOLD}${GOLD}[${LIGHT_PURPLE}ArchieAddons${GOLD}]
    ${RESET}Welcome to My Mod!! :)
    Have FUN!!!`)
});

register("command", (user) => {
    Settings.openGUI();    
}).setName("archieaddons").setAliases("notarat","aa","skaro");