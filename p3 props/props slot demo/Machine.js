class Machine extends React.Component{
    render() {
        const {s1, s2, s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        const colors = {backgroundColor: 'purple'};
        const getClass = () =>{
            return winner ? 'Machine-winner' : 'Machine-loser'
        }
        return( //inline styles ->  <p style={{fontSize: 50px;}}> <--- camelcase
            // or pass an object to style attr (colors in the paragraph)
            <div> 
                <p style={colors} >{s1} {s2} {s3}</p>
                <p className={getClass()}>
                    {winner ? 'Winner!' : 'Loser!'}</p>
            </div>
        )
    }
}
