import { Socket } from "socket.io-client";

export const host = (globalThis as any).process?.env?.NEXT_PUBLIC_SOCKET_URL;
export let s: Socket | null = null;

export function setS(socket: Socket | null) {
  s = socket;
}
