import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles({
    root: {

    },
    voteBadge: {
        position: 'absolute',
        top: 0,
        right: 20,
        width: 100
    }
});

function TotalVoteBadge({ choices }) {
    const classes = useStyles();

    let voteCount = 0;

    choices.map(choice => {
        voteCount += choice.votes;
    });

    return (
        <Badge className={classes.voteBadge} badgeContent={voteCount + " votes"} color="primary" />
    )
}

export default TotalVoteBadge
