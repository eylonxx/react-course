import React from 'react';
import ReactDOM from 'react-dom';
import fruits from './foods';
import {choice, remove} from './helpers';

class Fruits extends React.Component{
    render(){
        const fruit = remove(fruits, choice(fruits));
        return(
        <div>
            <p>I'd like one {fruit}, please.</p>
            <p>Here you go: {fruit}</p>
            <p>Delicious! May I have another?</p>
            <p>I'm sorry, we're all out. We have {fruits.length} left.</p>
        </div>
        )
    }

}

ReactDOM.render(<Fruits />, document.getElementById('root'));