import Settings from "../config";
import { AQUA, GOLD, GRAY, LIGHT_PURPLE, WHITE } from "../misc/formatting";
import { EntityArmorStand } from "../misc/entities";

let spawnTime = undefined;
let killTime = undefined;
let lastKillTime = undefined;
let bossX = undefined;
let bossY = undefined;
let bossZ = undefined;

function roundToNearest0_05(num) {
    return Math.round(num * 20) / 20;
}

register("chat", (message) => {
    // Reset kill timer on fail/restart
    if (Settings.slayerKillTime) {
        if ((message.includes('SLAYER QUEST FAILED!') && !message.includes(':')) || message.includes('Your Slayer Quest has been cancelled!')) setTimeout(() => spawnTime = undefined, 500)
    }
}).setCriteria("${message}")

register('worldLoad', () => {
    spawnTime = undefined;
    lastKillTime = new Date().getTime();
})

register('tick', () => {
    if (Settings.slayerKillTime) {
        World.getAllEntitiesOfType(EntityArmorStand).forEach(stand => {
            let name = stand.getName().removeFormatting();
    
            // Checks spawned by name tag
            if (name.includes(`Spawned by: ${Player.getName()}`) && spawnTime == undefined) {
                spawnTime = new Date().getTime();
                killTime = undefined;
            }
    
            // Gets spawned by name tag location for boss check later
            if (name.includes(`Spawned by: ${Player.getName()}`)) {
                bossX = stand.getX();
                bossY = stand.getY();
                bossZ = stand.getZ();
            }
    
            // Checks hp name tag to spawned by name tag to check whos boss
            if (name.includes(' 0❤') && (name.includes('Horror') || name.includes('Packmaster') || name.includes('Broodfather') || name.includes('Seraph') || name.includes('Demonlord') || name.includes('Bloodfiend')) && killTime == undefined && Math.hypot(stand.getX() - bossX, stand.getY() - bossY, stand.getZ() - bossZ) < 0.5) {
                killTime = new Date().getTime();
                ChatLib.chat(new TextComponent(`${GOLD}[${LIGHT_PURPLE}ArchieAddons${GOLD}] ${WHITE}Slayer took ${roundToNearest0_05((killTime - spawnTime) / 1000).toFixed(2)}s to kill!`).setHoverValue(`Spawn: ${roundToNearest0_05((spawnTime - lastKillTime) / 1000).toFixed(2)}s\nKill: ${roundToNearest0_05((killTime - spawnTime) / 1000).toFixed(2)}s\nSpawn and kill: ${roundToNearest0_05((killTime - lastKillTime) / 1000).toFixed(2)}s`));
                lastKillTime = new Date().getTime();
                setTimeout(() => spawnTime = undefined, 3000)
                
            }
        })
    }
})