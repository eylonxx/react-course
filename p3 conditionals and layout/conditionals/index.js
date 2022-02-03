function getNum(){
    return Math.floor(Math.random()*10) + 1;
}

class NumPicker extends React.Component{
    render(){
        const num = getNum();
        let msg;
        if(num ===7){
            msg = 
            <div>
                <img src="https://c.tenor.com/kGFp0e2m_RsAAAAC/success.gif"/>
            </div>
        } else{
            msg = "Bad!";
        }
        return( <div>
            <h1>Your number is... {num}</h1>
            {/* <p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p> */}
            {msg}
            </div>
        )
    }
}
ReactDOM.render(<NumPicker/>, document.getElementById('root'));