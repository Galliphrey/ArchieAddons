import { EntityArmorStand } from '../../misc/entities';
import Settings from '../../config';
import RenderLibV2 from '../../../RenderLibV2'

// need to make entities work as an array so i can add multiple entities to the esp list

const Color = Java.type("java.awt.Color");
const colours = [
    RenderLibV2.getColor(Color.MAGENTA),
    RenderLibV2.getColor(Color.RED),
    RenderLibV2.getColor(Color.CYAN),
    RenderLibV2.getColor(Color.BLUE),
    RenderLibV2.getColor(Color.GREEN),
    RenderLibV2.getColor(Color.YELLOW),
    RenderLibV2.getColor(Color.ORANGE),
    RenderLibV2.getColor(Color.WHITE),
    RenderLibV2.getColor(Color.BLACK),
    RenderLibV2.getColor(Color.PINK)
]
const type = [
    RenderLibV2.drawEspBoxV2,
    RenderLibV2.drawInnerEspBoxV2,
    RenderLibV2.drawBaritoneEspBoxV2,
    RenderLibV2.drawInnerBaritoneEspBoxV2
]


// have these set to certain values based on the entity
let width = 0;
let height = 0;
let depth = 0;

register('renderWorld', () => {
    if (Settings.entityEspBox) {
      const entityListESP = Settings.espList.toLowerCase();
      let array = entityListESP.split(",");
      const targetEntities = array.filter(element => element != "");
      let index = Settings.espColour;
      const renderColor = colours[index];
      World.getAllEntitiesOfType(EntityArmorStand).forEach((stand) => {
          let name = stand.getName().removeFormatting().toLowerCase();
            if (targetEntities.some(entity => name.includes(entity)) && !name.includes(" 0❤")) {
              if (name.includes("dummy") || name.includes("lord jawbus")) {
                // iron golem entity
                width = 2;
                height = 3;
                depth = 1;
              } else if (name.includes("old wolf") || name.includes("wolf")) {
                // dog entity
                width = 2;
                height = 1;
                depth = 1;
              } else if (name.includes("fels")) {
                // enderman entity
                width = 1;
                height = 3;
                depth = 1;
              } else if (name.includes("spider") || name.includes("arachne")) {
                // spider entity
                width = 1;
                height = 1;
                depth = 1;
              } else {
                width = 1;
                height = 2;
                depth = 1;
              };


              type[Settings.espType](
                stand.getRenderX(),
                stand.getRenderY() - height,
                stand.getRenderZ(),
                width,
                height,
                depth,
                renderColor.red,
                renderColor.green,
                renderColor.blue,
                Settings.espOpacity,
                Settings.cheaterEsp,
                Settings.espThickness * 10
              );
            };
          
        });
    };
});
console.log('Archie Addons >>> Entity ESP Loaded.');