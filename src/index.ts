import { messageModel, modalModel } from "./modals";
import * as postRobot from "post-robot";
export default class KolayMicrofront {
  static getFreshToken(callBack: any) {
    const message: messageModel = {
      callBackFn: callBack,
    };
    return postRobot.send(window.parent, "FreshToken", message);
  }

  static showModal(data: modalModel, callBack: any): Promise<any> {
    const message: messageModel = {
      data: data,
      callBackFn: callBack,
    };
    return postRobot.send(window.parent, "ShowModal", message);
  }

  static showToastMessage(data: any) {
    const message: messageModel = {
      data: data,
    };
    return postRobot.send(window.parent, "ShowToast", message);
  }
  static exitApplication() {
    return postRobot.send(window.parent, "ExitApplication");
  }
  static subscribeNavigation(callBack: any) {
    const message: messageModel = {
      callBackFn: callBack,
    };
    return postRobot.send(window.parent, "SubscribeNavigation", message);
  }

  static toggleMenu() {
    return postRobot.send(window.parent, "ToggleMenu");
  }

  static changeWindowTitle(title: string) {
    const message: messageModel = {
      data: { title: title },
    };
    return postRobot.send(window.parent, "ChangeWindowTitle", message);
  }
}
