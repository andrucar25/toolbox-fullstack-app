/**
 * Parses a CSV file's content and returns validated rows matching the expected format.
 *
 * @param {string} text - Raw CSV text content.
 * @param {string} filename - Expected filename to match in each row.
 * @returns {Array<Object>} - Cleaned and validated file entries.
 */
export const parseCsv = (text, filename) => {
  const lines = text.trim().split('\n')

  // Delete header
  lines.shift()

  const parsedRows = []

  for (const line of lines) {
    const parts = line.split(',')

    // Ensure line has exactly 4 expected columns
    if (parts.length !== 4) {
      continue
    }

    const [file, textVal, number, hex] = parts.map(p => p.trim())

    // Validations
    const isSameFile = file === filename
    const isValidText = typeof textVal === 'string' && textVal.length > 0
    const isValidNumber = /^\d+$/.test(number)
    const isValidHex = /^[a-fA-F0-9]{32}$/.test(hex)

    // Skip invalid rows or malformed or mismatched CSVs
    if (!isSameFile || !isValidText || !isValidNumber || !isValidHex) {
      continue
    }

    parsedRows.push({
      file,
      text: textVal,
      number,
      hex
    })
  }

  return parsedRows
}
