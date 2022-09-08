import { toast } from "react-toastify";

const pos = { position: toast.POSITION.TOP_RIGHT };

export const successNotification = (msg: string) => {
  toast.success(msg, pos);
};

export const errorNotification = (msg : string) => {
  toast.error(msg, pos);
};

export const warnNotification = (msg : string) => {
  toast.warning(msg, pos);
};