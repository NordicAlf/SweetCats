import { create } from "zustand";
import {RequestActionEnum} from "../utils/enum/RequestEnum";
import PlayerStore from "./PlayerStore";
import {Vector} from "@dimforge/rapier3d-compat/math";
import ObjectStore from "./ObjectStore";
import RoomStore from "./RoomStore";
import {ResponseStatusEnum} from "~/utils/enum/ResponseEnum";
import FlashMessageStore from "~/store/FlashMessageStore";

interface CreateRoomInterface {
    password: string
}

interface ObjectInterface {
    id: string,
    roomId: string,
    type: string,
    position: number[]
}

export interface PlayerInterface {
    id: string
    position: Vector,
    rotation: Vector
}

export interface ResponseInterface {
    status: string,
    action: string
}

export interface ErrorResponseInterface extends ResponseInterface {
    data: string
}

export interface RoomResponseInterface extends ResponseInterface {
    data: {
        roomId: string,
        ownerPlayerId: string,
        roomCreatorUserId: string,
        cakes: ObjectInterface[],
        users: UserInterface[]
    }
}

export interface RoomRunInterface extends ResponseInterface
{
    data: {
        roomStatus: string,
    }
}

export interface RoomExitInterface extends ResponseInterface
{
    data: {
        roomStatus: string,
        users: UserInterface[],
        userExit: string,
    }
}

export interface CakeResponseInterface extends ResponseInterface {
    data: {
        cakes: ObjectInterface[]
    }
}

export interface PlayerPositionsResponse extends ResponseInterface {
    data: {
        users: {
            [id: string]: {
                position: number[]
            }
        }
    }
}

export interface UserInterface {
    id: string,
    position: number[]
}

export const useGameStore = create(() => {
    const websocketClient = new WebSocket(import.meta.env.DEV ? 'ws://localhost:8000' : 'ws://194.87.111.248:8000');

    websocketClient.addEventListener('error', () => {
        FlashMessageStore.getState().actions.addMessage('client error', 'Sorry. The server is currently unavailable');
        console.log('The server is currently unavailable');
    })

    websocketClient.addEventListener('open', () => {
        console.log('Connect to server!');
    })

    websocketClient.addEventListener('disconnect', () => {
        console.log('Disconnect server')
    })

    websocketClient.addEventListener('message', (message) => {
        const jsonResponse = JSON.parse(message.data);

        if (jsonResponse.action === RequestActionEnum.RoomCreate || jsonResponse.action === RequestActionEnum.RoomJoin) {
            const responseData: RoomResponseInterface = jsonResponse;

            RoomStore.getState().actions.setRoomId(responseData.data.roomId);
            RoomStore.getState().actions.setRoomCreatorUserId(responseData.data.roomCreatorUserId);
            ObjectStore.getState().actions.setPlates(responseData.data.cakes);
            ObjectStore.getState().actions.setCakes(responseData.data.cakes);
            PlayerStore.getState().actions.setUsers(responseData.data.users);
            PlayerStore.getState().actions.setOwnerPlayerId(responseData.data.ownerPlayerId);
        }

        if (jsonResponse.action === RequestActionEnum.RoomRun) {
            const responseData: RoomRunInterface = jsonResponse;

            RoomStore.getState().actions.setRoomStatus(responseData.data.roomStatus);
        }

        if (jsonResponse.action === RequestActionEnum.RoomExit) {
            const responseData: RoomExitInterface = jsonResponse;

            if (responseData.data.userExit === PlayerStore.getState().ownerPlayerId ||
              responseData.data.userExit === RoomStore.getState().roomCreatorUserId) {
                RoomStore.getState().actions.setRoomId(null);
                RoomStore.getState().actions.setRoomCreatorUserId(null);
            }

            PlayerStore.getState().actions.setUsers(responseData.data.users);
            RoomStore.getState().actions.setRoomStatus(responseData.data.roomStatus);
        }

        if (jsonResponse.action === RequestActionEnum.PlayerPositionUpdate) {
            const responseData: PlayerPositionsResponse = jsonResponse;

            PlayerStore.getState().actions.setUserPositions(responseData.data.users);
        }

        if (jsonResponse.action === RequestActionEnum.ObjectRemove) {
            const responseData: CakeResponseInterface = jsonResponse;

            ObjectStore.getState().actions.setCakes(responseData.data.cakes);
        }

        if (jsonResponse.status === ResponseStatusEnum.error) {
            const errorResponse: ErrorResponseInterface = jsonResponse

            FlashMessageStore.getState().actions.addMessage(errorResponse.action, errorResponse.data);
        }
    })

    const storeData = {
        response: {
            status: '',
            action: ''
        },
        actions: {
            roomCreate(props: CreateRoomInterface) {
                websocketClient.send(JSON.stringify({
                    action: RequestActionEnum.RoomCreate,
                    roomPassword: props.password,
                }));
            },
            roomJoin(props: CreateRoomInterface) {
                websocketClient.send(JSON.stringify({
                    action: RequestActionEnum.RoomJoin,
                    roomPassword: props.password,
                }));
            },
            roomRun() {
                websocketClient.send(JSON.stringify({
                    action: RequestActionEnum.RoomRun,
                    roomId: RoomStore.getState().roomId,
                }));
            },
            roomExit() {
                websocketClient.send(JSON.stringify({
                    action: RequestActionEnum.RoomExit,
                    roomId: RoomStore.getState().roomId,
                }));
            },
            playerUpdate(props: PlayerInterface) {
                websocketClient.send(JSON.stringify({
                    action: RequestActionEnum.PlayerPositionUpdate,
                    roomId: RoomStore.getState().roomId,
                    userId: props.id,
                    position: props.position,
                    rotation: props.rotation
                }));
            },
            objectRemove(objectId: string) {
                websocketClient.send(JSON.stringify({
                    action: RequestActionEnum.ObjectRemove,
                    roomId: RoomStore.getState().roomId,
                    objectId: objectId,
                }));
            }
        }
    }

    return storeData
});
