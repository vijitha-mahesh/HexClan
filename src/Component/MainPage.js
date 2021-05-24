import React, { Component } from 'react';
import Main from './MainComponent';
import SideMenu from './sidemenu';


export default class MainPage extends Component {
    render() {
        return (
            <div>
                <div className="row-md-12">
                    <Main/>

                </div>

                <div className="row">
                    <div className="col-md-4">
                        
                    
                    </div>

                    <div className="col-md-7">

                    </div>
        

                 </div>
            </div>
        );
    }
}