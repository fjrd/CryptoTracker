import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
import { Form } from "antd";

import { MailOutlined, LockOutlined } from "@ant-design/icons";
// import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';

// import { LoginDataTypes } from '../../../../types/loginDataTypes';
// import { actionLoginUser } from '../../../../redux/actions/actionLoginUser';
// import AuthError from '../../../../components/AuthError/AuthError';

import ItemForm from "../ItemForm/ItemForm";

import InputField from "../InputField/InputField";

import FormButton from "../FormButton/FormButton";

import FormContainer from "../../containers/formContainer";

// import RequestRegistration from '../RequestRegistration/RequestRegistration';

import CheckboxField from "../CheckboxField/CheckboxField";

import { validatePassword } from "../../utils/helperFunctions";
import FormHeader from "../FormHeader/FormHeader";
// import { getAuthErrorState, getAuthLoadingState } from '../../../../redux/selectors/selectors';

// styles for prefix(icon) inside input

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  // const dispatch = useDispatch();
  // const loading = useSelector(getAuthLoadingState);
  // const loginError = useSelector(getAuthErrorState);

  let formSubmitElement = <FormButton>Login</FormButton>;

  // if (loading) formSubmitElement = <LoadingSpinner />;

  // if (loginError) return <AuthError authTitle="Ошибка Входа!" />;

  /*const onFinish = (values: LoginDataTypes) => {
    dispatch(actionLoginUser(values, form));
  }; */

  return (
    <FormContainer>
      <ItemForm form={form}>
        <FormHeader title="Sign in" />

        <InputField
          label="E-mail"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            { required: true, message: "Please input your email!" },
          ]}
          placeholder="Type your e-mail"
          suffix={<MailOutlined />}
        />

        <InputField
          label="Password"
          name="password"
          rules={[
            {
              validator: validatePassword,
            },
            { required: true, message: "Please input your password!" },
          ]}
          placeholder="Type your password"
          suffix={<LockOutlined />}
          type="password"
        />

        <CheckboxField
          name="rememberMe"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
          text="Keep me logged in"
        />

        {formSubmitElement}
      </ItemForm>
    </FormContainer>
  );
};

export default LoginForm;
