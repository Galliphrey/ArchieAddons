import Settings from '../config'
import sleep  from 'sleep'
import { DARK_RED, RED } from '../misc/formatting'

export let isActive = { value: false};
register('actionBar', () => {
    if (Settings.flareTimerAlert) {
        if (!isActive.value) {
            isActive.value = true;
            let item = Player.getHeldItem().getName();
            if (/.+Flare/.test(item) == true) {
                sleep(170000, () => {
                    isActive.value = false;
                    Client.showTitle(`${RED}Your Flare is about to expire!`, "", 0, 40, 10)
                });
            }   
        }
    }
}).setCriteria(/.+\(Deploy\).+/);
console.log('Archie Addons >>> Flare Alert Loaded.')