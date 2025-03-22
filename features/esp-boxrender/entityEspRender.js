import { EntityArmorStand } from '../../misc/entities';
import Settings from '../../config';
import RenderLibV2 from '../../../RenderLibV2';

const type = [
    RenderLibV2.drawEspBoxV2,
    RenderLibV2.drawInnerEspBoxV2,
    RenderLibV2.drawBaritoneEspBoxV2,
    RenderLibV2.drawInnerBaritoneEspBoxV2
];

// Declare r, g, and b outside the block so they are accessible globally
let r = 255, g = 255, b = 255; // Default to white in case the regex doesn't match

// Entity dimensions mapping
const entityDimensions = {
    "dummy": { width: 2, height: 3, depth: 1 },
    "lord jawbus": { width: 2, height: 3, depth: 1 },
    "old wolf": { width: 2, height: 1, depth: 1 },
    "wolf": { width: 2, height: 1, depth: 1 },
    "fels": { width: 1, height: 3, depth: 1 },
    "spider": { width: 2, height: 1, depth: 2 },
    "arachne": { width: 1, height: 1, depth: 1 },
    "ghast": { width: 5, height: 5, depth: 5 },
    "slime": { width: 4, height: 4, depth: 4 },
    "magma cube": { width: 2, height: 3, depth: 2 }
};

// Default dimensions
const defaultDimensions = { width: 1, height: 2, depth: 1 };

// Helper function to parse RGB values from Settings.myColor
function parseRGB(colorString) {
    const regex = /r=(\d+),g=(\d+),b=(\d+)/;
    const match = colorString.match(regex);
    return match ? {
        r: parseInt(match[1], 10),
        g: parseInt(match[2], 10),
        b: parseInt(match[3], 10)
    } : { r: 255, g: 255, b: 255 }; // Default to white
}

register('renderWorld', () => {
    if (!Settings.entityEspBox) return;

    // Dynamically extract RGB values from Settings.myColor
    const { r, g, b } = parseRGB(`${Settings.espColour}`);

    // Dynamically fetch and process the target entities list
    const entityListESP = Settings.espList.toLowerCase();
    const targetEntities = entityListESP.split(",").filter(entity => entity.trim() !== "");

    // Cache other settings
    const espType = type[Settings.espType];
    const opacity = Settings.espOpacity;
    const thickness = Settings.espThickness * 10;

    // Process all armor stands
    World.getAllEntitiesOfType(EntityArmorStand).forEach((stand) => {
        const name = stand.getName().removeFormatting().toLowerCase();

        // Skip entities not in the target list or with "0❤"
        if (!targetEntities.some(entity => name.includes(entity)) || name.includes(" 0❤")) return;

        // Get dimensions for the entity
        const dimensions = Object.keys(entityDimensions).find(key => name.includes(key)) 
            ? entityDimensions[Object.keys(entityDimensions).find(key => name.includes(key))]
            : defaultDimensions;

        // Render ESP box
        type[Settings.espType](
            stand.getRenderX(),
            stand.getRenderY() - dimensions.height,
            stand.getRenderZ(),
            dimensions.width,
            dimensions.height,
            dimensions.depth,
            r / 255,
            g / 255,
            b / 255,
            Settings.espOpacity,
            Settings.cheaterEsp,
            Settings.espThickness * 10
        );
    });
});

console.log('Archie Addons >>> Entity ESP Loaded.');