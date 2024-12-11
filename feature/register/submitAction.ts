// export default async function submitAction(
//   formData: FormData,
//   code: string | null,
//   setStatus: React.Dispatch<React.SetStateAction<
//     'success' | 'load' | 'error' | null
//   >>
// ): Promise<any> {
//   setStatus("load");
//   const userName = formData.get('user_name');
//   const userEmail = formData.get('user_email');
//   const userPassword = formData.get('user_password');
//   console.log(userName, userEmail, userPassword, code);
//   if(userName && userEmail && userPassword && code) {
//     try {
//       return await fetch(`http://localhost:8080/auth/register?code=${code}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           user_name: userName,
//           user_email: userEmail,
//           user_password: userPassword,
//         }),
//       })
//        .then(res => res.json());
//     } catch (e) {
//       console.error(e);
//       setStatus("error");
//       return undefined;
//     }
//   } else {
//     console.error('값이 비었음')
//     setStatus('error');
//     return undefined;
//   }
// }
