import React,{Component} from 'react';

import Course_Row from './Course_Row'
import Course_Detailes from './Course_Detailed'
import Course_Detailed from './Course_Detailed';

class Course_View extends Component{

    constructor(props){
        super(props);

        this.state={
            courses:[],
            filteredCourse:[],
            show:false
        }

        this.fillCourses = this.fillCourses.bind(this);
        this.filterCourse = this.filterCourse.bind(this);
        this.filterCourseTable= this.filterCourseTable.bind(this);
        this.resetCourse= this.resetCourse.bind(this);
    }


    componentDidMount(){
        fetch('http://localhost:3000/server/course/view', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({courses: jsonRes.data});
                console.log(jsonRes.data)
            })
            .catch(err => {
                console.log(err)
            });
    }

    fillCourses(){
        if(!this.state.show){
            return(
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Pass Marks</th>
                            <th>Lecturer Incharge</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.courses.map((course)=>{
                            return <Course_Row key={course._id} course={course}/>
                        })}
                    </tbody>
                </table>
            )    
        }
        else{
            return(
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Pass Marks</th>
                            <th>Lecturer Incharge</th>
                            <th>Subject Name</th>
                            <th>Subject Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {<Course_Detailed course={this.state.filteredCourse}/>}
                    </tbody>
                </table>
            )
        }
    }

    filterCourse(){
        return this.state.courses.map((course)=>{
            return <option key={course._id}>{course.name}</option>
        })
    }

    filterCourseTable(){
        const selectOpt = document.getElementById('courseOpt');
        const index = selectOpt.selectedIndex;

        fetch('http://localhost:3000/server/course/view/'+this.state.courses[index-1]._id,
                {
                    method:'GET'
                })
                .then(
                    res=>res.json()
                )
                .then(
                    (jsonRes)=>{
                        console.log(jsonRes)
                        this.setState({
                            filteredCourse:jsonRes.data,
                            show:false
                        },()=>{
                            this.setState({
                                show:true
                            })
                        })
                    }
                )
    }

    resetCourse(){
        const selectOpt = document.getElementById('courseOpt');
        selectOpt.selectedIndex=0;
        this.setState({
            filteredCourse:[],
            show:false
        })
    }


    render(){
        return(
            <div className="container" style={{marginTop:'50px'}}>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <select id="courseOpt" className="form-control">
                            <option>Choose a course...</option>
                            {this.filterCourse()}
                        </select>
                    </div>
                    <div className="col-md-3 mb-3">
                        <button className="btn btn-info btn-lg form-control" onClick={this.filterCourseTable}>Filter</button>  
                    </div>
                    <div className="col-md-3 mb-3">
                        <button className="btn btn-danger btn-lg form-control" onClick={this.resetCourse}>Reset</button>  
                    </div>
                </div>

                {this.fillCourses()}

            </div>
        )


    }
}

export default Course_View;

