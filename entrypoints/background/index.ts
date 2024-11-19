import { registerGestureService } from "../services/GestureService";

export default defineBackground(() => {
  registerGestureService()

  console.log('Hello background!', { id: browser.runtime.id });
});
