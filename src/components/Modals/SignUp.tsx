import { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useModal } from "../../hooks/useModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNotification } from "../../hooks/useNotification";

import { Button } from "../Button";
import { InputField } from "../InputField";

import { Container, CloseBtn, Form, Legends, RememberWrapper } from "./styles";
import { MdOutlineClose } from "react-icons/md";

type SignUpModalContentProps = {
  closeModal: () => void;
};

export type InputsSignUp = {
  username: string;
  password: string;
  passwordConfirmation: string;
  remember: boolean;
};

const SCHEMA = yup.object().shape({
  username: yup.string().required().min(3),
  password: yup
    .string()
    .required()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  passwordConfirmation: yup
    .string()
    .required("Password confirmation is mandatory")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  remember: yup.boolean().required(),
});

export function SignUpModalContent({ closeModal }: SignUpModalContentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsSignUp>({ resolver: yupResolver(SCHEMA) });

  const { emitterErrorNotification, emitterWarnNotification } =
    useNotification();
  const { openModal } = useModal();

  function onSubmit(data: InputsSignUp) {
    console.log(data);
    emitterWarnNotification(
      "We are working on it! Soon this functionality will be available"
    );
  }

  useEffect(() => {
    const { username, password, passwordConfirmation, remember } = errors;

    if (!!username?.message) {
      emitterErrorNotification(username.message);
    }

    if (!!password?.message) {
      emitterErrorNotification(password.message);
    }

    if (!!passwordConfirmation?.message) {
      emitterErrorNotification(passwordConfirmation.message);
    }

    if (!!remember?.message) {
      emitterErrorNotification(remember!.message);
    }
  }, [errors]);

  return (
    <Container>
      <header>
        <h3>Sign Up</h3>
        <CloseBtn onClick={closeModal}>
          <MdOutlineClose size={20} />
        </CloseBtn>
      </header>

      <Legends>
        <p>
          By signing in you agree to our{" "}
          <strong>Terms of Service and Privacy Policy</strong>
        </p>

        <p>
          Already have an account?{" "}
          <a href="#login" onClick={() => openModal("signIn")}>
            Sign In
          </a>
        </p>
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

          <InputField
            label="Password confirmation"
            labelId="passwordConfirmation"
            type="password"
            {...register("passwordConfirmation")}
            error={!!errors.passwordConfirmation}
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

        <Button type="submit" label="sign up" />
      </Form>
    </Container>
  );
}
