import { io, Socket } from "socket.io-client";
import { logger } from "@skalfa/skalfa-app-core";
import { host, s, setS } from "./state";

export function connect(): Socket | null {
  if (host) {
    if (!s) {
      const socket = io(host, {
        autoConnect           :  true,
        transports            :  ["websocket"],
        reconnection          :  true,
        reconnectionAttempts  :  5,
        reconnectionDelay     :  2000,
        withCredentials       :  true,
      });

      setS(socket);

      socket.on("connect", () => {
        logger.socket("server connected:", socket?.id)
      });

      socket.on("disconnect", (reason) => {
        logger.socketError("server disconnected:", reason)
      });

      socket.on("connect_error", (err) => {
        logger.socketError("server connection error:", err.message)
      });
    } else if (s.disconnected) {
      s.connect();
    }
  }

  return s;
}
