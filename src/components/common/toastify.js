import { toast } from "react-toastify";
export const successToast = (message) => {
  const success = toast.success(message, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    theme: "colored",
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
  return success;
};

export const errorToast = (message) => {
  const error = toast.error(message, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    theme: "colored",
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
  return error;
};
