// import { get, post, del, put } from '@/api/login';
import { get } from '@/utils/request';
export const login = params => get('登录', params);
