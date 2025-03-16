import Settings from './config';
import { BOLD, GOLD, LIGHT_PURPLE, RESET, DARK_GRAY, WHITE, ITALIC, GREEN, RED, GRAY, OBFUSCATED, DARK_PURPLE } from './misc/formatting';
import './features/flareAlert'
import './features/esp-boxrender/entityEspRender'

// Resource pack copying
const File = Java.type("java.io.File");
const Files = Java.type("java.nio.file.Files");
const Paths = Java.type("java.nio.file.Paths");
const StandardCopyOption = Java.type("java.nio.file.StandardCopyOption");

function copyResourcePack() {
    const resourcePackPath = Paths.get(new File('.').getAbsolutePath(), 'config', 'ChatTriggers', 'modules', 'ArchieAddons', '! ArchieAddons FontPack.zip'); // Path to your resource pack inside the module folder
    
    // Determine the correct resource pack folder
    let minecraftResourcePackFolder;
    if (new File('.').getAbsolutePath().includes('PrismLauncher')) {
        // Prism Launcher instance directory
        minecraftResourcePackFolder = Paths.get(new File('.').getAbsolutePath(), 'resourcepacks');
    } else {
        // Default Minecraft directory
        minecraftResourcePackFolder = Paths.get(java.lang.System.getenv("APPDATA"), '.minecraft', 'resourcepacks');
    }
    
    const destinationPath = minecraftResourcePackFolder.resolve('! ArchieAddons FontPack.zip'); // Destination path for the resource pack

    // Log paths for debugging
    console.log(`Resource Pack Path: ${resourcePackPath}`);
    console.log(`Minecraft Resource Pack Folder: ${minecraftResourcePackFolder}`);
    console.log(`Destination Path: ${destinationPath}`);

    if (!Files.exists(resourcePackPath)) {
        console.error(`Resource pack not found at: ${resourcePackPath}`);
        return;
    }

    if (!Files.exists(minecraftResourcePackFolder)) {
        console.log(`Creating Minecraft resource pack folder at: ${minecraftResourcePackFolder}`);
        Files.createDirectories(minecraftResourcePackFolder);
    }

    if (!Files.exists(destinationPath)) {
        console.log(`Copying resource pack to: ${destinationPath}`);
        Files.copy(resourcePackPath, destinationPath, StandardCopyOption.REPLACE_EXISTING);
        console.log(`Resource pack copied successfully.`);
    } else {
        console.log(`Resource pack already exists at: ${destinationPath}`);
    }
}

const welcomeMessage = new TextComponent(`\n${BOLD}${GOLD}[${LIGHT_PURPLE}ArchieAddons${GOLD}]${RESET} Loaded!${RESET}`).setHoverValue(`Click to open the ArchieAddons GUI.`).setClick("run_command", "/archieaddons");

register("gameload", (user) => {
    ChatLib.chat(welcomeMessage);
    copyResourcePack();
});

register("command", (user) => {
    Settings.openGUI();    
}).setName("archieaddons").setAliases("notarat","aa","skaro");

register("command", (user) => {

}).setName("testcode");

register("command", (user) => {
    ChatLib.chat(`***\n${LIGHT_PURPLE}${BOLD}ESP${RESET} Settings\n>>> ${GOLD}Add/Remove${DARK_GRAY} Example: ' /esp Add old wolf '${RESET}\n>>> ${GOLD}List${DARK_GRAY} Example: ' /esp List '${RESET}\n***`)
}).setName("esp");


//     const newMessage = new Message(`${DARK_PURPLE}${OBFUSCATED}AAA${RESET}${GOLD}♆♆♆ ${RESET}${GREEN}+500 Aura${RESET} ${GOLD}♆♆♆${RESET}${DARK_PURPLE}${OBFUSCATED}AAA${RESET}`)
// the amount of dashes to span all of chat: ----------------------------------------------------
