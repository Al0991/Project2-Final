import React from 'react'
import Question from './Question'
import {Link} from 'react-router-dom'

const MusicQuiz = () => {

    const Question1 = 'Which artist/s do you prefer?'
    const Choices1 = ['Kendrick Lamar', 'Ariana Grande', 'Bad Bunny', 'Marshmello']

    const Question2 = 'Which song do you prefer?'
    const Choices2 = ['Im On One by Future', 'Perfect by Ed Sheeran', 'Rick Flair by Anuel AA', 'Savage by Tiesto']

    const Question3 = 'Which sound do you prefer?'
    const Choices3 = ['Trap Beats', 'Whatever is popular', 'Songs in spanish', 'Music at a rave']

    const Question4 = 'Where can you more likely find the music you like?'
    const Choices4 = ['Soundcloud', 'Z100', 'La Mega', 'youredm.com']

    return (
        <div> 
            <h1>Music</h1>
            <Question Question={Question1} Choices={Choices1} /> <br />
            <Question Question={Question2} Choices={Choices2} /> <br />
            <Question Question={Question3} Choices={Choices3} /> <br />
            <Question Question={Question4} Choices={Choices4} /> <br />
            <Link to="/"><button>Take another quiz</button></Link>
        </div>
    )
}

export default MusicQuiz