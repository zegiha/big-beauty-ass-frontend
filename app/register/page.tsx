'use client'

import Form from "next/form";
import {useSearchParams} from "next/navigation";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Register() {
  const [status, setStatus ] = useState<'success' | 'load' | 'error' | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const onSubmit = async (formData: FormData): Promise<void> => {
    setStatus("load");
    const userName = formData.get('user_name');
    const userEmail = formData.get('user_email');
    const userPassword = formData.get('user_password');
    const code = searchParams.get('code');
    console.log(userName, userEmail, userPassword, code);
    if(userName && userEmail && userPassword && code) {
      try {
        await fetch(`http://localhost:8080/auth/register?code=${code}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_name: userName,
            user_email: userEmail,
            user_password: userPassword,
          }),
        })
        router.push('/success')
      } catch (e) {
        console.error(e);
        setStatus("error");
      }
    } else {
    }
  }
  return (
    <div>
      <Form action={onSubmit}>
        <p>
          <label htmlFor="user_email">이메일</label>
          <input type="email" id='user_email' name='user_email' required placeholder={'로그인 이메일을 입력해주세요'} defaultValue='a@a.com'/>
        </p>
        <p>
          <label htmlFor="user_password">비밀번호</label>
          <input type="password" id='user_password' name='user_password' required placeholder={'비밀번호를 입력해주세요'} defaultValue='a'/>
        </p>
        <p>
          <label htmlFor="user_name">닉네임</label>
          <input type="text" id='user_name' name='user_name' required placeholder={'닉네임을 입력해주세요'} defaultValue='a'/>
        </p>
        <button type={'submit'}>{
          status === null ? '완료' : '처리중'
        }</button>
      </Form>
    </div>
  );
}