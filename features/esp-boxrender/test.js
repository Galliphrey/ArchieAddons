import Settings from '../../config.js';

let entityListESP = Settings.espList;
let listArrayESP = entityListESP.split(",");
listArrayESP.forEach(item => print(item));