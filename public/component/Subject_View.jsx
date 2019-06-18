import React,{Component} from 'react';

import Subject_Row from './Subject_Row'

class Subject_View extends Component{

    constructor(props){
        super(props);

        this.state={
            subjects:[]
        }

        this.fillSubjects = this.fillSubjects.bind(this);
    }


    componentDidMount(){
        fetch('http://localhost:3000/server/subject/view', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({subjects: jsonRes.data});
                console.log(jsonRes.data)
            })
            .catch(err => {
                this.setState({message: 'An error occurred'});
                console.log(this.state.message)
            });
    }

    fillSubjects(){
        return this.state.subjects.map((subject)=>{
            return <Subject_Row key={subject._id} subject={subject}/>
        })
    }

    render(){
        return(
            <div className="container" style={{marginTop:'50px'}}>

                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Subject Name</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.fillSubjects()}
                    </tbody>
                </table>

            </div>
        )


    }
}

export default Subject_View;

