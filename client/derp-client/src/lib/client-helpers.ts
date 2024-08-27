import toast from "react-hot-toast"


export const successToastMessage = (message: string) => {
    toast.success(message);
  };
  
  export const failedToastMessage = (message: string) => {
    toast.error(message);
  };
  
  