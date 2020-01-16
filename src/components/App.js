import React from 'react';
import '../scss/App.scss';
import Chat from './Chat';
import Message from './Message';


class App extends React.Component {
    render() {
        return (
            <main>
                <Chat></Chat> 
                <Message></Message>
            </main>
        );
    }
}

export default App;