import Settings from '../config';
import '../misc/formatting';
import { LIGHT_PURPLE, BLUE, BOLD, RED, RESET, GOLD } from '../misc/formatting';

/* TODO:
 - Make a command
 - make response have best meter thing
 - make 1 for, all diff types
 - have all of that section within same message
 - anything else im forgetting
*/

// Creating all variables
// bazaar api (WILLIT WORK?!?)
async function bazaarAPI() {
    const response = await fetch("https://api.hypixel.net/skyblock/bazaar");
    const bazaarResponse = await response.json();
  
    let ids = [];
    let sellPrices = [];
    let buyPrices = [];
  
    Object.values(bazaarResponse.products).forEach(product => {
      ids.push(product.product_id);
      sellPrices.push(product.quick_status.sellPrice);
      buyPrices.push(product.quick_status.buyPrice);
    });
  
    console.log(ids, sellPrices, buyPrices);
};

// dungeons
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
// slayers
let rev_meter = 1;
let tara_meter = 2;
let sven_meter = 3;
let eman_meter = 4;
let blaze_meter = 5;
let vamp_meter = 6;
// table
let table_meter = 1;
// nuc
let nuc_meter = 1;

const dungMessage = new TextComponent(`${LIGHT_PURPLE}Archie Addons${GOLD} >>> ${BLUE}${BOLD}RNG Meter for: ${RED}Dungeons\n${GOLD}${BOLD}Normal Dungeons\n${RESET}${GOLD}>> ${LIGHT_PURPLE}F1: ${RESET}${floor_1_meter}\n${GOLD}>> ${LIGHT_PURPLE}F2: ${RESET}${floor_2_meter}\n${GOLD}>> ${LIGHT_PURPLE}F3: ${RESET}${floor_3_meter}\n${GOLD}>> ${LIGHT_PURPLE}F4: ${RESET}${floor_4_meter}\n${GOLD}>> ${LIGHT_PURPLE}F5: ${RESET}${floor_5_meter}\n${GOLD}>> ${LIGHT_PURPLE}F6: ${RESET}${floor_6_meter}\n${GOLD}>> ${LIGHT_PURPLE}F7: ${RESET}${floor_7_meter}\n${GOLD}${BOLD}Master Mode\n${RESET}${GOLD}>> ${LIGHT_PURPLE}M1: ${RESET}${master_1_meter}\n${GOLD}>> ${LIGHT_PURPLE}M2: ${RESET}${master_2_meter}\n${GOLD}>> ${LIGHT_PURPLE}M3: ${RESET}${master_3_meter}\n${GOLD}>> ${LIGHT_PURPLE}M4: ${RESET}${master_4_meter}\n${GOLD}>> ${LIGHT_PURPLE}M5: ${RESET}${master_5_meter}\n${GOLD}>> ${LIGHT_PURPLE}M6: ${RESET}${master_6_meter}\n${GOLD}>> ${LIGHT_PURPLE}M7: ${RESET}${master_7_meter}`);

const slayerMessage = new TextComponent(`${LIGHT_PURPLE}Archie Addons${GOLD} >>> ${BLUE}${BOLD}RNG Meter for: ${RED}Slayers\n${RESET}${GOLD}>> ${LIGHT_PURPLE}Rev: ${RESET}${rev_meter}\n${RESET}${GOLD}>> ${LIGHT_PURPLE}Tara: ${RESET}${tara_meter}\n${RESET}${GOLD}>> ${LIGHT_PURPLE}Sven: ${RESET}${sven_meter}\n${RESET}${GOLD}>> ${LIGHT_PURPLE}Eman: ${RESET}${eman_meter}\n${RESET}${GOLD}>> ${LIGHT_PURPLE}Blaze: ${RESET}${blaze_meter}\n${RESET}${GOLD}>> ${LIGHT_PURPLE}Vamp: ${RESET}${vamp_meter}`);

const etableMessage = new TextComponent(`${LIGHT_PURPLE}Archie Addons${GOLD} >>> ${BLUE}${BOLD}RNG Meter for: ${RED}Experimentation Table\n${RESET}${GOLD}>> ${LIGHT_PURPLE}Experimentation Table: ${RESET}${table_meter}`);

const nucMessage = new TextComponent(`${LIGHT_PURPLE}Archie Addons${GOLD} >>> ${BLUE}${BOLD}RNG Meter for: ${RED}Crystal Nucleus\n${RESET}${GOLD}>> ${LIGHT_PURPLE}Crystal Nucleus: ${RESET}${nuc_meter}`);



// Setting commands up
register('command', (floor) => {
    if (floor === 'f1') {}
});
// idea, probably wont use (above)

register("command", (user) => {
    ChatLib.chat(dungMessage)
}).setName("dungeonmeter").setAliases("dungmeter");

register("command", (user) => {
    ChatLib.chat(slayerMessage)
}).setName("slayermeter");

register("command", (user) => {
    ChatLib.chat(etableMessage)  
}).setName("tablemeter");

register("command", (user) => {
    ChatLib.chat(nucMessage)   
}).setName("nucleusmeter").setAliases("nucmeter");

console.log(`Archie Addons >>> MeterStuff Loaded.`)