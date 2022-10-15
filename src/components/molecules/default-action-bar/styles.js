export default theme => ({
    divider: {
        margin: '10px 0',
        width: '80%'
    },
    dividerBottom: {
        margin: 0,
        width: '80%'
    },
    iconOnly: {
        alignItems: 'center',
        display: 'flex',
        margin: 'auto'
    },
    icon: {
        alignItems: 'center',
        display: 'flex',
        marginRight: 10
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 44,
        margin: 5,
        minWidth: 70,
        display: 'flex',
        flexDirection: 'row',
        width: '90%'
    },
    itemDescription: {
        fontWeight: 'bold'
    },
    itemBottom: {
        fontSize: 12,
        marginTop: 5,
        textTransform: 'capitalize'
    },
    teamIcon: {
        borderRadius: 5,
        height: 20,
        width: 20
    },
    textName: {
        color: theme.palette.text.disabled,
        lineHeight: '140%',
        width: '80%'
    }
});
