import { EntityArmorStand } from '../../misc/entities';
import Settings from '../../config';
import RenderLibV2 from '../../../RenderLibV2'


register('renderWorld', () => {
    if (Settings.corpseEspBox) {


        World.getAllEntitiesOfType(EntityArmorStand).forEach((stand) => {
            let name = stand.getName().removeFormatting();
            console.log(name)
        });
    };
});