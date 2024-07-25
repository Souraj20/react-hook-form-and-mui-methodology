import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type FormTextInputProps = TextFieldProps & {
    name: string;
}

function FormTextInput({ name, helperText, type, ...others }: FormTextInputProps) {
    const { control } = useFormContext();

    return (
        <Controller
            name={ name }
            control={ control }
            render={ ({ field, fieldState: { error } }) => (
                <TextField
                    { ...field }
                    fullWidth
                    type={ type }
                    onChange={ (e) => {
                        if (type === 'number') {
                            field.onChange(Number(e.target.value));
                        } else {
                            field.onChange(e.target.value);
                        }
                    } }
                    helperText={ error ? error?.message : helperText }
                    { ...others }
                />
            ) }
        />
    );
}

export default FormTextInput;