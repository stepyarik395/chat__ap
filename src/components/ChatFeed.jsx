import MessegeForm from "../components/MessegeForm" 
import MyMessage from "../components/MyMessage" 
import TheirMessage from "../components/TheirMessage" 


const ChatFeed = ( props ) => {
  const { chats, activeChat, userName, messages } = props
  const chat = chats && chats[activeChat]
  const renderMessages = () => {
    const keys = Object.keys(messages)
    return keys.map((key, index) => {
      const messege = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1]
      const isMyMessege = userName === messages.sender.username;
      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {
              isMyMessege
                ? <MyMessage />
                :<TheirMessage />
            }
          </div>
          <div className="red-receipts" stye={{ marginRight: isMyMessege ? '18px' : '0px', marginLeft: isMyMessege ? '0px' : '68px' }}>
          red-receipts
          </div>
        </div>
      )
    })
  }

  if (!chat) return 'Loading ...'
  return ( 
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
        <MessegeForm {...props} chatId={activeChat} />
      </div>
    </div>
  )
}
export default ChatFeed;