import React from 'react'

const Question = (props) => {
    return (
        <div>
            {props.Question}
            <form>
                <input type='radio' id='Choice1' name='Question'/>
                <label for='Choice1'>{props.Choices[0]}</label><br/>
                <input type='radio' id='Choice2' name='Question'/>
                <label for='Choice2'>{props.Choices[1]}</label><br/>
                <input type='radio' id='Choice3' name='Question'/>
                <label for='Choice3'>{props.Choices[2]}</label><br/>
                <input type='radio' id='Choice4' name='Question'/>
                <label for='Choice4'>{props.Choices[3]}</label>
            </form>
        </div>
    )
}

export default Question