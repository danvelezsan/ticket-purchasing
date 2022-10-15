// @packages
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import React, { useState } from 'react';
import {
    Grid,
    Typography,
    withStyles
} from '@material-ui/core';
import { globalUI } from '../../../core';
import dayjs from 'dayjs';

// @icons
import AddIcon from '@material-ui/icons/Add';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ExpandMoreIcon from '@material-ui/icons//ExpandMore';

// @atoms
import CardPopUp from '../../atoms/card-pop-up';

// @styles
import styles from './styles';
import { config } from '../../../config';

const texts = config.text;

const PayTickets = ({
    classes,
    selectedShow,
    ticketsQuantity,
    setStep,
    setSelectedShow,
    setTicketsQuantity
}) => {
    const [openCardPopUp, setOpenCardPopUp] = useState(false);
    const total = ticketsQuantity * (selectedShow.ticketPrice + selectedShow.serviceFee + 1);
    const [creditCards, setCreditCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState();
    const [showDetails, setShowDetails] = useState(false);

    const handlePayment = () => {
        if (creditCards.length === 0) {
            globalUI.showAlertNotificationInfo(
                texts.shows.payTickets.creditCardNeeded
            );
        } else {
            globalUI.showAlertNotificationSuccess(
                texts.shows.payTickets.purchaseSuccess
            );
            setTicketsQuantity(0);
            setSelectedShow(null);
            setStep(0);
        }
    };

    const getLastCardDigits = (card) => {
        const { length } = card.cardNumber;
        return card.cardNumber.slice(length - 4);
    };

    const handleDeleteCard = (cardToDelete) => {
        setCreditCards(creditCards.filter(card => card.cardNumber !== cardToDelete.cardNumber));
        setSelectedCard(null);
    };

    return (
        <>
        <Grid container direction="row" spacing={3}>
            <Grid item>
                <Grid container direction="column">
                    <Paper
                        className={classes.container}
                    >
                        <Grid container direction="column">
                            <Grid item>
                                <Typography className={classes.title} variant="h3">
                                    {texts.shows.payTickets.delivery}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.subTitle}>
                                    {selectedShow.delivery.name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.deliveryDescription}>
                                    {selectedShow.delivery.description}
                                <Typography className={classes.deliveryDescription} />
                                    {' '}
                                    {texts.shows.payTickets.ticketsAvaliable}
                                    {' '}
                                    {dayjs(selectedShow.datetime).format('ddd, MMM D, YYYY')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid container direction="column">
                    <Paper
                        className={classes.container}
                    >
                        <Grid item>
                            <Typography className={classes.title} variant="h3">
                                {texts.shows.payTickets.payment}
                            </Typography>
                        </Grid>
                        <Grid item>
                            {texts.shows.payTickets.useCard}
                        </Grid>
                        {creditCards.map((card) => (
                            <div className={classes.cardContainer} key={card.cardNumber}>
                                <Typography className={classes.subTitle}>
                                    {getLastCardDigits(card)}
                                </Typography>
                                <Typography className={classes.cardInfo}>
                                    {card.userName}
                                    {' '}
                                    {card.expirationDate}
                                </Typography>
                                <IconButton color="primary" className={classes.iconButton} onClick={() => { setSelectedCard(card); setOpenCardPopUp(true); }}>
                                    {texts.shows.payTickets.editCard}
                                </IconButton>
                                <IconButton color="primary" className={classes.iconButton} onClick={() => handleDeleteCard(card)}>
                                    {texts.shows.payTickets.deleteCard}
                                </IconButton>
                            </div>
                        ))}
                        <Grid item>
                            <IconButton color="primary" className={classes.iconButton} onClick={() => setOpenCardPopUp(true)}>
                                <AddIcon />
                                <CreditCardIcon />
                                    {texts.shows.payTickets.addCard}
                            </IconButton>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="column">
                    <Paper
                        className={classes.container}
                    >
                        <Grid item justify="space-between">
                            <Grid container direction="row" justify="space-between">
                                <Typography className={classes.title} variant="h3">
                                    {texts.shows.payTickets.total}
                                </Typography>
                                <Grid item>
                                    <Grid container alignItems="center">
                                        <Typography className={classes.title} variant="h3">
                                            $
                                            {total}
                                        </Typography>
                                        <IconButton className={classes.collapseButton} onClick={() => setShowDetails(!showDetails)}>
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        {showDetails && (
                            <>
                        <Grid item>
                            <Typography className={classes.subTitle}>
                                {texts.shows.payTickets.tickets}
                            </Typography>
                        </Grid>
                        <Grid item className={classes.marginBottom}>
                            <Grid container justify="space-between">
                                <Typography>
                                    {selectedShow.ticketPrice}
                                    {' x '}
                                    {ticketsQuantity}
                                </Typography>
                                <Typography>
                                    {' $'}
                                    {ticketsQuantity * selectedShow.ticketPrice}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.subTitle}>
                                {texts.shows.payTickets.fees}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container justify="space-between">
                                <Typography>
                                    {texts.shows.payTickets.serviceFee}
                                    {' '}
                                    {selectedShow.serviceFee}
                                    {' x '}
                                    {ticketsQuantity}
                                </Typography>
                                <Typography>
                                    {' $'}
                                    {ticketsQuantity * selectedShow.serviceFee}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.marginBottom}>
                            <Grid container justify="space-between">
                                <Typography>
                                    {texts.shows.payTickets.orderProcessingFee}
                                </Typography>
                                <Typography>
                                    $
                                    {' '}
                                    1.0
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.subTitle}>
                                {texts.shows.payTickets.delivery}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container justify="space-between">
                                <Typography>
                                    {selectedShow.delivery.name}
                                </Typography>
                                <Typography>
                                    {texts.shows.payTickets.free}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <IconButton color="primary" className={classes.iconButton} onClick={() => setStep(0)}>
                                {texts.shows.payTickets.cancelOrder}
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.subTitle}>
                                {texts.shows.payTickets.finalWarning}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                fullWidth
                                variant="contained"
                                className={classes.button}
                                onClick={() => handlePayment()}
                            >
                                {texts.shows.payTickets.button}
                            </Button>
                        </Grid>
                            </>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
        {openCardPopUp && (
        <CardPopUp
            creditCards={creditCards}
            openCardPopUp={openCardPopUp}
            selectedCard={selectedCard}
            setCreditCards={setCreditCards}
            setOpenCardPopUp={setOpenCardPopUp}
            setSelectedCard={setSelectedCard}
        />
        )}
        </>
    );
};

PayTickets.propTypes = {
    classes: PropTypes.object.isRequired,
    selectedShow: PropTypes.object.isRequired,
    ticketsQuantity: PropTypes.number.isRequired,
    setStep: PropTypes.func.isRequired,
    setSelectedShow: PropTypes.func.isRequired,
    setTicketsQuantity: PropTypes.func.isRequired
};

PayTickets.defaultProps = {
};

export default withStyles(styles)(PayTickets);
