import { Huds } from '../../Krun/Huds';
import PogObject from "../../PogData";
import sleep  from 'sleep';
import Settings from '../config';
import { isActive } from './flareAlert';

/* TODO:

 * Make a something that uses Krun gui
 * Spirit mask timer maybe?!?!?
 * ff timer for m3??
 * timer + title for first stun in m4 ???
 * oooh make a timer for flare thing!

*/
function flareGUI() {
    register('step', () => {
        if (isActive.value === true) {
            textHud.text = `Flare Timer: ${flareRemaining}s`;
            if (flareRemaining > 0) {
                flareRemaining -= 1;
            }
        }
    }).setDelay(1);
    
    let flareRemaining = 180;
    const data = new PogObject("Archie Addons", {})
    const huds = new Huds(data)
    const textHud = huds.createTextHud("Flare Overlay", 120, 10, `Flare Timer: ${flareRemaining}s`)
    
    textHud.onDraw((x, y, str) => {
        Renderer.translate(x, y)
        Renderer.scale(textHud.getScale())
        Renderer.drawStringWithShadow(str, 0, 0)
        Renderer.finishDraw()
    })
    
    // Creating a command to open our main [Huds] gui so every other [Hud] can be edited
    register("command", () => {
        huds.open()
    }).setName("hudstest")
    
    register("renderOverlay", () => {
        // Check whether the [Huds] is opened, if it is return
        // we don't need to render twice
        if (huds.isOpen()) return
    
        // Drawing text hud
        Renderer.translate(textHud.getX(), textHud.getY())
        Renderer.scale(textHud.getScale())
        Renderer.drawStringWithShadow(textHud.text, 0, 0)
        Renderer.finishDraw()
    })
    
    register("gameUnload", () => {
        // We have to manually call save here
        // so that all our data gets synced properly and then saved
        huds.save()
        data.save()
    })
};
if (Settings.flareTimerAlert) {flareGUI()};
