import React, { Component } from 'react';

import "./Main.css";
import Sidebar from '../components/sidebar/Sidebar';

class UserHome extends Component {

    render() {
        return (
            <>
                <Sidebar />
                <div className='container'>
                    <h3><mark>Procurement For Construction Industry</mark></h3>
                </div>
            </>
        );
    }
}

export default UserHome;