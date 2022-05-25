import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = (props) => {

    let linkClicked = props.linkClicked
    let handleClick = () => {
        props.handleClickLink()
        console.log(props.linkClicked)
        linkClicked = props.linkClicked
    }
    if(linkClicked === false){
    return (
        <div>
            <h1>Take your first quiz!</h1>
            <Link to="MusicQuiz"><button onClick={handleClick}>Music</button></Link>
            <Link to="FoodQuiz"><button onClick={handleClick}>Food</button></Link>
            <Link to="SportsQuiz"><button onClick={handleClick}>Sports</button></Link>
        </div>
    )
    }
    else{
        return (
            <div>
                <h1>Take another quiz?</h1>
                <Link to="MusicQuiz"><button>Music</button></Link>
                <Link to="FoodQuiz"><button>Food</button></Link>
                <Link to="SportsQuiz"><button>Sports</button></Link>
            </div>
        )
    }
}

export default HomePage