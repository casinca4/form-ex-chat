import React from 'react';

class Chat extends React.Component {


    render() {
        return (
            <section className="chat">
                <div className="sender">
                    <img src="src/images/1edfbf9af969d9d0cfd09e863b795b1f.png" alt="avatar sender"></img>
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

