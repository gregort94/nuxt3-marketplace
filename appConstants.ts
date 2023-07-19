import colors from 'tailwindcss/colors'

const excludedColors = [
  'inherit',
  'current',
  'transparent',
  'white',
  'black',
  'lightBlue',
  'warmGray',
  'trueGray',
  'coolGray',
  'blueGray',
] as const

export type ThemeColor = keyof Omit<
  typeof colors,
  (typeof excludedColors)[number]
>

export const THEME_COLORS = Object.keys(colors).filter(
  (item) => !excludedColors.includes(item),
) as ThemeColor[]
// f
