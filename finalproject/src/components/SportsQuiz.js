import React from 'react'
import Question from './Question'

const SportsQuiz = () => {
    const Question1 = 'Where do you live?'
    const Choices1 = ['United States of America', 'Japan or The Dominican Republic', 'Europe', 'Canada']

    const Question2 = 'What is your favorite season?'
    const Choices2 = ['Fall', 'Summer', 'Spring', 'Winter']

    const Question3 = 'How might someone describe your favorite sport?'
    const Choices3 = ['American', 'Slow', 'Popular', 'Violent']

    const Question4 = 'Some question'
    const Choices4 = ['Choice1', 'Choice2', 'Choice3', 'Choice4']

    return (
        <div> 
            <h1>Music</h1>
            <Question Question={Question1} Choices={Choices1} /> <br />
            <Question Question={Question2} Choices={Choices2} /> <br />
            <Question Question={Question3} Choices={Choices3} /> <br />
            <Question Question={Question4} Choices={Choices4} /> <br />
        </div>
    )
}

export default SportsQuiz

//MAKE THE NEXT COMMIT FINISHED QUESTIONS AND COMMIT TO THE MASTER/MAIN BRANCH