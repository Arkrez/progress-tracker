import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../App.css'

import { Calendar, momentLocalizer } from 'react-big-calendar'

// When using `moment`
import moment from 'moment'
// and, for optional time zone support
import 'moment-timezone'

moment.tz.setDefault('America/Los_Angeles')
// end optional time zone support

const localizer = momentLocalizer(moment)
class Event {
    constructor(title, start, end, allDay, resource){
        this.title = title;
        this.start = start;
        this.end = end;
        this.allDay = allDay;
        this.resource = resource;
    }
    
}





export default class ShowProgress extends Component{
    constructor(props){
        super(props);
        this.state = {
            events: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
          .then(response => {
            this.setState({ events: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
    eventsList(){

        return this.state.events.map(event => {
            console.log(new Date(event.date))
            return new Event(event.username, new Date(event.date), new Date(event.date), false, "X")
        })
    }

    render(){
        
        return( 
            
            <div className="myCustomHeight">

                <Calendar
                localizer={localizer}
                events={this.eventsList()}
                startAccessor="start"
                endAccessor="end"
                />
            </div>
        )

    }
  
}
