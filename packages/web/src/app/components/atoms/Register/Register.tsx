import { Button, Form, Input } from 'antd';
import * as classNames from 'classnames/bind';
import { FormikErrors, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';
import styles from './Register.scss';

const cx = classNames.bind(styles);

interface IFormValues {
  password: string;
  userId: string;
}

interface IProps {
  submit: (values: IFormValues) => Promise<FormikErrors<IFormValues> | null>;
}

class Register extends React.Component<FormikProps<IFormValues> & IProps> {
  public render() {
    const { values, handleChange, handleBlur, handleSubmit, touched, errors } = this.props;
    return (
      <form className={cx('Register')} onSubmit={handleSubmit}>
        <Form.Item validateStatus={touched.userId && errors.userId ? 'error' : 'success'} help={touched.userId && errors.userId ? errors.userId : ''}>
          <Input name="userId" placeholder="아이디" onChange={handleChange} value={values.userId} onBlur={handleBlur} />
        </Form.Item>
        <Form.Item
          validateStatus={touched.password && errors.password ? 'error' : 'success'}
          help={touched.password && errors.password ? errors.password : ''}
        >
          <Input name="password" type="password" placeholder="비밀번호" onChange={handleChange} value={values.password} onBlur={handleBlur} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          회원가입
        </Button>
      </form>
    );
  }
}

const userIdNotLongEnough = 'userId must be at least 3 characters';
const passwordNotLongEnough = 'password must be at least 3 characters';
const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(3, passwordNotLongEnough)
    .max(255)
    .required(),
  userId: yup
    .string()
    .min(3, userIdNotLongEnough)
    .max(255)
    .required()
});

export default withFormik<IProps, IFormValues>({
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
  mapPropsToValues: () => ({
    password: '',
    userId: ''
  }),
  validationSchema
})(Register);
