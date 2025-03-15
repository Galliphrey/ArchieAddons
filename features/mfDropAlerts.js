import Settings from '../config';
import sleep  from 'sleep';
import '../misc/formatting';

register('chat', (message) => {
    if (Settings.mfdropAlertVIAL) {
        if (message.includes('You have received a Mythic Forge Drop!')) {
            Client.showTitle('Mythic Forge Drop!', 'You have received a Mythic Forge Drop!', 0, 40, 10);
        }
    }
}).setCriteria('You have received a Mythic Forge Drop!');