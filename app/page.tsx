'use client'

import { getGithubOAuthUrl } from '@/api/getClientId'

export default function Home() {
  const handleClick = async () => {
    window.location.href = await getGithubOAuthUrl();
  }

  return (
    <div>
      <button onClick={handleClick}>code 받고, 로그인까지</button>
    </div>
  );
}
