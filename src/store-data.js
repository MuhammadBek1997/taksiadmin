export const STORE_KEY = 'taksiadmin-store-data-v1'
export const DRAFT_KEY = 'taksiadmin-store-draft-v1'
export const BASE_STORES = [
    { id: 'korzinka', name: 'Korzinka — Chilonzor' },
    { id: 'grand-pharm', name: 'Grand Pharm' },
    { id: 'evos', name: 'Evos' },
    { id: 'bon', name: 'Bon! Café' },
    { id: 'uy', name: "Uy Ro‘zg‘or" },
    { id: 'sky', name: 'Sky Lounge Bar' },
]

export function readStoreData() {
    try {
        const value = JSON.parse(localStorage.getItem(STORE_KEY))
        if (Array.isArray(value?.stores) && Array.isArray(value?.imports)) return value
    } catch { /* An unavailable or invalid cache starts empty. */ }
    return { stores: [], imports: [] }
}

export function saveStore(store) {
    const data = readStoreData()
    data.stores.push({ ...store, id: crypto.randomUUID(), createdAt: new Date().toISOString() })
    localStorage.setItem(STORE_KEY, JSON.stringify(data))
}

export function saveImport(type, storeId, rows) {
    const data = readStoreData()
    if (type === 'stores') {
        data.stores.push(...rows.map(row => ({ ...row, type: 'market', id: crypto.randomUUID(), createdAt: new Date().toISOString() })))
    }
    data.imports.push({ id: crypto.randomUUID(), type, storeId, rows, createdAt: new Date().toISOString() })
    localStorage.setItem(STORE_KEY, JSON.stringify(data))
}

export const IMPORT_SCHEMAS = {
    products: ['name', 'category', 'price', 'stock', 'barcode', 'image', 'note'],
    menu: ['name', 'category', 'price', 'stock', 'image', 'note'],
    medicines: ['name', 'category', 'price', 'stock', 'barcode', 'note'],
    categories: ['name', 'note'],
    inventory: ['barcode', 'price', 'stock'],
    stores: ['name', 'legalName', 'taxId', 'phone', 'address'],
}

export function requiredFields(type) {
    if (type === 'stores') return ['name', 'legalName', 'taxId', 'phone', 'address']
    if (type === 'inventory') return ['barcode', 'price', 'stock']
    return type === 'categories' ? ['name'] : ['name', 'price']
}

export function parseCsv(text) {
    text = text.replace(/^\uFEFF/, '')
    const line = text.split(/\r?\n/)[0]
    const delimiter = line.includes(';') ? ';' : line.includes('\t') ? '\t' : ','
    const rows = []; let row = []; let cell = ''; let quoted = false
    for (let i = 0; i < text.length; i++) {
        const c = text[i]
        if (c === '"') {
            if (quoted && text[i + 1] === '"') { cell += '"'; i++ } else quoted = !quoted
        } else if (c === delimiter && !quoted) { row.push(cell); cell = '' }
        else if ((c === '\n' || c === '\r') && !quoted) {
            if (c === '\r' && text[i + 1] === '\n') i++
            row.push(cell); if (row.some(v => v.trim())) rows.push(row)
            row = []; cell = ''
        } else cell += c
    }
    if (quoted) throw new Error('invalidFile')
    row.push(cell); if (row.some(v => v.trim())) rows.push(row)
    return rows
}

export async function readImportFile(file) {
    if (file.size > 20 * 1024 * 1024) throw new Error('fileTooLarge')
    let rows
    if (/\.csv$/i.test(file.name)) rows = parseCsv(await file.text())
    else if (/\.xlsx$/i.test(file.name)) {
        const { default: ExcelJS } = await import('exceljs')
        const workbook = new ExcelJS.Workbook()
        await workbook.xlsx.load(await file.arrayBuffer())
        const sheet = workbook.worksheets[0]
        rows = []
        if (sheet) sheet.eachRow(row => {
            if (rows.length > 5000) throw new Error('tooManyRows')
            const values = []
            for (let i = 1; i <= Math.min(sheet.columnCount, 100); i++) values.push(row.getCell(i).text)
            rows.push(values)
        })
    } else throw new Error('fileType')
    if (rows.length < 2) throw new Error('emptyFile')
    if (rows.length > 5001 || rows[0].length > 100) throw new Error('tooManyRows')
    return { headers: rows[0].map((h, i) => h.trim() || `Column ${i + 1}`), rows: rows.slice(1) }
}

export function validateImport(rows, mapping, type) {
    return rows.map((row, index) => {
        const value = {}
        mapping.forEach((field, col) => { if (field) value[field] = String(row[col] ?? '').trim() })
        let error = requiredFields(type).some(field => !value[field]) ? 'required' : ''
        for (const field of ['price', 'stock']) if (value[field]) {
            const number = Number(value[field].replace(/\s/g, '').replace(',', '.'))
            if (!Number.isFinite(number) || number < 0 || (field === 'stock' && !Number.isInteger(number))) error = 'invalidNumber'
            else value[field] = number
        }
        if (value.image && !/^https?:\/\/\S+$/i.test(value.image)) error = 'invalidUrl'
        if (type === 'stores') {
            if (value.taxId && !/^\d{9}$/.test(value.taxId.replace(/\s/g, ''))) error = 'invalidTaxId'
            if (value.phone && !/^\+?[\d\s()-]{9,20}$/.test(value.phone)) error = 'invalidPhone'
        }
        return { value, row: index + 2, error }
    })
}

export async function downloadTemplate(type, labels) {
    const { default: ExcelJS } = await import('exceljs')
    const workbook = new ExcelJS.Workbook()
    const sheet = workbook.addWorksheet('Import')
    sheet.addRow(IMPORT_SCHEMAS[type].map(key => labels(key)))
    const sample = { name: 'Namuna', category: 'Kategoriya', price: 15000, stock: 20, barcode: '4780000000001', image: '', note: '', legalName: 'Namuna MChJ', taxId: '305123456', phone: '+998712000000', address: 'Toshkent, Chilonzor' }
    sheet.addRow(IMPORT_SCHEMAS[type].map(key => sample[key]))
    sheet.columns.forEach(column => { column.width = 24 })
    sheet.getRow(1).font = { bold: true }
    const blob = new Blob([await workbook.xlsx.writeBuffer()], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = `${type}-template.xlsx`; a.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
}
