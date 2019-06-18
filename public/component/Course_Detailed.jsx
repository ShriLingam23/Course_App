import React,{Component} from 'react';

class Course_Detailed extends Component{

    constructor(props){
        super(props)

        this.state={
            course:props.course
        }

        this.calculateFee= this.calculateFee.bind(this);
    }

    calculateFee(){
        
    }

    render(){
        return(
            this.state.course.subjects.map((subject)=>{
                return(
                    <tr key={subject._id}>
                        <td>{this.state.course._id}</td>
                        <td>{this.state.course.name}</td>
                        <td>{this.state.course.code}</td>
                        <td>{this.state.course.passMark}</td>
                        <td>{this.state.course.lecturer}</td>
                        <td>{subject.name}</td>
                        <td>{subject.amount}</td>
                    </tr>
                )
            })
            
        )


    }
}

export default Course_Detailed;

