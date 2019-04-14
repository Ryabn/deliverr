import React, { Component } from 'react';
import {Typography} from '@material-ui/core';
import UpcomingPanel from './UpcomingPanel';
import './styles/upcoming.css';

const entireDatabase = 'https://c0c7dba0.ngrok.io/travelInfo/1';

export class Upcoming extends Component {
    state = {
        trips: [<Typography variant="h3" key={1}>No Trips</Typography>],
    };
    componentDidMount(){
        fetch(entireDatabase
        ).then(resp => { return resp.json();}
        ).then(resp => { console.log(resp); this.display(resp); })

    }
    display = (data) => {
        let newtrips = data.map((e, i) => {
            console.log( e );
            return (<UpcomingPanel key={i} data={e}/>);
        });
        this.setState({
            trips: newtrips,
        });
    };
    render() {
        return (
        <div>
            <p className="title-top">
                Upcoming
            </p>
            <div id="upcoming-list">
                {this.state.trips}
            </div>
        </div>
        )
    }
}

export default Upcoming;
