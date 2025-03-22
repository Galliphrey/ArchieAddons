import Settings from '../config'
import sleep  from 'sleep'


if (Settings.packetLog) {
    register('packetReceived', (packet, event) => {
        ChatLib.chat("Received Packet: " + packet.class.getSimpleName());
    });
};