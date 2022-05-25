import React from 'react'
import Question from './Question'
import {Link} from 'react-router-dom'

const FoodQuiz = () => {
    //goal is find persons favorite kind of food
    const Question1 = 'Which food is best?'
    const Choices1 = ['Burgers', 'Pizza', 'Orange Chicken', 'Tacos']

    const Question2 = 'Which side dish do you prefer?'
    const Choices2 = ['French Fries', 'Garlic Bread', 'Rice', 'Tortilla Chips']

    const Question3 = 'Which ingrediant is common in your favorite cuisine?'
    const Choices3 = ['There is none', 'Crushes Tomatoes', 'Sesame Oil', 'Avocado']

    const Question4 = 'How might your favorite kind of food be described?'
    const Choices4 = ['Excessive', 'Simple', 'Balanced', 'Spicy']

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

export default FoodQuiz