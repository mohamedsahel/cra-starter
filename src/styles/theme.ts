const lightMode = {
  colors: {
    gray_1: '#FBFBFB',
    gray_2: '#F6F6F6',
    gray_3: '#E2E2E2',
    gray_4: '#CFCFCF',
    gray_5: '#B7B5B5',
    gray_6: '#716F6F',
    gray_7: '#4A4A4A',
    black: '#3B3B3B',
    white: '#ffffff',
    border: '#CFCFCF',
    background: '#ffffff',
    text: '#3B3B3B',
    primary: '#0088FF',
    primary_dark: '#0083f5',
    primary_light: '#1492ff'
  }
}

const darkMode = {
  colors: {}
}

const generalTheme = {
  fonts: {
    primary: "'Droid Arabic Kufi', serif"
  }
}

const getTheme = (mode: 'light' | 'dark') => {
  return {
    ...(mode === 'light' ? lightMode : darkMode),
    ...generalTheme
  }
}

export default getTheme
