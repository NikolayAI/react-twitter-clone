import React, { useEffect, useRef } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignUp } from '../../../store/ducks/user/actionCreators';
import { selectUserStatus } from '../../../store/ducks/user/selectors';
import { LoadingState } from '../../../store/types';

interface IRegisterModal {
  open: boolean;
  onClose: () => void;
}

export interface IRegisterForm {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  password2: string;
}

const RegisterFormSchema = yup.object().shape({
  fullName: yup.string().required('Введите свое имя'),
  userName: yup.string().required('Введите логин'),
  email: yup.string().email('Неверный email').required('Введите email'),
  password: yup.string().min(6, 'Пароль должен состоять минимум из 6 символов').required(),
  password2: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают')
});

export const RegisterModal: React.FC<IRegisterModal> = ({
  open,
  onClose,
}) => {
  const classes = useStylesSignIn();
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectUserStatus);
  const openNotificationRef = useRef<(text: string, type: Color) => void>(() => {
  });

  useEffect(() => {
    if (loadingStatus === LoadingState.SUCCESS) {
      openNotificationRef.current('Вы зарегистрированы', 'success');
      onClose();
    } else if (loadingStatus === LoadingState.ERROR) {
      openNotificationRef.current('Ошибка при регистрации', 'error');
    }
  }, [loadingStatus]);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IRegisterForm>({
    resolver: yupResolver(RegisterFormSchema)
  });

  const onSubmit = async (data: IRegisterForm) => {
    dispatch(fetchSignUp(data));
  };

  return (
    <ModalBlock
      onClose={onClose}
      visible={open}
      title="Регистрация"
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
              name="userName"
              render={({ field }) => <TextField
                {...field}
                name="userName"
                defaultValue=""
                className={classes.registerField}
                id="userName"
                label="Login"
                InputLabelProps={{ shrink: true }}
                variant="filled"
                type="text"
                helperText={errors.userName?.message}
                error={!!errors.userName}
                fullWidth
                autoFocus
              />}
            />
            <Controller
              control={control}
              defaultValue=""
              name="fullName"
              render={({ field }) => <TextField
                {...field}
                name="fullName"
                defaultValue=""
                className={classes.registerField}
                id="fullName"
                label="Full name"
                InputLabelProps={{ shrink: true }}
                variant="filled"
                type="text"
                helperText={errors.fullName?.message}
                error={!!errors.fullName}
                fullWidth
              />}
            />
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
            <Controller
              control={control}
              defaultValue=""
              name="password2"
              render={({ field }) => <TextField
                {...field}
                name="password2"
                defaultValue=""
                className={classes.loginSideField}
                id="password2"
                label="Пароль 2"
                InputLabelProps={{ shrink: true }}
                variant="filled"
                type="password"
                helperText={errors.password2?.message}
                error={!!errors.password2}
                fullWidth
              />}
            />
            <Button
              disabled={loadingStatus === LoadingState.LOADING}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Регистрация
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  );
};