// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    FormHelperText,
    Grid,
    TextField,
    Typography,
    withStyles
} from '@material-ui/core';

// @styles
import styles from './styles';
import { config } from '../../../config';

const texts = config.text;
const CardPopUp = ({
    classes,
    creditCards,
    openCardPopUp,
    selectedCard,
    setCreditCards,
    setOpenCardPopUp,
    setSelectedCard
}) => {
    const schema = yup.object().shape({
        cardNumber: yup.string().required().test('', 'type numbers only', value => parseInt(value, 10)).min(16)
            .max(19),
        userName: yup.string().required(),
        expirationDate: yup.string().required().matches('[0-9][1-9]/[0-9][0-9]', 'type month and year in format MM/YY').length(5)
            .test(
                '',
                'Expiration Date cant be earlier than this year and month',
                (date) => {
                    if (date.length === 5) {
                        const actualDate = new Date();
                        const splitDate = date.split('/');
                        const cardDate = new Date(`20${splitDate[1]}`, (parseInt(splitDate[0], 10) - 1).toString());
                        if (cardDate >= actualDate) {
                            return true;
                        }
                        return false;
                    }
                    return true;
                }
            ),
        cvc: yup.string().required().test('', 'type numbers only', value => parseInt(value, 10)).min(3)
            .max(4)

    });

    const {
        control, handleSubmit, formState: { errors }
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        if (selectedCard) {
            setCreditCards(creditCards.map(card => {
                if (card.cardNumber === data.cardNumber) {
                    return data;
                }
                return card;
            }));
            setSelectedCard(null);
        } else {
            creditCards.push(data);
        }
        setOpenCardPopUp(false);
    };

    return (
        <Dialog
            open={openCardPopUp}
        >
        <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
        <Typography>Credit Card From</Typography>
            <Grid
                container
                justify="center"
                direction="column"
            >
                <Controller
                    control={control}
                    defaultValue={selectedCard?.cardNumber || ''}
                    name="cardNumber"
                    shouldUnregister
                    render={({ field }) => (
                        <TextField
                            disabled={selectedCard}
                            value={field.value}
                            name={field.name}
                            id={field.name}
                            label="Card Number"
                            type="tel"
                            variant="standard"
                            onChange={(e) => field.onChange(e.target.value.trim())}
                        />
                    )}
                />
                <FormHelperText error>{errors?.cardNumber?.message}</FormHelperText>
                <Controller
                    control={control}
                    defaultValue={selectedCard?.userName || ''}
                    name="userName"
                    shouldUnregister
                    render={({ field }) => (
                        <TextField
                            value={field.value}
                            name={field.name}
                            id={field.name}
                            label="User Name"
                            type="text"
                            variant="standard"
                            onChange={(e) => field.onChange(e.target.value)}
                        />
                    )}
                />
                <FormHelperText error>{errors?.userName?.message}</FormHelperText>
                <Controller
                    control={control}
                    defaultValue={selectedCard?.expirationDate || ''}
                    name="expirationDate"
                    shouldUnregister
                    render={({ field }) => (
                        <TextField
                            value={field.value}
                            name={field.name}
                            id={field.name}
                            label="Expiration Date MM/YY"
                            type="tel"
                            variant="standard"
                            onChange={(e) => {
                                let tempValue = e.target.value.trim();
                                if (e.nativeEvent.data !== null) {
                                    if (tempValue.length === 1) {
                                        if (parseInt(tempValue, 10) > 1) {
                                            tempValue = `0${tempValue}/`;
                                        }
                                    } else if (tempValue.length === 2) {
                                        tempValue = `${tempValue}/`;
                                    }
                                }
                                if (tempValue.length < 6) {
                                    return field.onChange(tempValue);
                                }
                                return null;
                            }}
                        />
                    )}
                />
                <FormHelperText error>{errors?.expirationDate?.message}</FormHelperText>
                <Controller
                    control={control}
                    defaultValue={selectedCard?.cvc || ''}
                    name="cvc"
                    shouldUnregister
                    render={({ field }) => (
                        <TextField
                            value={field.value}
                            name={field.name}
                            id={field.name}
                            label="CVC"
                            type="tel"
                            variant="standard"
                            onChange={(e) => field.onChange(e.target.value.trim())}
                        />
                    )}
                />
                <FormHelperText error>{errors?.cvc?.message}</FormHelperText>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => { setSelectedCard(null); setOpenCardPopUp(false); }}>{texts.shows.cardModal.cancel}</Button>
            <Button type="submit">{texts.shows.cardModal.confirm}</Button>
        </DialogActions>
        </form>
        </Dialog>
    );
};

CardPopUp.propTypes = {
    classes: PropTypes.object.isRequired,
    creditCards: PropTypes.array.isRequired,
    openCardPopUp: PropTypes.bool.isRequired,
    selectedCard: PropTypes.object,
    setCreditCards: PropTypes.func.isRequired,
    setOpenCardPopUp: PropTypes.func.isRequired,
    setSelectedCard: PropTypes.func.isRequired
};

CardPopUp.defaultProps = {
    selectedCard: null
};

export default withStyles(styles)(CardPopUp);
