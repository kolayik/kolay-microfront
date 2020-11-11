import { messageModel, modalModel } from "./modals";
import * as postRobot from "post-robot";
export default class KolayMicrofront {
  static ready(data: { hideHeader: boolean }) {
    const message: messageModel = {
      data,
    };
    return postRobot.send(window.parent, "Ready", message);
  }
  static getFreshToken(callBack: any) {
    const message: messageModel = {
      callBackFn: callBack,
    };
    return postRobot.send(window.parent, "FreshToken", message);
  }
  static getInitData(callBack: any) {
    const message: messageModel = {
      callBackFn: callBack,
    };
    return postRobot.send(window.parent, "GetInitData", message);
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
  static startLoading() {
    return postRobot.send(window.parent, "StartLoading");
  }
  static stopLoading() {
    return postRobot.send(window.parent, "StopLoading");
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
