import ar from "./messages/ar.json";
import en from "./messages/en.json";

type ArMessages = typeof ar;
type EnMessages = typeof en;

declare global {
  interface IntlMessages extends ArMessages {}
}
