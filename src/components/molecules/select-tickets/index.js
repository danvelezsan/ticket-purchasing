// @packages
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import React, { useEffect } from 'react';
import { Divider, Grid, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';

/// @icons
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@material-ui/icons/RemoveCircleOutlined';

// @styles
import styles from './styles';
import { config } from '../../../config';

const texts = config.text;

const SelectTickets = ({
    classes,
    remainingTickets,
    selectedShow,
    setRemainingTickets,
    setStep,
    setTicketsQuantity,
    ticketsQuantity
}) => {
    const handleNext = () => {
        setStep(2);
    };
    const handleAdd = () => {
        setRemainingTickets(remainingTickets - 1);
        setTicketsQuantity(ticketsQuantity + 1);
    };
    const handleSubstract = () => {
        setRemainingTickets(remainingTickets + 1);
        setTicketsQuantity(ticketsQuantity - 1);
    };

    useEffect(() => {
        setRemainingTickets(selectedShow.remainingTickets);
    }, []);

    return (
        <>
        <Grid container direction="column" className={classes.topContainer}>
            <Grid item className={classes.marginLeftTop}>
                <Typography>
                    {selectedShow.name}
                </Typography>
            </Grid>
            <Grid item className={classes.marginLeftTop}>
                <Typography>
                    {dayjs(selectedShow.datetime).format('ddd MMM D, YYYY h:mm A')}
                </Typography>
            </Grid>
            <Grid item className={classes.marginLeftTop}>
                <Typography>
                    {selectedShow.location}
                    {', '}
                    {selectedShow.city}
                </Typography>
            </Grid>
        </Grid>
        <Grid container justify="center">
            <Paper
                className={classes.container}
                elevation={5}
            >
                <Grid container direction="column">
                    <Grid item className={classes.multipleSeatInfo}>{texts.shows.selectTickets.multipleSeatInfo}</Grid>
                    <Divider
                        className={classes.divider}
                        key="divider"
                    />
                    <Grid item container direction="row">
                        <Grid item container xs={6} alignItems="center">
                        <Typography>
                        $
                        {selectedShow.ticketPrice}
                        {' '}
                        {texts.shows.selectTickets.fees}
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container alignItems="center" justify="flex-end">
                            <IconButton disabled={ticketsQuantity === 0} onClick={handleSubstract}>
                                <RemoveCircleOutlinedIcon className={classes.icon} />
                            </IconButton>
                            <Typography>
                            {' '}
                            {ticketsQuantity}
                            {' '}
                            </Typography>
                            <IconButton color="primary" disabled={remainingTickets === 0} onClick={handleAdd}>
                                <AddCircleOutlinedIcon className={classes.icon} />
                            </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider
                        className={classes.divider}
                        key="divider"
                    />
                    <Grid item className={classes.multipleSeatInfo}>
                        {texts.shows.selectTickets.ticketsAvaliable}
                        {' '}
                        {dayjs(selectedShow.datetime).format('ddd, MMM D, YYYY')}
                    </Grid>
                    <Divider
                        className={classes.divider}
                        key="divider"
                    />
                    <Grid item>
                        <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <Typography className={classes.subtotal}>
                            {texts.shows.selectTickets.subtotal}
                            </Typography>
                            <Typography>
                                {ticketsQuantity}
                                {' '}
                                Tickets
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.subtotal}>
                                {ticketsQuantity * selectedShow.ticketPrice}
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button
                            disabled={ticketsQuantity === 0}
                            fullWidth
                            variant="contained"
                            className={classes.nextButton}
                            onClick={() => handleNext()}
                        >
                            {texts.shows.selectTickets.nextButton}
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        </>
    );
};

SelectTickets.propTypes = {
    classes: PropTypes.object.isRequired,
    remainingTickets: PropTypes.number.isRequired,
    selectedShow: PropTypes.object.isRequired,
    setRemainingTickets: PropTypes.func.isRequired,
    setStep: PropTypes.func.isRequired,
    setTicketsQuantity: PropTypes.func.isRequired,
    ticketsQuantity: PropTypes.number.isRequired
};

SelectTickets.defaultProps = {
};

export default withStyles(styles)(SelectTickets);
