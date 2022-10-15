// @molecules
import { useState } from 'react';
import { withStyles } from '@material-ui/core';

// @molecules
import SelectTickets from '../../molecules/select-tickets';
import ShowsList from '../../molecules/shows-list';
import PayTickets from '../../molecules/pay-tickets';

// @styles
import styles from './styles';

const Shows = () => {
    const [step, setStep] = useState(0);
    const [selectedShow, setSelectedShow] = useState();
    const [ticketsQuantity, setTicketsQuantity] = useState(0);
    const [remainingTickets, setRemainingTickets] = useState(0);

    return (
        <>
            {(step === 0) && (
            <ShowsList
                setSelectedShow={setSelectedShow}
                setStep={setStep}
            />
            )}
            {(step === 1) && (
            <SelectTickets
                remainingTickets={remainingTickets}
                selectedShow={selectedShow}
                setRemainingTickets={setRemainingTickets}
                setStep={setStep}
                setTicketsQuantity={setTicketsQuantity}
                ticketsQuantity={ticketsQuantity}
            />
            )}
            {(step === 2) && (
            <PayTickets
                selectedShow={selectedShow}
                setSelectedShow={setSelectedShow}
                setStep={setStep}
                setTicketsQuantity={setTicketsQuantity}
                ticketsQuantity={ticketsQuantity}
            />
            )}
        </>
    );
};

export default withStyles(styles)(Shows);
