import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <section className="message">
          <form className="input-message" onSubmit={this.handleSubmit}>
            <label>
              <input class="text-input" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input class="send-button" type="submit" value="SEND" />
          </form>
          <div className="participants">
            <div id="you" className="btn">
            <p>YOU</p>
            </div>
            <div id="friend" className="btn">
            <p >YOUR IMAGINARY FRIEND</p>
            </div>
          </div>
      </section>
    );
  }
}

export default Message;