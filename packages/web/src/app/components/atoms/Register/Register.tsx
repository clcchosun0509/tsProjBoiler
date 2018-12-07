import { Button, Form, Input } from 'antd';
import * as classNames from 'classnames/bind';
import { FormikErrors, FormikProps, withFormik } from 'formik';
import * as React from 'react';
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
    const { values, handleChange, handleBlur, handleSubmit } = this.props;
    return (
      <form className={cx('Register')} onSubmit={handleSubmit}>
        <Form.Item>
          <Input name="userId" placeholder="아이디" onChange={handleChange} value={values.userId} onBlur={handleBlur} />
        </Form.Item>
        <Form.Item>
          <Input name="password" type="password" placeholder="비밀번호" onChange={handleChange} value={values.password} onBlur={handleBlur} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          회원가입
        </Button>
      </form>
    );
  }
}

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
  })
})(Register);
