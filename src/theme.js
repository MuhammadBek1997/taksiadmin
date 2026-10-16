
export const THEMES = [
    { id: 'plum', group: 'default', colors: ['#1B0A2E', '#35145C', '#542394', '#7B3FD6', '#A87BEC', '#CDB2F6', '#EDE3FC'] },
    { id: 'olive-bone', group: 'default', colors: ['#11120C', '#565449', '#D8CFBC', '#FFFBF4'] },
    { id: 'old-money', group: 'default', colors: ['#000000', '#5B5958', '#9B9791', '#600F0C', '#F2EFE6'] },
    { id: 'default', group: 'default', colors: ['#121212', '#ffd21e', '#fff1b8'] },
    { id: 'green', group: 'men', colors: ['#0F0F0F', '#5DD62C', '#337418', '#F8F8F8'] },
    { id: 'teal', group: 'women', colors: ['#101516', '#06B2B8', '#D9F3F4'] },
]

const STORAGE_KEY = 'taksiadmin-theme'


export function getSavedTheme() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (THEMES.some((t) => t.id === saved)) return saved
    } catch { /* Use the default theme when storage is unavailable. */ }
    return 'default'
}


export function applyTheme(id) {
    const validId = THEMES.some(theme => theme.id === id) ? id : 'default'
    document.documentElement.setAttribute('data-theme', validId)
}

export function saveTheme(id) {
    const validId = THEMES.some(theme => theme.id === id) ? id : 'default'
    localStorage.setItem(STORAGE_KEY, validId)
    applyTheme(validId)
}
