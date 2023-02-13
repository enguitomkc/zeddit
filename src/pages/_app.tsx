import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useState } from 'react';
import getData from "@/components/utils/getData";



export default function App({ Component, pageProps }: AppProps) {
  

  const [ posts, setPosts ]  = useState([]);
  
  return (
    <Component 
      {...pageProps} 
      posts={posts} 
      setPosts={setPosts}
      />
  )
}
