class Hello extends React.Component{
    static  defaultProps = {
        from: 'Anon',        //default in jsx
        bangs: 1
    }
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