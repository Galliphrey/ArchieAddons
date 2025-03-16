import Settings from './config';
import { BOLD, GOLD, LIGHT_PURPLE, RESET, DARK_GRAY, WHITE, ITALIC, GREEN, RED, GRAY, OBFUSCATED, DARK_PURPLE } from './misc/formatting';
import './features/flareAlert';
import './features/esp-boxrender/entityEspRender';
import './features/esp-boxrender/slayerEsp';
import './features/esp-boxrender/starredmobEsp';


const welcomeMessage = new TextComponent(`\n${BOLD}${GOLD}[${LIGHT_PURPLE}ArchieAddons${GOLD}]${RESET} Loaded!${RESET}`).setHoverValue(`Click to open the ArchieAddons GUI.`).setClick("run_command", "/archieaddons");

register("gameload", (user) => {
    ChatLib.chat(welcomeMessage);
});

register("command", (user) => {
    Settings.openGUI();    
}).setName("archieaddons").setAliases("notarat","aa","skaro");

register("command", (user) => {
    let world = World.getWorld();
    console.log(world);
}).setName("testcode");

register("command", (user) => {
    ChatLib.chat(`***\n${LIGHT_PURPLE}${BOLD}ESP${RESET} Settings\n>>> ${GOLD}Add/Remove${DARK_GRAY} Example: ' /esp Add old wolf '${RESET}\n>>> ${GOLD}List${DARK_GRAY} Example: ' /esp List '${RESET}\n***`)
}).setName("esp");


//     const newMessage = new Message(`${DARK_PURPLE}${OBFUSCATED}AAA${RESET}${GOLD}♆♆♆ ${RESET}${GREEN}+500 Aura${RESET} ${GOLD}♆♆♆${RESET}${DARK_PURPLE}${OBFUSCATED}AAA${RESET}`)
// the amount of dashes to span all of chat: ----------------------------------------------------
