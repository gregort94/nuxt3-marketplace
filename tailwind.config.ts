import type { Config } from 'tailwindcss'
import { COLORS } from './constants/themeColors'

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      aspectRatio: {
        square: '1 / 1',
      },
      spacing: {
        defaultLayoutHeaderHeight: '64px',
        defaultLayoutTopPadding: '64px',
        defaultLayoutContentTopOffset: '128px', // headerHeight + defaultLayoutTopPadding
        defaultLayoutContentHeight: '192px', // headerHeight + defaultLayoutTopPadding * 2
      },
    },
  },
  safelist: [...COLORS.map((color) => `bg-${color}-500`)],
}
