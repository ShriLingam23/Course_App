import React, {Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'

import Home from './component/Home';

import Subject_View from './component/Subject_View';

import Course_Add from './component/Course_Add';
import Course_View from './component/Course_View';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    // componentDidMount() {
    //     // fetch('/api/messages', {method: 'GET'})
    //     //     .then(res => res.json())
    //     //     .then(jsonRes => {
    //     //         this.setState({message: jsonRes.message});
    //     //     })
    //     //     .catch(err => {
    //     //         this.setState({message: 'An error occurred'});
    //     //     });
    // }

    render() {
        return(
            <BrowserRouter>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <Link className="navbar-brand" to="/">Course Enrollment</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to={'/course/view'} className="nav-link">Course <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={'/subject/view'} className="nav-link">Subject <span className="sr-only">(current)</span></Link>
                            </li>
                        
                        </ul>
                    </div>
                </nav>


                <div className="container">

                

                    <Route exact path="/" component={Home} />
                    <Route path="/subject/view" component={Subject_View} />

                    <Route path="/course/add" component={Course_Add} />
                    <Route path="/course/view" component={Course_View} />


                </div>
            </div>
            </BrowserRouter>
            
        )
    }
}
