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
    name: "Slayer Boss ESP",
    description: "Renders a ESP-Box around YOUR Slayer Boss.",
    category: "Slayer",
    subcategory: "Visuals",
    placeholder: "Activate"
    })
    slayerEspBox = false


    constructor() {
        this.initialize(this);
    }
};

export default new Settings();