import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";

type NotificationsContextType = {
  emitterErrorNotification: (errorMsg: string) => void;
};

export const NotificationsContext = createContext(
  {} as NotificationsContextType
);

export const NotificationsContextProvider: React.FC = ({ children }) => {
  const emitterErrorNotification = (errorMsg: string) => {
    toast.error(errorMsg);
  };

  return (
    <NotificationsContext.Provider value={{ emitterErrorNotification }}>
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={5000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </NotificationsContext.Provider>
  );
};
