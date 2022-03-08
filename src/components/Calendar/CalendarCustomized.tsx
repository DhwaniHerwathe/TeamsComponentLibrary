import * as React from "react";
import * as moment from "moment";
import events from './events';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

export interface ICalendarProps {
    imageUrl?: string;
}

const localizer = momentLocalizer(moment);

// const allViews = Object
//   .keys(Calendar.Views)
//   .map(k => Calendar.Views[k])

export const CalendarView : React.FC<ICalendarProps> = ({
    imageUrl,
    ...props
  }) => {
    return (
       <div style={{ height: 700 }}>
          <Calendar
            localizer={localizer}
            events={events}
            step={60}
            startAccessor="start"
            endAccessor="end"
            defaultDate={new Date(2015, 3, 1)}
          />
       </div> 
    );
}; 

