import React, { Component } from 'react';
import '../css/Popup.css'

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
    this.restaurant = props.restaurant;
    this.info = props.info;
    this.end = props.end
    this.value = props.value;

  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  render() {
    return (
      <div>
        <div className="popupDiv" onClick={this.togglePopup}>
          <h1>{this.restaurant}</h1>
          <p>Valid through <b>{this.end}</b></p>

        </div>
        {this.state.showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Deal for {this.restaurant}</h2>
              <p>{this.info}</p>
              <p>{this.value}$</p>
              <p>Deal ends on {this.end}</p>
              
              <button className="closeButton" onClick={this.togglePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Popup;






