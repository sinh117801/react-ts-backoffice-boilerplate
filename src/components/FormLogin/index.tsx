import { Button, Form } from "react-bootstrap";
import { DefaultValues, Resolver, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import InputText from "components/share/InputText";

const schemaFormLogin = z.object({
  email: z.string().email(),
  password: z.string(),
});

type TFormLogin = z.infer<typeof schemaFormLogin>;

export default function FormLogin() {
  const defaultValues: DefaultValues<TFormLogin> = {
    email: "",
    password: "",
  };

  const resolver: Resolver<TFormLogin> = zodResolver(schemaFormLogin);

  const { control, handleSubmit } = useForm<TFormLogin>({
    defaultValues,
    resolver,
  });

  function handleSubmitForm(value: TFormLogin) {
    console.log({ value });
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
      <InputText id="email" control={control} name="email" label="Email" />
      <InputText
        id="password"
        control={control}
        name="password"
        label="Password"
        formControlProps={{ type: "password" }}
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
