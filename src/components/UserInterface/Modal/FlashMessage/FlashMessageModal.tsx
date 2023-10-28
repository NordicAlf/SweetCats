import React, {useEffect} from "react";
import useFlashMessageStore from "~/store/FlashMessageStore";
import './styles.css';

const FlashMessageModal: React.FC = () => {
  const messages = useFlashMessageStore((messageStore) => messageStore.messages);
  const clear = useFlashMessageStore((messageStore) => messageStore.actions.clear);

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        clear();
      }, 5000)
    }
    console.log(messages);
  }, [messages])

  return (
    <div className='modal-flash-parent'>
      <div className='modal-flash-message'>
        {messages && messages.map((item) => (
          <div className="modal-flash-child" key={item.id}>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FlashMessageModal;
