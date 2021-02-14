const MyMesage = ({messege}) => {
  if (messege?.attachments?.lenght > 0) {
    return (
      <img
        src={messege.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{float: 'right'}}
      />
  )
}
  return (
    <div className="message" style={{float:'right', marginRight:'18px', color:'white', backgroundColor:'#3B2A50'}}>
      MyMesage
    </div>
  )
}
export default MyMesage