import { create } from "zustand";

const store = () => {
    const websocketClient = new WebSocket('ws://localhost:8000');

    websocketClient.addEventListener('open', () => {
        // websocketClient.send('i am connect to server!');
        console.log('Connect to server!');
    })

    websocketClient.addEventListener('disconnect', () => {
        console.log('Disconnect server')
    })

    websocketClient.addEventListener('message', (message) => {
        console.log(message.data)
    })

    return {
        actions: {
            createGameServer() {
                websocketClient.onopen = () => websocketClient.send(JSON.stringify({
                    roomAction: 'create',
                    roomPassword: '11111'
                }));
            },
            connectToGameServer() {
                websocketClient.onopen = () => websocketClient.send(JSON.stringify({
                    roomAction: 'join'
                }));
            }
        }
    }
}

export const useGameStore = create(store);
