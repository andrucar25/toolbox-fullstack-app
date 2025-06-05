export const parseCsv = (text, filename) => {
  const lines = text.trim().split('\n')

  // Elimina la cabecera
  lines.shift()

  const parsed = []

  for (const line of lines) {
    const parts = line.split(',')

    if (parts.length !== 4) continue

    const [file, textVal, number, hex] = parts.map(p => p.trim())

    // Validations
    const isSameFile = file === filename
    const isValidText = typeof textVal === 'string' && textVal.length > 0
    const isValidNumber = /^\d+$/.test(number)
    const isValidHex = /^[a-fA-F0-9]{32}$/.test(hex)

    if (!isSameFile || !isValidText || !isValidNumber || !isValidHex) continue

    parsed.push({
      file,
      text: textVal,
      number: number,
      hex
    })
  }

  return parsed
}
