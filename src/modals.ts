export interface messageModel {
  data?: any;
  callBackFn?: any;
}
export interface modalModel {
  header?: {
    showHeader?: boolean;
    title?: string;
    iconClass?: string;
    iconColor?: string;
    showBorder?: boolean;
  };
  footer?: {
    showFooter?: boolean;
    buttons?: {
      text?: string;
      class?: string;
      clickValue?: any;
    }[];
    desc?: {
      label?: string;
      value?: string;
    };
    showBorder?: boolean;
  };
  body?: any;
  modalType?: "small" | "medium" | "large" | "xlarge";
  hidePreviousModals?: boolean;
}
