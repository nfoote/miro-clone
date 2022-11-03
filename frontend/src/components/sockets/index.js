import socketIOClient from "socket.io-client";
import { socketEvents } from "./events";

const ENDPOINT = "http://localhost:4001"

export const socket = socketIOClient(ENDPOINT);

export const initSockets = ({ setValue }) => {
  socketEvents({ setValue });
};