export type ButtonTypes = {
  text: string;
};

export type CheckboxFieldTypes = {
  text?: string;
  name?: string;
  valuePropName?: string;
  wrapperCol?: Record<string, any>;
};

export type InputFieldTypes = {
  label?: string;
  name?: string;
  rules?: any;
  suffix?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  paddingLeft?: string;
  paddingRight?: string;
};

export type ItemFormTypes = {
  onFinish?: any;
  form?: any;
  initialValues?: any;
  fields?: any[];
};

export type ActionTypes = {
  type: string;
  payload?: any;
};
