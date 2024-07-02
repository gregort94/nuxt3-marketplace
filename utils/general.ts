export const shuffleArray = <T>(array: T[]) => {
  let currentIndex = array.length
  let randomIndex

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export const getRandomNumber = (
  min: number,
  max: number,
  decimalPlaces: number = 0,
) => {
  const multiplier = Math.pow(10, decimalPlaces)
  const minMultiplied = min * multiplier
  const maxMultiplied = max * multiplier
  const randomNumber = Math.floor(
    Math.random() * (maxMultiplied - minMultiplied + 1) + minMultiplied,
  )
  return randomNumber / multiplier
}

export const memoizeUnique = <T>(callback: () => T) => {
  const uniqItems = new Set()

  return () => {
    let res
    do {
      res = callback()
    } while (uniqItems.has(res))
    uniqItems.add(res)
    return res
  }
}

export const pickRandomElements = <T>(
  arr: T[],
  minLength: number,
  maxLength: number,
): T[] => {
  if (arr.length < minLength || arr.length < maxLength) {
    throw new Error('Array length is less than the given range')
  }

  const shuffledArray = shuffleArray(arr)
  return shuffledArray.slice(0, getRandomNumber(minLength, maxLength))
}
