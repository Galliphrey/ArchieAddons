import Settings from './config';
import { BOLD, GOLD, LIGHT_PURPLE, RESET, DARK_GRAY, WHITE, ITALIC, GREEN, RED } from './misc/formatting';
import './features/flareAlert'
import './features/jawbusDeathMessageRemover'
import './features/esp-boxrender/jawbusEspRender'

const welcomeMessage = new TextComponent(`\n${BOLD}${GOLD}[${LIGHT_PURPLE}ArchieAddons${GOLD}]${RESET} Loaded!${RESET}`).setHoverValue(`Click to open the ArchieAddons GUI.`).setClick("run_command", "/archieaddons");

register("gameload", (user) => {
    ChatLib.chat(welcomeMessage);
});

register("command", (user) => {
    Settings.openGUI();    
}).setName("archieaddons").setAliases("notarat","aa","skaro");

register("command", (user) => {
    let entityListESP = Settings.espList;
    let listArrayESP = entityListESP.split(",");
    listArrayESP.forEach(item => ChatLib.chat(item));
}).setName("testcode");

register("command", (user) => {
    ChatLib.chat(`***\n${LIGHT_PURPLE}${BOLD}ESP${RESET} Settings\n>>> ${GOLD}Add/Remove${DARK_GRAY} Example: ' /esp Add old wolf '${RESET}\n>>> ${GOLD}List${DARK_GRAY} Example: ' /esp List '${RESET}\n***`)
}).setName("esp");

// the amount of dashes to span all of chat: ----------------------------------------------------