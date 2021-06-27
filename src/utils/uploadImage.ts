import { axios } from '../core/axios';

interface IUploadImage {
  height: number;
  size: number;
  url: string;
  width: number;
}

export const uploadImage = async (image: any): Promise<IUploadImage> => {
  const formData = new FormData();
  formData.append('image', image);

  const { data } = await axios.post('/upload', formData, {
    headers: { 'Content-type': 'multipart/form-data' },
  });

  return data;
};