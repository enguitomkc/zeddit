import Head from "next/head";
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import Article from "@/components/Article/Article";
import Comment from "@/components/Comment/Comment";
import articlePageStyle from './Sub.module.css'

const ArticlePage = () => {

  const router = useRouter();
  const articleData = router.query


  // converts type string | string [] to string
  const title = (typeof(articleData.title)==='object')?
          articleData.title.join('') : articleData.title;
  const context = (typeof(articleData.context)==='object')?
          articleData.context.join('') : articleData.context;
   


  return ( 
    <>
      <Head>
        <title>{articleData.title}</title>
      </Head>
      <Header>
        <main className={articlePageStyle.main}>
          <div className={articlePageStyle.articlePageContainer}>
            <Article 
              title={title}
              context={context}
              isOpened={true}
            />
          </div>
        </main>
      </Header>
    </>
   );
}
 
export default ArticlePage;
