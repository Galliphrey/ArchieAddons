import { BOLD, DARK_GRAY, GRAY, ITALIC, LIGHT_PURPLE, RESET, UNDERLINE } from './misc/formatting';
import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
} from 'Vigilance';
import './misc/formatting';


@Vigilant('ArchieAddons', 'ArchieAddons', {
    getCategoryComparator: () => (a, b) => {

        const categories = ['General', 'Features','Misc'];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    },
})

class Settings {

    @SwitchProperty({
    name: "Flare Timer",
    description: "Makes a title when your flare expires",
    category: "Fishing",
    subcategory: "Notifiers",
    placeholder: "Activate"
    })
    flareTimerAlert = false

    @SwitchProperty({
    name: "Jawbus Death Hider",
    description: "Hides Jawbus death messages in chat (only for you).",
    category: "Fishing",
    subcategory: "Hiders",
    placeholder: "Activate"
    })
    jawbusMessageHider = false

    @SwitchProperty({
    name: `Entity ${LIGHT_PURPLE}${BOLD}ESP${RESET}`,
    description: "Renders a ESP-Box around your selection of Entities.(Do /esp to see how to add them)",
    category: "ESP",
    subcategory: "who?",
    placeholder: "Activate"
    })
    entityEspBox = false

    @SelectorProperty({
    name:`${LIGHT_PURPLE}${BOLD}ESP${RESET} Colour`,
    description: "Select the colour of the ESP-Box.",
    category: "ESP",
    subcategory: "Settings",
    options: ['Magenta', 'Red', 'Cyan', 'Blue', 'Green', 'Yellow', 'Orange', 'White', 'Black'],
    })
    espColour = 0;

    @PercentSliderProperty({
        name: `${LIGHT_PURPLE}${BOLD}ESP${RESET} Thickness`,
        description: `Select Thickness for your ESP-Box.\n${UNDERLINE}Each 10% is 1 Pixel`,
        category: 'ESP',
        subcategory: 'Settings',
    })
    espThickness = 0.0;



    constructor() {
        this.initialize(this);
    }
};

export default new Settings();