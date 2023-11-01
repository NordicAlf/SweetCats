import React, {useEffect} from "react";
import useFlashMessageStore from "~/store/FlashMessageStore";
import './styles.css';
import useRoomStore from "~/store/RoomStore";
import {RoomStatusEnum} from "~/utils/enum/RoomStatusEnum";
import usePlayerStore from "~/store/PlayerStore";

const GameInterface: React.FC = () => {
  const messages = useFlashMessageStore((messageStore) => messageStore.messages);
  const clear = useFlashMessageStore((messageStore) => messageStore.actions.clear);
  const roomStatus = useRoomStore((roomStore) => roomStore.roomStatus);
  const cakeCounter = usePlayerStore((playerStore) => playerStore.cakeCount);

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        clear();
      }, 5000)
    }
  }, [messages])

  return (
    <div className='game-interface-parent'>
      <div className='game-interface-message'>
        {roomStatus === RoomStatusEnum.Run &&
          <div className="game-interface-child">
            <div>{cakeCounter} cakes</div>
          </div>
        }
      </div>

      <div className='game-interface-message'>
        {messages && messages.map((item) => (
          <div className="game-interface-child" key={item.id}>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameInterface;
