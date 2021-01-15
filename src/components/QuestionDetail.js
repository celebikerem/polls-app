import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Choice from './Choice';

function QuestionDetail() {
    const [question, setQuestion] = useState([]);
    let routeParam = useParams();

    useEffect(async () => {
        const result = await axios(
            `https://polls.apiblueprint.org/questions/${routeParam.questionId}`,
        );

        setQuestion(result.data);
    }, []);

    return (
        <div>
            <Typography>
                {question.question}
            </Typography>
            <Choice choices={question.choices} question={routeParam.questionId}/>
        </div>
    )
}

export default QuestionDetail
