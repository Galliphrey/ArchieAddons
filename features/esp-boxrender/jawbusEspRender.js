import { EntityArmorStand } from '../../misc/entities';
import Settings from '../../config';
import RenderLibV2 from '../../../RenderLibV2'

// colour selecting thing doesnt currently work, just goes to magenta somehow
const targetEntity = "dummy";
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
    RenderLibV2.getColor(Color.BLACK)
]

register('renderWorld', () => {
    if (Settings.entityEspBox) {
      let index = Settings.espColour;
      const renderColor = colours[index];
      World.getAllEntitiesOfType(EntityArmorStand).forEach((stand) => {
          let name = stand.getName().removeFormatting().toLowerCase();
          if (name.includes(targetEntity) && !name.includes(" 0❤")) {
            RenderLibV2.drawEspBoxV2(
              stand.getX(),
              stand.getY() - 3,
              stand.getZ(),
              2,
              3,
              1,
              renderColor.red,
              renderColor.green,
              renderColor.blue,
              renderColor.alpha,
              true,
              3
            );
          }
        });
    };
});
console.log('Skaro >>> Slayer ESP Loaded.');