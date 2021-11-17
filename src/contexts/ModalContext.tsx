import { createContext, useState } from "react";
import Modal from "react-modal";

import { ContactModalContent } from "../components/Modals/Contact";
import { SignInModalContent } from "../components/Modals/SignIn";
import { SignUpModalContent } from "../components/Modals/SignUp";

type ModalTypes = "contact" | "signIn" | "signUp" | null;

type ModalContext = {
  openModal: (typeModal: ModalTypes) => void;
};

export const ModalContext = createContext({} as ModalContext);

Modal.setAppElement("#__next");

export const ModalContextProvider: React.FC = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [contentModal, setContentModal] = useState<JSX.Element | null>(null);

  function openModal(typeModal: ModalTypes) {
    renderCurrentModalType(typeModal);
    setIsOpen(true);
  }

  function renderCurrentModalType(typeModal: ModalTypes) {
    if (typeModal === "contact") {
      setContentModal(<ContactModalContent closeModal={closeModal} />);
    } else if (typeModal === "signIn") {
      setContentModal(<SignInModalContent closeModal={closeModal} />);
    } else if (typeModal === "signUp") {
      setContentModal(<SignUpModalContent closeModal={closeModal} />);
    } else {
      setContentModal(null);
    }
  }

  function closeModal() {
    setIsOpen(false);
    renderCurrentModalType(null);
  }

  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      maxHeight: "28rem",
      maxWidth: "30rem",
      margin: "auto",
    },
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Auth"
        style={customStyles}
      >
        {contentModal}
      </Modal>

      {children}
    </ModalContext.Provider>
  );
};
