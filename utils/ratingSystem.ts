export const getPercentSteps = (ratingSystem: number) => {
  const stepPercent = 100 / ratingSystem
  const steps = []
  for (let index = 0; index < ratingSystem; index++) {
    steps.push((index + 1) * stepPercent)
  }
  return steps
}

export const getClosestStep = (percent: number, steps: number[]) => {
  const getDeviation = (a: number, b: number) => Math.abs(a - b)
  const sorted = [...steps].sort(
    (a, b) => getDeviation(a, percent) - getDeviation(b, percent),
  )
  return sorted[0]
}
