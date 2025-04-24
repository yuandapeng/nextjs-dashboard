import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // 这里的 matcher 是一个正则表达式，用于匹配需要进行身份验证的路径
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};