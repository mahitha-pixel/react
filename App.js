import React from 'react'; 
import Employee from './Employee';
import Cr from './Cr';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
class App extends React.Component {
    render() {
        return (<Router>
                    <React.Fragment>
                        <Link to="/employee">Employees</Link> |
                        <Link to="/create">Create </Link> |
                        <Route exact path = "/" component = {Employee} />
                        <Route path = "/employee" component = {Employee} />
                        <Route path = "/create" component = {Cr} />
                    </React.Fragment>
                </Router>)
    }
}
export default App;

