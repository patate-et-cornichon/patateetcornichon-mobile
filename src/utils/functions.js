/**
 * Capitalize a string
 * @param text
 * @returns {string}
 */
export function capitalize (text) {
  return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
}

export function convertWidth (width) {
  if (width) {
    return width.slice(-1) === '%' ? width : parseInt(width)
  }
  return null
}

/**
 * Transform hex color in darken or lighter color
 * @param color
 * @param percent
 * @returns {string}
 */
export function shadeColor (color, percent = 0) {
  let R = parseInt(color.substring(1, 3), 16)
  let G = parseInt(color.substring(3, 5), 16)
  let B = parseInt(color.substring(5, 7), 16)

  R = parseInt(R * (100 + percent) / 100)
  G = parseInt(G * (100 + percent) / 100)
  B = parseInt(B * (100 + percent) / 100)

  R = (R < 255) ? R : 255
  G = (G < 255) ? G : 255
  B = (B < 255) ? B : 255

  const RR = ((R.toString(16).length === 1) ? '0' + R.toString(16) : R.toString(16))
  const GG = ((G.toString(16).length === 1) ? '0' + G.toString(16) : G.toString(16))
  const BB = ((B.toString(16).length === 1) ? '0' + B.toString(16) : B.toString(16))

  return `#${RR}${GG}${BB}`
}

export async function checkErrors (response) {
  let body

  try {
    body = await response.json()
  } catch (e) {
    return
  }

  /* Catch error and return the string error */
  if (!response.ok) {
    const msg = body.message ? body.message.toString() : 'Une erreur est survenue !'
    throw new Error(msg)
  }

  return body
}

