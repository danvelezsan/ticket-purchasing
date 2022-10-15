export default theme => ({
    alert: {
        background: 'none',
        color: 'black',
        width: '100%',
        '& .MuiAlert-icon': {
            alignItems: 'center'
        },
        '& .MuiAlert-action': {
            alignItems: 'flex-start',
            color: theme.palette.text.contrastText
        }
    },
    container: {
        background: theme.palette.common.pearl,
        border: `1px solid ${theme.palette.text.contrastText}`,
        borderRadius: 5,
        boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%)',
        opacity: 1,
        width: 438
    }
});
