import { useEffect } from "react";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import { TextArea } from "../TextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNotification } from "../../hooks/useNotification";
import * as yup from "yup";

import { Container, CloseBtn, Form, Legends, TextAreaWrapper } from "./styles";
import { MdOutlineClose } from "react-icons/md";

type ContactModalContentProps = {
  closeModal: () => void;
};

export type InputContact = {
  body: string;
};

const SCHEMA = yup.object().shape({
  body: yup.string().required().min(3),
});

export function ContactModalContent({ closeModal }: ContactModalContentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputContact>({ resolver: yupResolver(SCHEMA) });

  const { emitterErrorNotification } = useNotification();

  function onSubmit(data: InputContact) {
    console.log(data);
  }

  useEffect(() => {
    const { body } = errors;

    if (!!body?.message) {
      emitterErrorNotification(body.message);
    }
  }, [errors]);

  return (
    <Container>
      <header>
        <h3>Messenger</h3>
        <CloseBtn onClick={closeModal}>
          <MdOutlineClose size={20} />
        </CloseBtn>
      </header>

      <Legends>
        <p>
          By sending the message, you agree to our
          <strong> Terms of Service and Privacy Policy</strong>
        </p>
      </Legends>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextAreaWrapper>
          <TextArea
            label="Message"
            placeholder="Type your message here"
            labelId="body"
            {...register("body")}
            error={!!errors.body}
          />
        </TextAreaWrapper>

        <Button type="submit" label="submit" />
      </Form>
    </Container>
  );
}
