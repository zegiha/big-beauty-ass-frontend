'use client'

import { Row, Col, Typo } from '@/components/atom';
import styles from './register.module.css';
import {useEffect, useState} from 'react';
import { Input, Button } from '@/components/molecule';
import Form from 'next/form';
import Link from 'next/link';
import {useSearchParams} from "next/navigation";
import {getGithubOAuthUrl} from "@/shared/apis/getClientId";

export default function Register() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'success' | 'load' | 'error' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    const code = searchParams.get('code');
    if(!code) {
      const goToGitOAuth = async () => {
        setStatus('load')
        window.location.href = await getGithubOAuthUrl();
        setStatus(null)
      };
      goToGitOAuth()

    }
  }, []);

  return (
    <Col
      justifyContent='center'
      alignItems='center'
      width='fill'
      className={styles.container}
    >
      <Col width='fit-content' gap={24}>
        <Col gap={8}>
          <Typo.Title weight='semiBold' color='onGenericVariable'>환영해요!</Typo.Title>
          <Typo.Contents color='onGenericDim'>회원가입을 진행해주세요.</Typo.Contents>
        </Col>
        <Form action={''}>
          <Col width={340} gap={20}>
            <Col gap={8}>
              <label htmlFor='user_email'><Typo.Contents>이메일</Typo.Contents></label>
              <Input type='email' placeholder='이메일' value={email} setValue={setEmail} />
            </Col>
            <Col gap={8}>
              <label htmlFor='user_password'><Typo.Contents>비밀번호</Typo.Contents></label>
              <Input type='password' placeholder='비밀번호' value={password} setValue={setPassword} />
            </Col>
            <Col gap={8}>
              <label htmlFor='user_name'><Typo.Contents>닉네임</Typo.Contents></label>
              <Input type='text' placeholder='닉네임' value={nickname} setValue={setNickname} />
            </Col>
            <Button
              width='fill'
              type='submit'
              backgroundColor='primary'
              padding={12}
              onClick={() => {}}
            >
              <Typo.Body weight='semiBold' color='onPrimary'>{status === null ? '회원가입' : '처리중'}</Typo.Body>
            </Button>
          </Col>
        </Form>
        <Row justifyContent='center'>
          <Link href='/login'>
            <Typo.Contents color='onGenericDim'>이미 회원이신가요? 로그인</Typo.Contents>
          </Link>
        </Row>
      </Col>
    </Col>
  )
}


// 'use client'

// import Form from "next/form";
// import {useSearchParams} from "next/navigation";
// import {useState} from "react";
// import {useRouter} from "next/navigation";

// export default function Register() {
//   const [status, setStatus ] = useState<'success' | 'load' | 'error' | null>(null);
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   return (
//     <div>
//       <Form action={onSubmit}>
//         <p>
//           <label htmlFor="user_email">이메일</label>
//           <input type="email" id='user_email' name='user_email' required placeholder={'로그인 이메일을 입력해주세요'} defaultValue='a@a.com'/>
//         </p>
//         <p>
//           <label htmlFor="user_password">비밀번호</label>
//           <input type="password" id='user_password' name='user_password' required placeholder={'비밀번호를 입력해주세요'} defaultValue='a'/>
//         </p>
//         <p>
//           <label htmlFor="user_name">닉네임</label>
//           <input type="text" id='user_name' name='user_name' required placeholder={'닉네임을 입력해주세요'} defaultValue='a'/>
//         </p>
//         <button type={'submit'}>{
//           status === null ? '완료' : '처리중'
//         }</button>
//       </Form>
//     </div>
//   );
// }
