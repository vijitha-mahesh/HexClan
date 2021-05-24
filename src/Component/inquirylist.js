import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import SideMenu from './sidemenu';

export default class inquirylist extends Component {

  constructor(props) {
      super(props);
      this.state = {user: []};
    }
    componentDidMount(){
      axios.get('http://localhost:5000/user/inquiry')
        .then(response => {
         this.setState({ user : response.data.data });

          console.log(response.data);
        })

        
        .catch(function (error) {
          console.log(error);
        })
    }
    


    tabRow(){
      return this.state.user.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>

                
              <div className="row">
                    <div className="col-md-4">
                      

                    </div>

                    <div className="col-md-7">

                      <br/>
                      <br/>
                      <h1 align="center">Inquiries</h1>
                      <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                          <tr>
                            <th>User Id</th>
                            <th>Inquiry Type</th>
                            <th>Reason</th>
                            <th colSpan="2">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          { this.tabRow() }
                        </tbody>
                      </table>
                      




                    </div>

              </div>

                
         
        </div>
      );
    }
  }