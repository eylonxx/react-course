class App extends React.Component{
    render() {
        return(  //class -> className, for -> htmlFor
            <div className="Machine">
                <h1>Slot Machines!</h1>
                <Machine
                s1="🍏"
                s2="🍅"
                s3="🍓"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));