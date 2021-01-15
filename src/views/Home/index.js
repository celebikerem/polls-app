import React, { useEffect, useState } from 'react'
import QuestionCard from '../../components/QuestionCard';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function Home() {
    const [questions, setQuestions] = useState([]);

    useEffect(async () => {
        const result = await axios(
            'https://polls.apiblueprint.org/questions',
        );

        setQuestions(result.data);
    }, []);

    return (
        <Container>
            <Grid container spacing={1}>
                {
                    questions.map(question => <Grid item xs={12} md={4} spacing={3}>
                        <QuestionCard question={question} />
                    </Grid>)
                }
            </Grid>
        </Container>
    )
}

export default Home
