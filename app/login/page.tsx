'use server'

import { redirect } from 'next/navigation';

export default async function Login({
  searchParams,
}: {searchParams: Promise<{code: string}>}) {
  const { code } = await searchParams;
  console.log(code);
  const res = await fetch(`http://localhost:8080/auth/login?code=${code}`);
  if(res.status === 200) {
    console.log('로그인 성공');
  } else {
    console.log('로그인 실패');
  }
  redirect('/');
}