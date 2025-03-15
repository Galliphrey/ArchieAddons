import Settings from './config';
import { BOLD, GOLD, LIGHT_PURPLE, RESET, DARK_GRAY, WHITE, ITALIC } from './misc/formatting';
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
    ChatLib.chat(`***\n${LIGHT_PURPLE}${BOLD}ESP${RESET} Settings\n>>> ${GOLD}Add/Remove${DARK_GRAY} Example: ' /esp Add old wolf '${RESET}\n>>> ${GOLD}Colour${DARK_GRAY} Example: ' /esp Colour magenta '\n${DARK_GRAY}${ITALIC}(See a full list of all colours with /espcolours)${RESET}\n>>> ${GOLD}Thickness${DARK_GRAY} Example: This value has no command, please edit it through the main config screen.${RESET}\n***`)
}).setName("esp");

// make this work :p
register("command", (user, ...args) => {
    ChatLib.chat(`Added ${args.join(" ")} to ESP Entities.`)
}).setName("esp Add");

register("command", (user, ...args) => {
    ChatLib.chat(`Removed ${args.join(" ")} from ESP Entities.`)
}).setName("esp Remove");

register("command", (user) => {
    ChatLib.chat(`***\n${LIGHT_PURPLE}${BOLD}ESP${GOLD} Colours${RESET}\n>>> ${DARK_GRAY}Magenta${RESET}\n>>> ${DARK_GRAY}Red${RESET}\n>>> ${DARK_GRAY}Cyan${RESET}\n>>> ${DARK_GRAY}Blue${RESET}\n>>> ${DARK_GRAY}Green${RESET}\n>>> ${DARK_GRAY}Yellow${RESET}\n>>> ${DARK_GRAY}Orange${RESET}\n>>> ${DARK_GRAY}White${RESET}\n>>> ${DARK_GRAY}Black${RESET}\n***`)
}).setName("espcolours");



// the amount of dashes to span all of chat: ----------------------------------------------------