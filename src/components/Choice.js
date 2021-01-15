import React from 'react'
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: 20
    }
});



function Choice({ choices, question }) {
    const classes = useStyles();

    const handleVote = () => {
        axios.post(`https://polls.apiblueprint.org/questions/${question}/choices/1`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    if (!choices) {
        return <div>loading</div>
    }

    let voteCount = 0;
    choices.map(choice => {
        voteCount += choice.votes;
    });

    return (
        <div>
            {
                choices.map(choice => {
                    const votePercent = choice.votes * 100 / voteCount;
                    return (
                        <Card className={classes.root} onClick={handleVote}>
                            <CardContent>
                                <Typography>{choice.choice + "  %" + votePercent.toFixed(2)}</Typography>
                                <LinearProgress variant="determinate" value={votePercent} />
                            </CardContent>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default Choice
