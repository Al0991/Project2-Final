import React from 'react'

const Question = () => {
    return (
        <div>
            <form>
                <input type='radio' id='Choice1' name='Question'/>
                <label for='Choice1'>Choice1</label><br/>
                <input type='radio' id='Choice2' name='Question'/>
                <label for='Choice2'>Choice2</label><br/>
                <input type='radio' id='Choice3' name='Question'/>
                <label for='Choice3'>Choice3</label><br/>
                <input type='radio' id='Choice4' name='Question'/>
                <label for='Choice4'>Choice4</label>
            </form>
        </div>
    )
}