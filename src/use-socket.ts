"use client"

import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { socket } from "./index";

export const useSocket = (): { socket: Socket | null } => {
  const [socketState, setSocketState] = useState<Socket | null>(null);

  useEffect(() => {
    const soc = socket.connect();
    setSocketState(soc);

    return () => {
      soc?.off();
    };
  }, []);

  return {socket: socketState};
};
