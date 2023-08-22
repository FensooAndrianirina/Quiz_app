import React, { useState, useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import { Quiz } from '../Helpers/QuestionBank'

export default function Questions() {
    const { score, setScore, setGameState } = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if(Quiz[currQuestion].answer == optionChosen){
            setScore(score + 1);
        }
        // alert(score);
        setCurrQuestion(currQuestion + 1);
    }

    const finishQuiz = () => {
        if(Quiz[currQuestion].answer == optionChosen){
            setScore(score + 1);
        }
        setGameState("endscreen");
    }

    return (
        <div className='Quiz'>
            <h1>{Quiz[currQuestion].prompt}</h1>
            <div className='options'>
                <button onClick={() => setOptionChosen("A")}> 
                    { Quiz[currQuestion].A } 
                </button>
                <button onClick={() => setOptionChosen("B")}> 
                    { Quiz[currQuestion].B } 
                </button>
                <button onClick={() => setOptionChosen("C")}> {
                    Quiz[currQuestion].C } 
                </button>
                <button onClick={() => setOptionChosen("D")}> 
                    { Quiz[currQuestion].D } 
                </button>
                
                {currQuestion == Quiz.length -1 ? (
                    <button onClick={finishQuiz}>Finish Quiz </button>    
                ) : (
                    <button onClick={nextQuestion}>Next Question</button>
                )}     
            </div>
        </div>
    )
}
