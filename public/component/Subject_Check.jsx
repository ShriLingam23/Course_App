import React,{Component} from 'react';

class Subject_Check extends Component{

    constructor(props){
        super(props)

        this.state={
            subject:props.subject
        }

        this.checkboxClicked= this.checkboxClicked.bind(this);
    }

    checkboxClicked(e){
        this.props.subjectClicked(e.target.value,e.target.checked)
    }

    render(){
        return(
            <div className="col-md-4">
                <input type="checkbox" value={this.state.subject._id} onClick={this.checkboxClicked} /> {this.state.subject.name}
            </div>
        )


    }
}

export default Subject_Check;

