import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ModalBlock } from '../../../components/ModalBlock/ModalBlock';
import { useStylesSignIn } from '../index';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

interface ILoginModal {
  open: boolean;
  onClose: () => void;
}

interface ILoginForm {
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

  const { control, handleSubmit } = useForm<ILoginForm>();
  const onSubmit = (data: ILoginForm) => console.log(data);

  return (
    <ModalBlock
      onClose={onClose}
      visible={open}
      title="Войти в аккаунт"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
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
  );
};