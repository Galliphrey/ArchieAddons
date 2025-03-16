import Settings from '../config';
import sleep  from 'sleep';
import '../misc/formatting';

register('chat', (message) => {
    if (Settings.mfdropAlertVIAL) {
        if (message.includes('You have received a Mythic Forge Drop!')) {
            Client.showTitle('Radioactive Vial', `+number% magic find`, 5, 60, 15);
        }
    }
}).setCriteria('You have received a Mythic Forge Drop!');