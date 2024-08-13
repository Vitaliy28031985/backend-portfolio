import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: 'dr6ijaqm4',
    api_key: '698768694359528',
    api_secret: 'yPhD2_MpXovaERD3C3_T-IQLeCU',
  });

export default cloudinary;