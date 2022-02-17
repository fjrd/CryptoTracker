import React from "react";

// import { connect, useSelector } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';

// import { FormInstance } from "antd";

import { Form } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";

// import { actionRegisterUser } from '../../../../redux/actions/actionRegisterUser';
import { validatePassword } from "../../utils/helperFunctions";

// import AuthError from '../../../../components/AuthError/AuthError';

// import { RegistrationDataTypes } from '../../../../types/registrationDataTypes';
// import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';

// import { actionUpdateRegistrationForm } from '../../../../redux/actions/actionCreators';

import ItemForm from "../ItemForm/ItemForm";

import InputField from "../InputField/InputField";

import FormButton from "../FormButton/FormButton";

import FormContainer from "../../containers/formContainer";
import FormHeader from "../FormHeader/FormHeader";
// import { getAuthErrorState, getAuthLoadingState } from '../../../../redux/selectors/selectors';

// import Close from '../../../../components/Close/Close';
// import { ActionTypeTypes } from '../../../../types/actionTypeTypes';

const RegistrationForm: React.FC<{
  updateRegistrationForm?: () => void;
}> = ({ updateRegistrationForm }) => {
  const [form] = Form.useForm();
  // const loading = useSelector(getAuthLoadingState);
  // const registrationError = useSelector(getAuthErrorState);

  let formSubmitElement = <FormButton>Sign Up</FormButton>;

  // if (loading) formSubmitElement = <LoadingSpinner />;

  // if (registrationError) return <AuthError authTitle="Ошибка Регистрации" />;

  /*const onFinish = (values: RegistrationDataTypes) => {
    registerUser(values, form);
  };*/

  return (
    <FormContainer>
      <ItemForm form={form}>
        <FormHeader title="Create account" />

        <InputField
          label="Name"
          name="fullName"
          rules={[{ required: true, message: "Please input your name!" }]}
          placeholder="Type your name"
          type="text"
          suffix={<UserOutlined />}
        />
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
        {formSubmitElement}
      </ItemForm>
    </FormContainer>
  );
};

/*export const mapDispatchToProps = (dispatch: Dispatch<ActionTypeTypes>) => {
  const dispatchUpdateRegistrationForm = bindActionCreators(
    actionUpdateRegistrationForm,
    dispatch
  );
  const dispatchRegisterUser = bindActionCreators(actionRegisterUser, dispatch);

  return {
    updateRegistrationForm: dispatchUpdateRegistrationForm,
    registerUser: (data: RegistrationDataTypes, form: FormInstance) => {
      dispatchRegisterUser(data, form);
    },
  };
};*/

export default RegistrationForm;
