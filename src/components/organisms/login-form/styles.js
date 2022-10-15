export default theme => Object.assign({}, {
    mainContainer: {
        backgroundColor: theme.palette.common.pearl,
        height: '67vh',
        overflow: 'auto',
        padding: '0px 32px 33px 15px',
        width: '25vw'
    },
    content: {
        marginLeft: 17,
        height: 'calc(100% - 90px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    logo: {
        marginLeft: 10
    },
    title: {
        color: theme.palette.text.secondary,
        marginBottom: 4
    },
    subtitle: {
        color: theme.palette.text.secondary
    },
    loginButton: {
        position: 'relative',
        marginBottom: 10,
        minHeight: 44,
        overflow: 'hidden',
        width: '100%'
    }
});
