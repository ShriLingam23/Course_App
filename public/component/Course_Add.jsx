import React,{Component} from 'react';

import Subject_Check from './Subject_Check';

class Course_Add extends Component{

    constructor(props){
        super(props)

        this.state={
            name:'',
            code:'',
            passMark:'',
            lecturer:'',
            subjects:[],
            checkedSub:[]
        }

        this.onValueChange= this.onValueChange.bind(this);
        this.fillSubjects=this.fillSubjects.bind(this);
        this.formOnSubmit= this.formOnSubmit.bind(this);
    }

    componentDidMount(){
        fetch('http://localhost:3000/server/subject/view', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({subjects: jsonRes.data});
                console.log(jsonRes.data)
            })
            .catch(err => {
                console.log(err)
            });
    }

    onValueChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }

    checkboxClicked(id,bool){
        console.log(id,bool)
        let temp = this.state.checkedSub;

        if(bool)
            temp.push(id);
        else
            temp.splice(id,1);

        this.setState({
            checkedSub:temp
        })

        console.log(temp)
    }

    fillSubjects(){
        return this.state.subjects.map((subject)=>{
            return <Subject_Check key={subject._id} subject={subject} subjectClicked={this.checkboxClicked.bind(this)}/>
        })
    }

    formOnSubmit(e){

        e.preventDefault();

        const course = {
            name:this.state.name,
            code:this.state.code,
            passMark:parseFloat(this.state.passMark),
            lecturer:this.state.lecturer,
            subjects:this.state.checkedSub
        }

        console.log(course)

        fetch('http://localhost:3000/server/course/add', 
                {
                    method: 'POST',
                    headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                    body:JSON.stringify(course)
                })
                
                .then(res => res.json())
                .then(jsonRes => {
                    console.log(jsonRes)
                })
                .catch(err => {
                    console.log(err)
                });
    }

    render(){
        return(
            <div style={{marginTop:'50px'}}>
                <h3>New Course Add</h3>
                <form onSubmit={this.formOnSubmit} style={{marginTop:'50px'}}>
                    <div className="mb-3">
                        <label className="text-info">First name</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">#</span>
                            </div>
                            <input 
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.onValueChange}
                                className="form-control"
                            />
                        </div>
                    </div>
                    
                        
                    <div className="mb-3">
                        <label className="text-info">First name</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">#</span>
                            </div>
                            <input 
                                type="text"
                                name="code"
                                value={this.state.code}
                                onChange={this.onValueChange}
                                className="form-control"
                            />
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <label className="text-info">Pass Marks</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">#</span>
                            </div>
                            <input 
                                type="number"
                                name="passMark"
                                value={this.state.passMark}
                                onChange={this.onValueChange}
                                className="form-control"
                            />
                        </div>
                    </div>


                    <div className="mb-3">
                        <label className="text-info">Lecurer Incharge</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">#</span>
                            </div>
                            <input 
                                type="text"
                                name="lecturer"
                                value={this.state.lecturer}
                                onChange={this.onValueChange}
                                className="form-control"
                            />
                        </div>
                    </div>
                
                    <hr className="mb-4"/>
                    <label className="text-info">Subjects List</label>
                    <div className="row mb-6">

                            {this.fillSubjects()}
                        
                    </div>

                    <div className="mb-3" style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>
                        <button className="btn btn-success btn-lg" type="submit">ADD</button>
                    </div>
                </form>

            </div>
        )


    }
}

export default Course_Add;

