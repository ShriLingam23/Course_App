import React,{Component} from 'react';
import axios from 'axios'

class Course_Row extends Component{

    constructor(props){
        super(props)

        this.state={
            course:props.course,
            subjects:[]
        }

        this.calculateFee= this.calculateFee.bind(this);
    }

    componentDidMount(){
        fetch('http://localhost:3000/server/course/view/specific/'+this.state.course._id, {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({subjects: jsonRes.data.subjects});
                console.log(jsonRes.data.subjects)
            })
            .catch(err => {
                console.log(err)
            });


    }

    calculateFee(){
        // fetch('http://localhost:8080/calculate/',
        //     {
        //         method:"POST",
        //         body:this.state.subjects,
                
                
        //     })
        //     .then(
        //         res => console.log(res)
        //     )
        //     .then(
        //         jsonRes =>alert(jsonRes)
        //     )

        axios.post('http://localhost:8080/calculate/',this.state.subjects)
            .then(
                (res)=>{
                    console.log(res.data)
                    

                }
            )
    }

    render(){
        return(
            <tr>
                <td>{this.state.course._id}</td>
                <td>{this.state.course.name}</td>
                <td>{this.state.course.code}</td>
                <td>{this.state.course.passMark}</td>
                <td>{this.state.course.lecturer}</td>
                <td><button className="btn btn-warning" onClick={this.calculateFee}>Calculate Fee</button></td>
            </tr>
        )


    }
}

export default Course_Row;

