import type Colors from 'tailwindcss/colors'

const _colors = {
  slate: 'gray',
  zinc: 'gray',
  cool: 'gray',
  neutral: 'gray',
  stone: 'gray',
  red: 'primary',
  orange: 'primary',
  amber: 'primary',
  yellow: 'primary',
  lime: 'primary',
  green: 'primary',
  emerald: 'primary',
  teal: 'primary',
  cyan: 'primary',
  sky: 'primary',
  blue: 'primary',
  indigo: 'primary',
  violet: 'primary',
  purple: 'primary',
  fuchsia: 'primary',
  pink: 'primary',
  rose: 'primary',
} satisfies Record<
  | Exclude<
      keyof typeof Colors,
      | 'black'
      | 'white'
      | 'transparent'
      | 'current'
      | 'gray'
      | 'inherit'
      | 'lightBlue'
      | 'warmGray'
      | 'trueGray'
      | 'coolGray'
      | 'blueGray'
    >
  | 'cool',
  'gray' | 'primary'
>

export const COLORS_BY_TYPE = Object.entries(_colors).reduce(
  (acc, [color, type]) => {
    if (type === 'gray') {
      acc.gray.push(color)
    } else {
      acc.primary.push(color)
    }
    return acc
  },
  { gray: [], primary: [] } as { gray: string[]; primary: string[] },
)

export const COLORS = [...COLORS_BY_TYPE.gray, ...COLORS_BY_TYPE.primary]
