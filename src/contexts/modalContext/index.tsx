import { createContext, useEffect, useState } from "react";
import * as yup from "yup";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";

import { CloseBtn, Container, Form } from "./styles";
import { MdOutlineClose } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { useNotification } from "../../hooks/useNotification";

type ModalContext = {
  openModal: () => void;
};

export type Inputs = {
  username: string;
  password: string;
  remember: boolean;
};

let schema = yup.object().shape({
  username: yup.string().required().min(3),
  password: yup
    .string()
    .required()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  remember: yup.boolean().required(),
});

export const ModalContext = createContext({} as ModalContext);

Modal.setAppElement("#__next");

export const ModalContextProvider: React.FC = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const { emitterErrorNotification } = useNotification();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      height: "20rem",
      width: "30rem",
      margin: "auto",
    },
  };

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  useEffect(() => {
    const { username, password, remember } = errors;

    if (!!username?.message) {
      emitterErrorNotification(username.message);
    }

    if (!!password?.message) {
      emitterErrorNotification(password.message);
    }

    if (!!remember?.message) {
      emitterErrorNotification(remember!.message);
    }
  }, [errors]);

  return (
    <ModalContext.Provider value={{ openModal }}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Auth"
        style={customStyles}
      >
        <Container>
          <header>
            <h3>Sign In</h3>
            <CloseBtn onClick={closeModal}>
              <MdOutlineClose size={20} />
            </CloseBtn>
          </header>

          <p>Authentication to consume some interesting data about COVID-19.</p>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <InputField
                label="Username"
                labelId="username"
                {...register("username")}
                error={!!errors.username}
              />

              <InputField
                label="Password"
                labelId="password"
                type="password"
                {...register("password")}
                error={!!errors.password}
              />

              <InputField
                label="remember me"
                labelId="remember"
                type="checkbox"
                {...register("remember")}
                error={!!errors.remember}
              />
            </div>

            <Button type="submit" label="consume" />
          </Form>
        </Container>
      </Modal>

      {children}
    </ModalContext.Provider>
  );
};
