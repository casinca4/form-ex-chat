import React from 'react';
import avatar from '../images/noodle.png'

class Chat extends React.Component {


    render() {
        return (
            <section className="chat">
                <div className="sender">
                    <img src={avatar} alt="avatar sender"></img>
                    <div className="output-sender">
                        <p className="text">text</p>
                    </div>
                    <div className="time">time</div>
                </div>

                <div className="recipient">
                    <div className="time">time</div>
                    <div className="output-recipient">
                        <p className="text">text</p>
                    </div>
                    <img src="src/images/Come-and-See-Poster-janus.png" alt="avatar recipient"></img>
                </div>
            </section>
        );
    }
}

export default Chat;

