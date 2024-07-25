import { Controller, useFormContext } from "react-hook-form";
import { FormControlLabel, FormControlLabelProps, FormHelperText, Switch } from "@mui/material";

interface FormSwitchProps extends Omit<FormControlLabelProps, 'control'> {
    name: string;
    helperText: string;
}

function FormSwitch({ helperText, name, ...other }: FormSwitchProps) {

    const { control } = useFormContext();

    return (
        <Controller
            render={ ({ field, fieldState: { error } }) => (
                <div>
                    <FormControlLabel control={ <Switch { ...field } checked={ field.value }/> } { ...other }  />

                    { (!!error || helperText) && (
                        <FormHelperText error={ !!error }>{ error ? error?.message : helperText }</FormHelperText>
                    ) }
                </div>
            ) }
            name={ name }
            control={ control }
        />
    );
}

export default FormSwitch;