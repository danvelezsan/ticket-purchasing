import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
    background: {
        background1: '#D8D8D8',
        background2: '#F7F7F7',
        background3: '#F1F1F1',
        background4: '#E3E2E2',
        background5: '#F6F6F6',
        background6: '#FFFBF5'
    },
    disabled: '#FEF1E2',
    lile: '#8675FF',
    mint: '#7FE3A7',
    night: '#3B3664',
    pearl: '#FEFEFE',
    purple: '#7469D9',
    salmon: '#FF6481',
    sky: '#4DBEFF',
    spearl: '#E1E1E1',
    summer: '#FDB561',
    text: {
        text1: '#1C2026',
        text2: '#383C44',
        text3: '#5F6674',
        text4: '#878F9E',
        text5: '#B4BAC5',
        text6: '#D7DBE3',
        text7: '#E9ECF1'
    }
};

export const theme = createMuiTheme({
    palette: {
        background: {
            contrastText: colors.background.background6,
            default: colors.background.background5,
            primary: colors.background.background1,
            secondary: colors.background.background3
        },
        common: {
            pearl: colors.pearl
        },
        primary: {
            contrastText: colors.background.background4,
            dark: colors.night,
            disabled: colors.disabled,
            error: colors.salmon,
            info: colors.sky,
            light: colors.lile,
            main: colors.purple,
            success: colors.mint,
            warn: colors.summer
        },
        text: {
            primary: colors.text.text1,
            secondary: colors.text.text2,
            hint: colors.text.text3,
            disabled: colors.text.text4,
            contrastText: colors.text.text5
        }
    },
    typography: {
        body1: {
            fontSize: 16,
            fontWeight: '300'
        },
        body2: {
            fontSize: 14
        },
        h3: {
            fontWeight: '600',
            fontSize: 24
        },
        h4: {
            fontSize: 14,
            fontWeight: 'bold'
        },
        h5: {
            fontSize: 12,
            fontWeight: '300'
        },
        h6: {
            fontSize: 10,
            fontWeight: '300'
        },
        fontFamily: 'Poppins'
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '::-webkit-scrollbar': {
                    width: 6
                },
                '::-webkit-scrollbar-thumb': {
                    backgroundColor: `${colors.text.text2}66`,
                    borderRadius: 10
                }
            }
        },
        MuiButton: {
            root: {
                textTransform: 'none',
                '&::first-letter': {
                    textTransform: 'uppercase'
                }
            }
        },
        MuiDivider: {
            root: {
                backgroundColor: colors.background.background1
            }
        }
    }
});
