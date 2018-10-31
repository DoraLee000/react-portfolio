import React from 'react';
import Calendar from 'react-calendar';
import 'rc-calendar/assets/index.css';

class SelectDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }
  onChange(date){
    var data = date;
    console.log(date)
  }

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default SelectDate;
