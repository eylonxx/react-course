class Hello extends React.Component{
    render() {
        let bangs = "!".repeat(this.props.bangs)
        return(
            <div>
                <h1>Hello, {this.props.to} from {this.props.from}{bangs}</h1>
            </div>
        )
    }
}
//no reactDOM here, only on index file where i use APP class