import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
    },
    extend: {
      aspectRatio: {
        square: '1 / 1',
      },
    },
  },
}
