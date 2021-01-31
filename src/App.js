import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="5e886549-1d61-489e-b908-0def90988b5c"
        userName="javascript"
        userSecret="b005ab7b-228e-4249-99f7-40bba8883ef2"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};
export default App;
