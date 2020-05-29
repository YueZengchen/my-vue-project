import { post } from '@/utils/request';
export const login = params => post('/login', params);
