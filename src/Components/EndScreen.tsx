import React, {useContext} from 'react'
import { Quiz } from '../Helpers/QuestionBank'
import {QuizContext} from '../Helpers/Contexts'

export default function EndScreen() {
    const { score, setScore, setGameState } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    }
    return (
        <div className='EndScreen'>
            <h1>Quiz Finished</h1>
            <h3> {score} / {Quiz.length} </h3>
            <button onClick={restartQuiz}> Restart Quiz </button>
        </div>
    )
}
