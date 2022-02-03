class Friend extends React.Component{
    render() {
        const {name, hobbies} = this.props;
        return(
            <div>
                <p>{name} likes to</p>
                <ul>
                {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}
