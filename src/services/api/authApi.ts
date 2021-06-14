import { axios } from '../../core/axios';
import { ILoginForm } from '../../pages/SignIn/components/LoginModal';
import { IRegisterForm } from '../../pages/SignIn/components/RegisterModal';

interface IResponseApi {
  status: string;
  data: any;
}

export const authApi = {
  async signIn(postData: ILoginForm): Promise<IResponseApi> {
    const { data } = await axios.post<IResponseApi>('/auth/login', {
      password: postData.password,
      username: postData.email
    });
    return data;
  },

  async signUp(postData: IRegisterForm): Promise<IResponseApi> {
    const { data } = await axios.post<IResponseApi>('/auth/register', {
      email: postData.email,
      userName: postData.userName,
      fullName: postData.fullName,
      password: postData.password,
      password2: postData.password2,
    });
    return data;
  },

  async me(): Promise<IResponseApi> {
    const { data } = await axios.get<IResponseApi>('/users/me');
    return data;
  }
};
