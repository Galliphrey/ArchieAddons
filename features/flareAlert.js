import Settings from '../config'
import sleep  from 'sleep'
import { DARK_RED, RED } from '../misc/formatting'

let flareActive = false;
export let isActive = { value: flareActive};
register('actionBar', () => {
    if (Settings.flareTimerAlert) {
        if (!flareActive) {
            flareActive = true;
            let item = Player.getHeldItem().getName();
            if (/.+Flare/.test(item) == true) {
                sleep(170000, () => {
                    flareActive = false;
                    Client.showTitle(`${RED}Your Flare is about to expire!`, "", 0, 40, 10)
                });
            }   
        }
    }
}).setCriteria(/.+\(Deploy\).+/);
console.log('Archie Addons >>> Flare Alert Loaded.')