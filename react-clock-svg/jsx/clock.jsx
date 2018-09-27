function FormattedDate(props){
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}
function HourHand() {
    
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date: new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(
            ()=>this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
           date: new Date()
        });
    }
    render(){
        return(
            <div>
                <h1>Clock</h1>
                <FormattedDate date={this.state.date}/>
            </div>
        )
    }
}
function App () {
    return(
        <div>
            <Clock/>
            <Clock/>
            <Clock/>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("container"));