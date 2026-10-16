export const FONTS = [
    {
        "id": "onest",
        "name": "Onest",
        "family": "Onest",
        "fallback": "sans-serif"
    },
    {
        "id": "montserrat",
        "name": "Montserrat",
        "family": "Montserrat",
        "fallback": "sans-serif"
    },
    {
        "id": "lora",
        "name": "Lora",
        "family": "Lora",
        "fallback": "serif"
    },
    {
        "id": "robotoslab",
        "name": "Roboto Slab",
        "family": "Roboto Slab",
        "fallback": "serif"
    },
    {
        "id": "golostext",
        "name": "Golos Text",
        "family": "Golos Text",
        "fallback": "sans-serif"
    },
    {
        "id": "notoserif",
        "name": "Noto Serif",
        "family": "Noto Serif",
        "fallback": "serif"
    }
]

const STORAGE_KEY = 'taksiadmin-font'

export function getSavedFont() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (FONTS.some((font) => font.id === saved)) return saved
    } catch { /* Storage may be unavailable. */ }
    return 'onest'
}

export function applyFont(id) {
    const font = FONTS.find((item) => item.id === id) || FONTS[0]
    document.documentElement.style.setProperty('--app-font', '"' + font.family + '", ' + font.fallback)
    document.documentElement.setAttribute('data-font', font.id)
    try {
        localStorage.setItem(STORAGE_KEY, font.id)
    } catch { /* Apply the font even when storage is unavailable. */ }
}
