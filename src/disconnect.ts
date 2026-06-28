import { s, setS } from "./state";

export function disconnect(): void {
  if (s) {
    s.disconnect();
    setS(null);
  }
}
