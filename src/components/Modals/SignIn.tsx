import { useEffect } from "react";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import { InputField } from "../InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNotification } from "../../hooks/useNotification";
import * as yup from "yup";

import { Container, CloseBtn, Form, Legends, RememberWrapper } from "./styles";
import { MdOutlineClose } from "react-icons/md";

type SignInModalContentProps = {
  closeModal: () => void;
};

export type InputsSignIn = {
  username: string;
  password: string;
  remember: boolean;
};

const SCHEMA = yup.object().shape({
  username: yup.string().required().min(3),
  password: yup.string().required().min(8),
  remember: yup.boolean().required(),
});

export function SignInModalContent({ closeModal }: SignInModalContentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsSignIn>({ resolver: yupResolver(SCHEMA) });

  const { emitterErrorNotification } = useNotification();

  function onSubmit(data: InputsSignIn) {
    console.log(data);
  }

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
    <Container>
      <header>
        <h3>Sign In</h3>
        <CloseBtn onClick={closeModal}>
          <MdOutlineClose size={20} />
        </CloseBtn>
      </header>

      <Legends>
        <p>Authentication to consume some interesting data about COVID-19.</p>
      </Legends>

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

          <RememberWrapper>
            <InputField
              label="remember me"
              labelId="remember"
              type="checkbox"
              {...register("remember")}
              error={!!errors.remember}
            />
          </RememberWrapper>
        </div>

        <Button type="submit" label="sign in" />
      </Form>
    </Container>
  );
}
