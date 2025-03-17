import { EntityArmorStand } from '../../misc/entities';
import Settings from '../../config';
import RenderLibV2 from '../../../RenderLibV2'

// need to make entities work as an array so i can add multiple entities to the esp list
const targetEntities = [
    "Horror",
    "Packmaster",
    "Broodfather",
    "Seraph",
    "Demonlord",
    "Bloodfiend"
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
const type = [
    RenderLibV2.drawEspBoxV2,
    RenderLibV2.drawInnerEspBoxV2,
    RenderLibV2.drawBaritoneEspBoxV2,
    RenderLibV2.drawInnerBaritoneEspBoxV2
]

// it works but for every boss, below are attempts ive tried to get it to only work on MY boss
// it results in the entire thing breaking :/

// && name.includes(`Spawned by: ${Player.getName()}`)

//name.includes(' 0❤') && (name.includes('Horror') || name.includes('Packmaster') || name.includes('Broodfather') || name.includes('Seraph') || name.includes('Demonlord') || name.includes('Bloodfiend'))

let width = 0;
let height = 0;
let depth = 0;
register('renderWorld', () => {
    if (Settings.slayerEspBox) {
      let index = Settings.espColour;
      const renderColor = colours[index];
      World.getAllEntitiesOfType(EntityArmorStand).forEach((stand) => {
          let name = stand.getName().removeFormatting();
            if (targetEntities.some(entity => name.includes(entity)) && !name.includes(" 0❤")) {
                if (name.includes("tarantula broodfather")) {
                    // tara
                    width = 1;
                    height = 1;
                    depth = 1;
                  } else if (name.includes("sven packmaster")) {
                    // sven
                    width = 2;
                    height = 1;
                    depth = 1;
                  } else if (name.includes("voidgloom seraph")) {
                    // eman
                    width = 1;
                    height = 3;
                    depth = 1;
                  } else {
                    width = 1;
                    height = 2;
                    depth = 1;
                  }
    
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
                    true,
                    Settings.espThickness * 10
                  );
              };
        });
    };
});
console.log('Skaro >>> Slayer ESP Loaded.');