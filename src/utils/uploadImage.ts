import { axios } from '../core/axios';

export const uploadImage = async (image: any) => {
  const formData = new FormData();
  formData.append('image', image);

  const { data } = await axios.post('/upload', formData, {
    headers: { 'Content-type': 'multipart/form-data' },
  });

  return data;
};