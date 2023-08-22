import './App.css'
import React, {useState, useContext} from 'react'
import MainMenu from './Components/MainMenu';
import Questions from './Components/Questions';
import EndScreen from './Components/EndScreen';

import { QuizContext } from './Helpers/Contexts';

function App() {
    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);

    return (
        <div className='App'>
            <h1>Quiz App</h1>
            <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
                {gameState === "menu" && <MainMenu /> }
                {gameState === "quiz" && <Questions /> }
                {gameState === "endscreen" && <EndScreen /> }
            </QuizContext.Provider>
        </div>
    );
}

export default App
