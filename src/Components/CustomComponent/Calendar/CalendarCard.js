import React, { useState } from 'react';
import Calendar from 'react-calendar';

//css
import 'react-calendar/dist/Calendar.css';
import './CalendarCard.css';

export default function CalendarCard() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div className="card mt-3">
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </div>
        </div>
    )
}
