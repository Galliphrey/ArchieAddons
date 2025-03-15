import Settings from './config';
import { BOLD, GOLD, LIGHT_PURPLE, RESET, DARK_GRAY, WHITE } from './misc/formatting';
import './features/flareAlert'
import './features/jawbusDeathMessageRemover'
import './features/esp-boxrender/jawbusEspRender'


register("gameload", (user) => {
    ChatLib.chat(`\n***\n${BOLD}${GOLD}[${LIGHT_PURPLE}ArchieAddons${GOLD}]\n${RESET}Welcome to My Mod!! :)\nHave FUN!!!\n***`)
});

register("command", (user) => {
    Settings.openGUI();    
}).setName("archieaddons").setAliases("notarat","aa","skaro");

register("command", (user) => {
    ChatLib.chat(Settings.espThickness)
}).setName("testcode");

register("command", (user) => {
    ChatLib.chat(`***\n${LIGHT_PURPLE}${BOLD}ESP${RESET} Settings\n>>> ${GOLD}Add/Remove${DARK_GRAY} Entities: ${WHITE}bleh${RESET}\n>>> ${GOLD}Change${DARK_GRAY} ESP-Box Colour: ${WHITE}bleh${RESET}\n>>> ${GOLD}Change${DARK_GRAY} ESP-Box Thickness: ${WHITE}bleh${RESET}\n***`)
}).setName("esp");

// the amount of dashes to span all of chat: ----------------------------------------------------