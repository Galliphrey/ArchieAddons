import Settings from '../config'
import sleep  from 'sleep'
import { DARK_RED, RED } from '../misc/formatting'

let flareActive = false;
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
console.log('ARCHIES SUPA COOL FLARE TIMER TITLE HAS BEN LOADEDEDEDED!!!!')

//export default flareTimer;
//function flareTimer() {};