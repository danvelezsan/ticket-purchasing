export default theme => ({
    mainContainer: {
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: theme.palette.background.secondary,
        opacity: 0.8,
        zIndex: 1
    },
    content: {
        position: 'relative',
        zIndex: 1
    }
});
