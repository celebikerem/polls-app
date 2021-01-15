import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TotalVoteBadge from '../components/TotalVoteBadge.js';
import moment from 'moment'
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: 20,
        position: 'relative',
        overflow: 'visible',
        cursor: 'pointer'
    }
});

function QuestionCard({ question }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5">
                    {question.question}
                </Typography>
                <Typography>
                    {moment(question.published_at).format('LLL')}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined"
                    color="primary"
                    component={RouterLink}
                    to={`${question.url}`}>Detail</Button>
            </CardActions>
            <TotalVoteBadge choices={question.choices} />
        </Card>
    )
}

export default QuestionCard;
