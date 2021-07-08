import { FieldProps } from "formik";
import React from "react";
import Select from "react-select";
import { OptionsType, ValueType } from "react-select";


interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends FieldProps {
  options: OptionsType<Option>;
  placeholder?: string;
  className?: string;
  isMulti?: boolean;
}


export const MySelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false
}: CustomSelectProps) => {
  const onChange = (option: ValueType<Option ,false>) => {
    form.setFieldValue(
      field.name,
      (option as Option).value
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);
    } else {
      return isMulti ? [] : ("" as any);
    }
  };

  return (
    <Select
      className={className}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
      checked={false}
    />
  );
};

export default MySelect;
