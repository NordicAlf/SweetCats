import { create } from "zustand";
import {RequestTypeEnum, RoomAction} from "../utils/enum/RequestEnum";
import PlateStore from "./PlateStore";
import {ResponseTypeEnum} from "../utils/enum/ResponseEnum";
import PlayerStore from "./PlayerStore";
import {Vector} from "@dimforge/rapier3d-compat/math";

interface GameStoreInterface {
    password: string
}

interface PlayerInterface {
    position: Vector
}

export interface ResponseInterface {
    status: string,
    type: string
}

export interface ResponsePositionsInterface extends ResponseInterface {
    data: {
        cakes: {
            id: string,
            roomId: string,
            type: string,
            position: number[]
        },
        users: UserInterface
    }
}

export interface UserInterface {
    id: string,
    position: number[]
}

export const useGameStore = create((set) => {
    const websocketClient = new WebSocket('ws://localhost:8000');

    // let response: ResponseInterface | null = null;

    websocketClient.addEventListener('open', () => {
        // websocketClient.send('i am connect to server!');
        console.log('Connect to server!');
    })

    websocketClient.addEventListener('disconnect', () => {
        console.log('Disconnect server')
    })

    websocketClient.addEventListener('message', (message) => {
        const jsonResponse = JSON.parse(message.data);

        // console.log(jsonResponse);

        // if (jsonResponse.type === ResponseTypeEnum.positions) {
        //     const responseData: ResponsePositionsInterface = jsonResponse;
        //
        //     PlateStore.getState().actions.setPositions(responseData.data.platePositions);
        // }

        if (jsonResponse.type === ResponseTypeEnum.dataChannel) {
            const responseData: ResponsePositionsInterface = jsonResponse;

            PlateStore.getState().actions.setPlates(responseData.data.cakes);
            PlayerStore.getState().actions.setPositions(responseData.data.users);
        }

        // const responseData: ResponseInterface = JSON.parse(message.data);

        // storeData.actions.setResponse(responseData);

        // if (responseData.type === ResponseTypeEnum.positions) {
        //     console.log('positions typeeee');
        //     console.log(responseData);
        //     PlateStore.getState().actions.setPositions(responseData.data)
        // }
    })

    // const setResponse = (data: ResponseInterface) => () => set({response: data})

    const storeData = {
        response: null,
        actions: {
            setResponse: (responseData: ResponseInterface) => set(() => ({response: responseData})),
            createGameServer(props: GameStoreInterface) {
                websocketClient.send(JSON.stringify({
                    requestType: RequestTypeEnum.room,
                    roomAction: RoomAction.create,
                    roomPassword: props.password,
                }));
            },
            joinToGameServer(props: GameStoreInterface) {
                websocketClient.send(JSON.stringify({
                    requestType: RequestTypeEnum.room,
                    roomAction: RoomAction.join,
                    roomPassword: props.password,
                }));
            },
            playerUpdate(props: PlayerInterface) {
                websocketClient.send(JSON.stringify({
                    requestType: RequestTypeEnum.player,
                    position: props.position,
                }));
            },
        }
    }

    return storeData
});
