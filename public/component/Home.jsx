import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class Home extends Component{

    render(){
        return(
            <div className="container">

            <div className="jumbotron" style={{marginTop:'50px'}}>
                <h1 className="display-4 text-center">Course</h1>
                <p className="lead text-center">Here we can add Course and view all the existing courses</p>
                <hr className="my-4" />
                <p className="text-center">It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <div style={{display:'flex',justifyContent:'center'}}>
                <Link to="/course/add" className="btn btn-success btn-lg" role="button" style={{marginRight:"20px"}}>Add</Link>
                    <Link to="/course/view" className="btn btn-primary btn-lg" role="button" >View</Link>
                </div>
            </div>

            <hr/>

            <div className="jumbotron" style={{marginTop:'50px'}}>
                <h1 className="display-4 text-center">Subject</h1>
                <p className="lead text-center">Here we can add Course and view all the existing courses</p>
                <hr className="my-4" />
                <p className="text-center">It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Link to="/subject/view" className="btn btn-primary btn-lg" role="button" >View</Link>
                </div>
            </div>

            </div>
        )


    }
}

export default Home;

