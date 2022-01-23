/*Default Settings*/
const appConf = {
    appName: 'Anemon',
    darkLogo: '/img/dark-logo.svg',
    lightLogo: '/img/light-logo.svg',
    logoAreaClasses: null,
    appNameClasses: null,
    logoClasses: null,
    radius: 3,
}

/*Layout Settings*/
const authScreenConf = {
    appName: null,
    darkLogo: null,
    lightLogo: null,
    logoAreaClasses: ['flex', 'flex-col', 'justify-center', 'items-center', 'space-x-2'],
    appNameClasses: ['text-5xl', 'font-semibold'],
    logoClasses: ['w-12', 'text-white', 'h-auto'],
    showDesignChanger: true,
    showDarkModeSelector: true,
    showLanguageSelector: true,
}

const mainMenuConf = {
    /*Logo Area*/
    appName: null,
    darkLogo: '/img/dark-logo.svg',
    lightLogo: '/img/dark-logo.svg',
    logoAreaRadius: null,
    logoAreaClasses: ['flex', 'flex-col', 'justify-center', 'items-center', 'space-x-6', 'bg-violet-500'],
    appNameClasses: ['text-6xl', 'font-semibold', 'text-white'],
    logoClasses: ['w-10', 'text-white', 'h-auto'],
    /*Menu*/
    menuRadius: 5,
    rootLinkClasses: {
        activeBg: ['border', 'bg-slate-500/20', 'border-slate-500/50', 'rounded'],
        normal: ['hover:bg-violet-200', 'hover:text-violet-800'],
        active: ['text-white', 'bg-violet-500', 'hover:bg-violet-600', 'rounded-2xl'],
    },
    secondLinkClasses: {
        activeBg: [],
        normal: ['hover:bg-emerald-200', 'hover:text-emerald-800'],
        active: ['text-white', 'bg-emerald-500', 'hover:bg-emerald-600', 'rounded'],
    },
    thirdLinkClasses: {
        activeBg: ['border', 'bg-emerald-500/20', 'border-slate-500/50', 'rounded'],
        normal: ['hover:bg-emerald-200', 'hover:text-emerald-800'],
        active: ['text-white', 'bg-emerald-500', 'hover:bg-emerald-600', 'rounded'],
    },
}

const topBarConf = {
    radius: null,
    languageSelector: true,
    darkModeSelector: true,
    searchPlaceHolderText: 'type and search'
}

const footerConf = {
    visible: true,
    content: "<a\n" +
        "              class=\"text-blue-600 hover:underline\"\n" +
        "              href=\"https://anemon.tailadmin.dev/\"\n" +
        "              target=\"_blank\"\n" +
        "            >\n" +
        "              Anemon v.0.0.1\n" +
        "              </a>\n" +
        "            <span>by</span>\n" +
        "            <a\n" +
        "              class=\"text-teal-400 hover:underline\"\n" +
        "              href=\"https://github.com/sinan-aydogan\"\n" +
        "              target=\"_blank\"\n" +
        "            >\n" +
        "              Sinan AYDOĞAN\n" +
        "            </a>"
}

/*Module Settings*/
const alertConf = {
    design: 'filled',
    color: 'light',
    radius: null,
    closeable: false,
    timer: 4000
}

export {appConf,authScreenConf,mainMenuConf,topBarConf,footerConf, alertConf}

