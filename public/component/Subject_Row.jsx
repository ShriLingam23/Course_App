import React,{Component} from 'react';

class Subject_Row extends Component{

    constructor(props){
        super(props)

        this.state={
            subject:props.subject
        }
    }

    render(){
        return(
            <tr>
                <td>{this.state.subject._id}</td>
                <td>{this.state.subject.name}</td>
                <td>{this.state.subject.description}</td>
                <td>{this.state.subject.amount}</td>
            </tr>
        )


    }
}

export default Subject_Row;

