import React from 'react'; 
import axios from 'axios';
class Employee extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: []
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get('employee.json')
        .then(result => 
            this.setState({
                employees: result.data,
                isLoading: false
            })
        )
        .catch(error => 
            this.setState({
                error,
                isLoading: false
            })
        );
    }
    render() {
        if(this.state.isLoading) {
            return "Loading..."
        }
        if(this.state.error) {
            return <p>{this.state.error.message}</p>
        }
        return (<React.Fragment>
                    <table style={{width:'60%'}} className='table'>
                         <thead className="thead-light">
                             <tr>
                                  <th>EmpID</th>
                                  <th>First Name</th>
                                  <th>Last Name</th>
                                  <th>Email</th>
                                  <th>Avatar</th>
                             </tr>
                         </thead>
                         <tbody>
                              {this.state.employees ?
                              this.state.employees.map(employee => {
                                     return (<tr key={employee.id}>
                                             <td>{employee.id}</td>
                                             <td>{employee.first_name}</td>
                                             <td>{employee.last_name}</td>
                                             <td>{employee.email}</td>
                                             <td> <img src={employee.avatar} alt="employee image"/></td>
                                     </tr>)
                             }):<tr><td>No Data found</td></tr>
                             }
                         </tbody>
                    </table>
            </React.Fragment>)  
    }
}
export default Employee;
