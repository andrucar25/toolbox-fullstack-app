export const parseCsv = (text, filename) => {
  const lines = text.trim().split('\n')

  // delete header
  lines.shift()

  const parsed = []

  for (const line of lines) {
    const parts = line.split(',')

    if (parts.length !== 4) continue

    const [file, textVal, number, hex] = parts

    const hasContent = textVal && number && hex

    if (file !== filename || !hasContent) continue

    parsed.push({
      file,
      text: textVal,
      number,
      hex
    })
  }

  return parsed
}
