import React from 'react'

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
<<<<<<< Updated upstream
            <h1>Design to be the homepage maybe the submit file idea</h1>
=======
            <h1>Take your first quiz!</h1>
            <Link to="MusicQuiz"><button onClick={handleClick}>Music</button></Link>
            <Link to="FoodQuiz"><button onClick={handleClick}>Food</button></Link>
            <Link to="SportsQuiz"><button onClick={handleClick}>Sports</button></Link>
>>>>>>> Stashed changes
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