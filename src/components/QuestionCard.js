import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: 20
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function QuestionCard({ question }) {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography>
                    {question.question}
                </Typography>
                <Typography>
                    {question.published_at}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default QuestionCard;
