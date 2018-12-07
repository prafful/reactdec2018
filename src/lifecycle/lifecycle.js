import React from 'react'
import ReactDOM from 'react-dom'


class LifeCycle extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            dummyVariable: 0
        }

        this.changeState = this.changeState.bind(this)
    }



    componentWillMount(){
        console.log("Component will mount now")
        console.log(this.state.dummyVariable);
        this.setState({
            dummyVariable: this.state.dummyVariable + 1
        })
    }

    componentDidMount(){
        console.log("Component mounted");
        console.log(this.state.dummyVariable);
    }

    componentWillUpdate(){
        console.log("Component will update for any state change!!!!");
    }

    componentDidUpdate(){
        console.log("Component updated because of state change!!!!");
    }

    changeState(){
        this.setState({
            dummyVariable : this.state.dummyVariable + 1
        })

        if(this.state.dummyVariable >10){
                ReactDOM.unmountComponentAtNode(document.getElementById("life"))
        }
        
    }

    componentWillUnmount(){
        console.log("This component will unmount from view!!!!")
    }
  
    render() { 
        return (  
            <div>Exploring Component Life Cycle!!!!
            <br></br>
            <button onClick={this.changeState} >Change State {this.state.dummyVariable}</button>

            </div>
        );
    }
}
 
export default LifeCycle;