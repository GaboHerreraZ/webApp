import { TextField } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface CustomTextFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  rules?: object;
  type?: string;
  onChange?: () => void;
}

const CustomTextField = <T extends FieldValues>({
  name,
  control,
  label,
  rules,
  type = "text",
  onChange,
}: CustomTextFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          variant="standard"
          {...field}
          label={label}
          type={type}
          fullWidth
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
          onChange={(e) => {
            field.onChange(e.target.value);
            if (onChange) onChange();
          }}
        />
      )}
    />
  );
};

export default CustomTextField;
