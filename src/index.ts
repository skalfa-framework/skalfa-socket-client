import { registry } from "@skalfa/skalfa-app-core";
import { connect } from "./connect";
import { disconnect } from "./disconnect";
import { useSocket } from "./use-socket";

export { useSocket };

export const socket = {
  // ==============================>
  // ## Socket: connect to server
  // ==============================>
  connect,

  // ==============================>
  // ## Socket: disconnect from server
  // ==============================>
  disconnect,
};

registry.register("socket", socket);
