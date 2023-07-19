import { AppConfigInput } from 'nuxt/schema'
import type { ThemeColor } from 'appConstants'
const UI_THEME_COLORS: {
  primary: ThemeColor
  gray: ThemeColor
} = {
  primary: 'green',
  gray: 'neutral',
}

export default defineAppConfig<AppConfigInput>({
  ui: UI_THEME_COLORS,
})
