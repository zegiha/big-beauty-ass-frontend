'use server'

export async function getGithubOAuthUrl() {
  const res = await fetch('http://localhost:8080/auth/github/client_id');
  const data = await res.json();
  console.log(data)
  return data.githubRegisterUrl;
}
