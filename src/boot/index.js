import QSwipeToClose from "quasar-app-extension-swipe-to-close/src/components/SwipeToClose";
import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
  app.use(QSwipeToClose);
});
