import React, { Component } from 'react';
import './Timer.css';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.targetDate = new Date('2023-09-30 23:59:59').getTime();

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTimer = () => {
    const now = new Date().getTime();
    const timeRemaining = this.targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });

    if (timeRemaining <= 0) {
      clearInterval(this.interval);
    }
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
        <div className="countdown-container h-full md:h-screen py-10">
      <div className="countdown-timer flex-col md:flex-row h-full">
        
        <div className="timer-item ">
          <span>{days}</span>
          <span>Days</span>
        </div>
        <div className="timer-item">
          <span>{hours}</span>
          <span>Hours</span>
        </div>
        <div className="timer-item">
          <span>{minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="timer-item">
          <span>{seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
      </div>
    );
  }
}

export default CountdownTimer;
