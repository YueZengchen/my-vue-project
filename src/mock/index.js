import Mock from 'mockjs'
import { logIn } from './response/login'
export const loginData = Mock.mock(RegExp('/login.*'), 'post', logIn)
