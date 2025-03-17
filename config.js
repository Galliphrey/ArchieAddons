import { AQUA, BLACK, BOLD, DARK_GRAY, DARK_RED, GRAY, GREEN, ITALIC, LIGHT_PURPLE, RED, RESET, UNDERLINE } from './misc/formatting';
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

@Vigilant('Calzone Client', 'Calzone CLient', {
    getCategoryComparator: () => (a, b) => {

        const categories = ['Fishing', 'ESP'];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    },
    getSubcategoryComparator: () => (a, b) => {

        const subcategories = [
            "who?",
            "Settings",
            "Notifiers",
            "Hiders"
            ];
        return subcategories.indexOf(a.getValue()[0].attributesExt.subcategory) -
            subcategories.indexOf(b.getValue()[0].attributesExt.subcategory);
    },
})

class Settings {

    @SwitchProperty({
        name: `${RED}${BOLD}Flare ${RESET}Timer`,
        description: "Makes a title when your flare expires",
        category: "Fishing",
        subcategory: "Notifiers",
        placeholder: "Activate"
    })
    flareTimerAlert = false

    @SwitchProperty({
        name: `${LIGHT_PURPLE}${BOLD}Radioactive${RESET} ${GREEN}${BOLD}Vial ${RESET}Drop Alert`,
        description: "Makes a title when you drop a Radioactive Vial",
        category: "Fishing",
        subcategory: "Drop Alerts",
        placeholder: "Activate"
    })
    mfdropAlertVIAL = false

    @SwitchProperty({
        name: `Entity ${LIGHT_PURPLE}${BOLD}ESP${RESET}`,
        description: "Renders a ESP-Box around your selection of Entities.",
        category: "ESP",
        subcategory: "who?",
        placeholder: "Activate"
    })
    entityEspBox = false

    @TextProperty({
        name: `${LIGHT_PURPLE}${BOLD}ESP${RESET} Entities`,
        description: `Type in entities to add to the Entity ESP feature.\n${RED}${BOLD}${UNDERLINE}Separate with commas.`,
        category: 'ESP',
        subcategory: 'who?',
        placeholder: `Type Mob Names here!`,
        triggerActionOnInitialization: false,
    })
    espList = '';

    @SwitchProperty({
        name: `Slayer ${LIGHT_PURPLE}${BOLD}ESP${RESET}`,
        description: "Renders a ESP-Box around your Slayer boss.",
        category: "ESP",
        subcategory: "who?",
        placeholder: "Activate"
    })
    slayerEspBox = true

    @SwitchProperty({
        name: `Corpse ${LIGHT_PURPLE}${BOLD}ESP${RESET}`,
        description: "Renders a ESP-Box around Mineshaft Corpses.",
        category: "ESP",
        subcategory: "who?",
        placeholder: "Activate"
    })
    corpseEspBox = false

    @SwitchProperty({
        name: `Starred Mobs ${LIGHT_PURPLE}${BOLD}ESP${RESET}`,
        description: "Renders a ESP-Box around Starred mobs in Dungeon Runs.",
        category: "ESP",
        subcategory: "who?",
        placeholder: "Activate"
    })
    starmobEspBox = false

    @SelectorProperty({
        name:`${LIGHT_PURPLE}${BOLD}ESP${RESET} Colour`,
        description: "Select the colour of the ESP-Box.",
        category: "ESP",
        subcategory: "Settings",
        options: ['Magenta', 'Red', 'Cyan', 'Blue', 'Green', 'Yellow', 'Orange', 'White', 'Black', 'Pink'],
    })
    espColour = 0;

    @SelectorProperty({
        name:`${LIGHT_PURPLE}${BOLD}ESP${RESET} Style`,
        description:`Select the Type of ESP-Box you want!`,
        category:`ESP`,
        subcategory:`Settings`,
        options: ['Normal ESP-Box','Inner ESP-Box','Baritone ESP-Box','Inner Baritone ESP-Box'],
    })
    espType = 0;

    @PercentSliderProperty({
        name: `${LIGHT_PURPLE}${BOLD}ESP${RESET} Thickness`,
        description: `Select Thickness for your ESP-Box.\n${UNDERLINE}Each 10% is 1 Pixel`,
        category: 'ESP',
        subcategory: 'Settings',
    })
    espThickness = 0.0;

    @PercentSliderProperty({
        name: `${LIGHT_PURPLE}${BOLD}ESP${RESET} Opactiy`,
        description: `Select Opacity for your ESP-Box.`,
        category: 'ESP',
        subcategory: 'Settings',
    })
    espOpacity = 0.0;

    constructor() {
        this.initialize(this);
    }
};

export default new Settings();

