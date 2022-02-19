import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import swal from "sweetalert";
import { actionLoginUser } from "../../redux/actions/actionLoginUser";
import { routes } from "../../constants/routes";
import { getAuthErrorState } from "../../redux/selectors/selectors";
import ItemForm from "../ItemForm/ItemForm";
import InputField from "../InputField/InputField";
import FormButton from "../FormButton/FormButton";
import FormContainer from "../../containers/formContainer";
import CheckboxField from "../CheckboxField/CheckboxField";
import { validatePassword } from "../../utils/helperFunctions";
import FormHeader from "../FormHeader/FormHeader";

import {
  getAuthLoadingState,
  getCurrentUserData,
} from "../../redux/selectors/selectors";

const DontHaveAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const CreateAccountRequest = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 21px;
  /* identical to box height */

  color: #cacaca;
`;

const CreateAccountLink = styled(CreateAccountRequest)`
  color: #47d4d4;

  &:hover {
    cursor: pointer;
  }
`;

const AlertText = styled.p`
  color: #b41919;
`;
const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(getAuthLoadingState);

  const location: Record<string, any> = useLocation();
  const currentUser = useSelector(getCurrentUserData);
  const loginError = useSelector(getAuthErrorState);

  let formSubmitElement = loginError ? (
    <FormButton>
      <AlertText>Ошибка!Повторите ввод</AlertText>
    </FormButton>
  ) : (
    <FormButton>login</FormButton>
  );

  if (loading) formSubmitElement = <LoadingSpinner />;

  if (localStorage.getItem("userToken") || currentUser) {
    if (location.state?.backpath)
      return <Redirect to={location.state.backpath} />;

    return <Redirect to={routes.profile} />;
  }

  const onFinish = (values: any) => {
    dispatch(actionLoginUser(values, form));
  };

  return (
    <FormContainer>
      <ItemForm form={form} onFinish={onFinish}>
        <FormHeader title="Sign in" />

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

        <CheckboxField
          name="rememberMe"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
          text="Keep me logged in"
        />

        <DontHaveAccount>
          <CreateAccountRequest>don't have an account?</CreateAccountRequest>
          <CreateAccountLink
            onClick={() => {
              history.push(routes.registration);
            }}
          >
            create account
          </CreateAccountLink>
        </DontHaveAccount>

        {formSubmitElement}
      </ItemForm>
    </FormContainer>
  );
};

export default LoginForm;
