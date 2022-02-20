import React from "react";
import { useDispatch, useSelector } from "react-redux";


import { Redirect, useLocation } from "react-router";


import { Form } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";

import { validatePassword } from "../../utils/helperFunctions";

// import AuthError from '../../../../components/AuthError/AuthError';

// import { RegistrationDataTypes } from '../../../../types/registrationDataTypes';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

// import { actionUpdateRegistrationForm } from '../../../../redux/actions/actionCreators';

import ItemForm from "../ItemForm/ItemForm";

import InputField from "../InputField/InputField";

import FormButton from "../FormButton/FormButton";

import FormContainer from "../../containers/formContainer";
import FormHeader from "../FormHeader/FormHeader";
import { actionRegisterUser } from "../../redux/actions/actionRegisterUser";

import {
  getAuthLoadingState,
  getCurrentUserData,
} from "../../redux/selectors/selectors";

import { routes } from "../../constants/routes";


const RegistrationForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loading = useSelector(getAuthLoadingState);


  const location: Record<string, any> = useLocation();
  const currentUser = useSelector(getCurrentUserData);

  // const registrationError = useSelector(getAuthErrorState);

  let formSubmitElement = <FormButton>Sign Up</FormButton>;

  if (loading) formSubmitElement = <LoadingSpinner />;

  // if (registrationError) return <AuthError authTitle="Ошибка Регистрации" />;


  if (localStorage.getItem("userToken") || currentUser) {
    if (location.state?.backpath)
      return <Redirect to={location.state.backpath} />;

    return <Redirect to={routes.profile} />;
  }

  const onFinish = (values: any) => {
    dispatch(actionRegisterUser(values, form));
  };

  return (
    <FormContainer>
      <ItemForm onFinish={onFinish} form={form}>
        <FormHeader title="Create account" />

        <InputField
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
          placeholder="Type your name"
          type="text"
          suffix={<UserOutlined />}
        />
        <InputField
          label="E-mail"
          name="login"
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
        {formSubmitElement}
      </ItemForm>
    </FormContainer>
  );
};

export default RegistrationForm;
