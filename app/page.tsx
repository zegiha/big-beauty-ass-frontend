'use client'

import Typo from "@/components/atom/Typo";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import getToken from "@/shared/apis/getToken";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";

export default function Home() {
  const [token, setToken] = useState<RequestCookie | undefined>(undefined);
  const router = useRouter();
  useEffect(() => {
    const loginAction = async () => {
      const token = await getToken();
    }
    loginAction();
  }, []);
  return (
    <div>
      <Typo.Title>HOME</Typo.Title>
    </div>
  );
}
