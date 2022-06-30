import { Form, FormControlProps } from "react-bootstrap";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  id: string;
  formControlProps?: FormControlProps;
} & UseControllerProps<T>;

export default function InputText<T extends FieldValues>(props: Props<T>) {
  const { id, formControlProps, control, name } = props;
  const {
    field,
    fieldState: { error },
  } = useController<T>({ control, name });

  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>Email address</Form.Label>
      <Form.Control id={id} {...field} {...formControlProps} />
      {!!error && (
        <Form.Text className="text-muted">{error?.message}</Form.Text>
      )}
    </Form.Group>
  );
}
