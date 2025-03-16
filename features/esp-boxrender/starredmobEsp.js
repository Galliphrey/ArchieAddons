import { EntityArmorStand } from '../../misc/entities';
import Settings from '../../config';
import RenderLibV2 from '../../../RenderLibV2'

targetEntities = [
    "dummy",
    "star"
];

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

// have these set to certain values based on the entity
let width = 0;
let height = 0;
let depth = 0;

register('renderWorld', () => {
    if (Settings.starmobEspBox) {
      let index = Settings.espColour;
      const renderColor = colours[index];
      World.getAllEntitiesOfType(EntityArmorStand).forEach((stand) => {
          let name = stand.getName().removeFormatting().toLowerCase();
            if (targetEntities.some(entity => name.includes(entity)) && !name.includes(" 0❤")) {
              if (name.includes("golem") || name.includes("dummy")) {
                // iron golem entity
                width = 2;
                height = 3;
                depth = 1;
              } else if (name.includes("mimic")) {
                width = 1;
                height = 1.5;
                depth = 1;
              } else if (name.includes("fels")) {
                // enderman entity
                width = 1;
                height = 3;
                depth = 1;
              } else if (name.includes("spider") || name.includes("bat")) {
                // spider entity
                width = 1;
                height = 1;
                depth = 1;
              } else {
                width = 1;
                height = 2;
                depth = 1;
              };


              RenderLibV2.drawInnerEspBoxV2(
                stand.getX(),
                stand.getY() - height,
                stand.getZ(),
                width,
                height,
                depth,
                renderColor.red,
                renderColor.green,
                renderColor.blue,
                Settings.espOpacity,
                true,
                Settings.espThickness * 10
              );
            };
          
        });
    };
});
console.log('Skaro >>> Starred Mob ESP Loaded.');