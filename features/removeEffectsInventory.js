
// trying to use packets to intercept the effects ui packet and make it cancel. doies not currently work.
/*
const effectRenderer = Java.type(
    "net.minecraft.client.renderer.InventoryEffectRenderer"
    );

const isUiActive = register('packetReceived', (packet, event) => {
    let uiDrawn = packet.func_147044_g();
    if (uiDrawn) {
        packet.field_147045_u = false;
    }
}).setFilteredClass(effectRenderer);
*/