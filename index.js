import Settings from './config';
import { BOLD, GOLD, LIGHT_PURPLE, RESET, DARK_GRAY, WHITE, ITALIC, GREEN, RED, GRAY, OBFUSCATED, DARK_PURPLE, BLUE, DARK_AQUA, DARK_BLUE, DARK_GREEN, DARK_RED, AQUA, YELLOW } from './misc/formatting';
import './features/flareAlert';
import './features/esp-boxrender/entityEspRender';
import './features/esp-boxrender/slayerEsp';
import './features/esp-boxrender/starredmobEsp';
import './features/newFeature';


const welcomeMessage = new TextComponent(`${BOLD}${GOLD}[${LIGHT_PURPLE}Archie Addons${GOLD}]${RESET} Loaded!${RESET}`).setHoverValue(`Click to open the Archie Addons GUI.`).setClick("run_command", "/archieaddons");

register("gameload", (user) => {
    ChatLib.chat(welcomeMessage);
});

register("command", (user) => {
    Settings.openGUI(); 
}).setName("archie").setAliases("notarat","aa", "archieaddons", "araara");

register("command", (user) => {
    let scoreboard = Scoreboard.getLines();
    scoreboard.forEach(line => {
        let text = line.toString().removeFormatting(); // Convert to string and clean colors

        if (text.includes("⏣")) { // Look for SkyBlock location marker
            let worldName = text.replace("⏣", "").trim();

            // Remove any non-standard characters (anything outside normal letters/numbers)
            worldName = worldName.replace(/[^\x00-\x7F]/g, ""); 

            console.log("You are in: " + worldName);
        }
    });
}).setName("testcode");

let floor_1_meter = 1;
let floor_2_meter = 2;
let floor_3_meter = 3;
let floor_4_meter = 4;
let floor_5_meter = 5;
let floor_6_meter = 6;
let floor_7_meter = 7;
let master_1_meter = 8;
let master_2_meter = 9;
let master_3_meter = 10;
let master_4_meter = 11;
let master_5_meter = 12;
let master_6_meter = 13;
let master_7_meter = 14;

const dungMessage = new TextComponent(`${LIGHT_PURPLE}Archie Addons${GOLD} >>> ${BLUE}${BOLD}RNG Meter for: ${RED}Dungeons\n${GOLD}${BOLD}Normal Dungeons\n${RESET}${GOLD}>> ${LIGHT_PURPLE}F1: ${RESET}${floor_1_meter}\n${GOLD}>> ${LIGHT_PURPLE}F2: ${RESET}${floor_2_meter}\n${GOLD}>> ${LIGHT_PURPLE}F3: ${RESET}${floor_3_meter}\n${GOLD}>> ${LIGHT_PURPLE}F4: ${RESET}${floor_4_meter}\n${GOLD}>> ${LIGHT_PURPLE}F5: ${RESET}${floor_5_meter}\n${GOLD}>> ${LIGHT_PURPLE}F6: ${RESET}${floor_6_meter}\n${GOLD}>> ${LIGHT_PURPLE}F7: ${RESET}${floor_7_meter}\n${GOLD}${BOLD}Master Mode\n${RESET}${GOLD}>> ${LIGHT_PURPLE}M1: ${RESET}${master_1_meter}\n${GOLD}>> ${LIGHT_PURPLE}M2: ${RESET}${master_2_meter}\n${GOLD}>> ${LIGHT_PURPLE}M3: ${RESET}${master_3_meter}\n${GOLD}>> ${LIGHT_PURPLE}M4: ${RESET}${master_4_meter}\n${GOLD}>> ${LIGHT_PURPLE}M5: ${RESET}${master_5_meter}\n${GOLD}>> ${LIGHT_PURPLE}M6: ${RESET}${master_6_meter}\n${GOLD}>> ${LIGHT_PURPLE}M7: ${RESET}${master_7_meter}`);


register("command", (user) => {
    ChatLib.chat(dungMessage);
}).setName("testmeter");

//     const newMessage = new Message(`${DARK_PURPLE}${OBFUSCATED}AAA${RESET}${GOLD}♆♆♆ ${RESET}${GREEN}+500 Aura${RESET} ${GOLD}♆♆♆${RESET}${DARK_PURPLE}${OBFUSCATED}AAA${RESET}`)
// the amount of dashes to span all of chat: ----------------------------------------------------
