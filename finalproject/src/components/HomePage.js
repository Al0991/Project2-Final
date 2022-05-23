import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <h1>What quiz do you wanna take?</h1>
            <Link to="MusicQuiz"><button>Music</button></Link>
            <Link to="FoodQuiz"><button>Food</button></Link>
            <Link to="SportsQuiz"><button>Sports</button></Link>
        </div>
    )
}

export default HomePage