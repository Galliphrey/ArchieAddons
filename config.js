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
    category: "Features",
    subcategory: "Notifiers",
    placeholder: "Activate"
    })
    flareTimerAlert = false

    @SwitchProperty({
        name: 'Slayer Kill Time',
        description: 'Gets slayer kill time. (Might be a little inaccurate)',
        category: 'Slayers',
        subcategory: 'Timers',
    })
    slayerKillTime = false;


    constructor() {
        this.initialize(this);
    }
};

export default new Settings();