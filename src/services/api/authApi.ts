import { axios } from '../../core/axios';
import { ILoginForm } from '../../pages/SignIn/components/LoginModal';

interface IResponseApi {
  status: string;
  data: any;
}

export const authApi = {
  async signIn(postData: ILoginForm): Promise<IResponseApi> {
    const { data } = await axios.post<IResponseApi>('auth/login', {
      username: postData.email,
      password: postData.password
    });
    return data;
  },
  async me(): Promise<IResponseApi> {
    const { data } = await axios.get<IResponseApi>('/users/me');
    return data;
  }
};
