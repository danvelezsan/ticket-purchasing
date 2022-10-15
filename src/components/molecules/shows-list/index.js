// @packages
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Divider, Grid, withStyles } from '@material-ui/core';
import dayjs from 'dayjs';

// @icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// @services
import Shows from '../../../services/shows';

// @styles
import styles from './styles';
import { config } from '../../../config';

const texts = config.text;

const ShowsList = ({
    classes,
    setSelectedShow,
    setStep
}) => {
    const [shows, setShows] = useState([]);

    const handleNext = (show) => {
        setStep(1);
        setSelectedShow(show);
    };

    const getShows = async () => {
        const response = await Shows.getAll();
        setShows(response);
    };

    useEffect(() => {
        getShows();
    }, []);

    return (
        <>
            <Typography className={classes.title} variant="h4">
                {shows.length}
                {' '}
                {texts.shows.showsList.title}
            </Typography>
            {
                shows.map((show) => (
                    <>
                    <Grid container direction="row" key={show.name}>
                        <Grid item xs={1}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography className={classes.month}>
                                        {dayjs(show.datetime).format('MMM')}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.dayNumber}>
                                        {dayjs(show.datetime).format('D')}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.year}>
                                        {dayjs(show.datetime).format('YYYY')}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction="column">
                                <Grid item className={classes.dayTime}>
                                    <Typography>
                                        {dayjs(show.datetime).format('ddd h:mma')}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.showName}>
                                        {show.name}
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.location}>
                                    <Typography>
                                        {show.city}
                                        {' '}
                                        {show.location}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                color="primary"
                                variant="contained"
                                className={classes.button}
                                endIcon={<ChevronRightIcon />}
                                onClick={() => handleNext(show)}
                            >
                                {texts.shows.showsList.button}
                            </Button>
                        </Grid>
                    </Grid>
                    <Divider
                        className={classes.divider}
                        key="divider"
                    />
                    </>
                ))
            }
        </>
    );
};

ShowsList.propTypes = {
    classes: PropTypes.object.isRequired,
    setSelectedShow: PropTypes.func.isRequired,
    setStep: PropTypes.func.isRequired
};

ShowsList.defaultProps = {
};

export default withStyles(styles)(ShowsList);
