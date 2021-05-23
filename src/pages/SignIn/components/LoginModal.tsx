import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ModalBlock } from '../../../components/ModalBlock/ModalBlock';
import { useStylesSignIn } from '../index';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notification } from '../../../components/Notification/Notification';
import { Color } from '@material-ui/lab/Alert';
import { authApi } from '../../../services/api/authApi';

interface ILoginModal {
  open: boolean;
  onClose: () => void;
}

export interface ILoginForm {
  email: string;
  password: string;
}

const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверный email').required('Введите email'),
  password: yup.string().min(6).required(),
});

export const LoginModal: React.FC<ILoginModal> = ({
  open,
  onClose,
}) => {
  const classes = useStylesSignIn();

  const { control, handleSubmit, formState: { errors } } = useForm<ILoginForm>({
    resolver: yupResolver(LoginFormSchema)
  });

  const onSubmit = async (
    openNotification: (text: string, type: Color) => void,
    data: ILoginForm,
  ) => {
    try {
      const userData = await authApi.signIn(data)
      openNotification('Вы авторизованы', 'success')
    } catch (error) {
      openNotification('Неверный логин или пароль', 'error')
    }
  };

  return (
    <Notification>
      {openNotification => (
        <ModalBlock
          onClose={onClose}
          visible={open}
          title="Войти в аккаунт"
        >
          <form onSubmit={handleSubmit(onSubmit.bind(null, openNotification))}>
            <FormControl
              className={classes.loginFormControl}
              component="fieldset" fullWidth
            >
              <FormGroup aria-label="position" row>
                <Controller
                  control={control}
                  defaultValue=""
                  name="email"
                  render={({ field }) => <TextField
                    {...field}
                    name="email"
                    defaultValue=""
                    className={classes.loginSideField}
                    id="email"
                    label="E-mail"
                    InputLabelProps={{ shrink: true }}
                    variant="filled"
                    type="email"
                    helperText={errors.email?.message}
                    error={!!errors.email}
                    fullWidth
                    autoFocus
                  />}
                />
                <Controller
                  control={control}
                  defaultValue=""
                  name="password"
                  render={({ field }) => <TextField
                    {...field}
                    name="password"
                    defaultValue=""
                    className={classes.loginSideField}
                    id="password"
                    label="Пароль"
                    InputLabelProps={{ shrink: true }}
                    variant="filled"
                    type="password"
                    helperText={errors.password?.message}
                    error={!!errors.password}
                    fullWidth
                  />}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </form>
        </ModalBlock>
      )}
    </Notification>
  );
};