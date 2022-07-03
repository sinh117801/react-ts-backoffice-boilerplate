import { Form, FormControlProps } from "react-bootstrap";
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

type Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = {
  id: string;
  formControlProps?: FormControlProps;
} & UseControllerProps<TFieldValues, TName>;

export default function InputText<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>(props: Props<TFieldValues, TName>) {
  const { id, formControlProps, control, name } = props;
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

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
