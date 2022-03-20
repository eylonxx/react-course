class App extends React.Component{
    render(){
        return(
            <div>
                <Hello to="Inbar" bangs={4} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));