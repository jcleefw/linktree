import { useLayoutEffect } from 'react'

export const generateUserTheme = (data: any) => {
  if (data?.userPreferences) {
    const { userPreferences } = data
    return {
      'container-background-color': userPreferences.backgroundColor,
      'text-color': userPreferences.textColor,
      'link-background-color': userPreferences.linkBackgroundColor,
      theme: userPreferences.theme,
    }
  }
}

export const useTheme = (theme: any) => {
  useLayoutEffect(() => {
    for (const key in theme) {
      document.documentElement.style.setProperty(`--${key}`, theme[key])
    }
  }, [theme])
}
