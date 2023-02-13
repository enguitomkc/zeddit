import { useRouter } from "next/router";
import Head from "next/head";
import subStyle from "./Sub.module.css";

import Link from "next/link";
import Header from "@/components/Header/Header";
import Article from "../../../components/Article/Article";
import { useEffect, useState } from "react";
import getData from "@/components/utils/getData";
import { getSubData } from "@/components/utils/getSubData";

const Sub = ({
  posts,
  setPosts
}) => {


  const router = useRouter();
  const sub = router.asPath;

  console.log(sub)

  useEffect(()=>{
    (async function() {
      const res = await fetch(`https://www.reddit.com${sub}.json?limit=5`);
      const data = await res.json();
      console.log(data)
      setPosts(getSubData(data));
    })();
  },[])

  console.log(posts)

  const handleUpVote = (event) => {
    event.stopPropagation();
    event.nativeEvent.preventDefault();
    setPosts((prev)=>prev+1)
  }

  const handleDownVote = (event) => {
    event.stopPropagation();
    event.nativeEvent.preventDefault();
    setPosts((prev)=>prev-1)
  }

  return ( 
    <>
      <Head>
        <title>{sub.slice(1)}</title>
      </Head>
      <Header>
        <h1 className={subStyle.title}>{sub.slice(1)}</h1>
        <main className={subStyle.main}>
          {posts.map((post: any)=>{
            return (
              <>
                <Link 
                style={{ textDecoration: 'none' , color:'#222222'}} 
                href={{
                  pathname: sub+"/"+post.id,
                  query: {
                    title: post.title,
                    context: post.body
                  }
                }}
                >
                  <div className={subStyle.postContainer}>
                    <div className={subStyle.voteContainer}>
                      <button onClick={handleUpVote}>up</button>
                      {post.ups-post.downs}
                      <button onClick={handleDownVote}>down</button>
                    </div>
                    <div className={subStyle.articleContainer}>
                      <Article
                      title={post.title}
                      context={post.body}
                      isOpened={false}
                      />
                      <button className={subStyle.numComments}>{`Comments ${post.numComments}`}</button>
                    </div>
                  </div>
                </Link>
              </>
            )
          })}
        </main>
      </Header>
    </>

  );
}
 
export default Sub;