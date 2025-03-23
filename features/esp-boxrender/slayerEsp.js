import { EntityArmorStand } from '../../misc/entities';
import Settings from '../../config';
import RenderLibV2 from '../../../RenderLibV2'
import { parseRGB } from './entityEspRender';

// need to make entities work as an array so i can add multiple entities to the esp list
const targetEntities = [
    "Horror",
    "Packmaster",
    "Broodfather",
    "Seraph",
    "Demonlord",
    "Bloodfiend"
];
// Entity dimensions mapping
const entityDimensions = {
    "Seraph": { width: 1, height: 3, depth: 1 },
    "Broodfather": { width: 2, height: 1, depth: 2 },
    "Packmaster": { width: 2, height: 1, depth: 1 },
};

// Default dimensions
const defaultDimensions = { width: 1, height: 2, depth: 1 };

const type = [
    RenderLibV2.drawEspBoxV2,
    RenderLibV2.drawInnerEspBoxV2,
    RenderLibV2.drawBaritoneEspBoxV2,
    RenderLibV2.drawInnerBaritoneEspBoxV2
]

register('renderWorld', () => {
    if (Settings.slayerEspBox) {
      // Dynamically extract RGB values from Settings.myColor
      const { r, g, b } = parseRGB(`${Settings.espColour}`);

    // Process all armor stands
    World.getAllEntitiesOfType(EntityArmorStand).forEach((stand) => {
        const name = stand.getName().removeFormatting();

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
}});
console.log('Archie Addons >>> Slayer ESP Loaded.');