import Settings from '../config'
import RenderLibV2 from '../../RenderLibV2'


const Color = Java.type("java.awt.Color");
const colors = [
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


//let world = TabList.getNames()?.find((tab) => ChatLib.removeFormatting(tab).startsWith("Area:"));
//let area = world ? ChatLib.removeFormatting(world).split(" ").slice(1).join(" ") : null;

//z513 to 823
//x513 to 823
// y64 to 186

register('renderWorld', () => {
    if (Settings.flamingWormEsp) {
        
        let world = TabList.getNames().find((tab) => ChatLib.removeFormatting(tab).startsWith("Area:"));
        let area = world ? ChatLib.removeFormatting(world).split(" ").slice(1).join(" ") : null;
        
        if (area === " Crystal Hollows") {
            console.log(`In the Crystal Hollows!`)
            console.log(World.getBlockAt(513,64,513))
        } else {
            return
        };

    };
});