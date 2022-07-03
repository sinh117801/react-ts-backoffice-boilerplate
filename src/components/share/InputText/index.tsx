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
  label?: string;
  formControlProps?: FormControlProps;
} & UseControllerProps<TFieldValues, TName>;

export default function InputText<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>(props: Props<TFieldValues, TName>) {
  const { id, formControlProps, control, name, label } = props;
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  return (
    <Form.Group className="mb-3" controlId={id}>
      {!!label && <Form.Label>{label}</Form.Label>}

      <Form.Control {...field} {...formControlProps} />

      {!!error && (
        <Form.Text className="text-danger">{error?.message}</Form.Text>
      )}
    </Form.Group>
  );
}
