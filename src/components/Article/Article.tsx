import { FC } from 'react';
import articleStyle from './Article.module.css'

interface ArticleProps {
  title: string;
  context: string;
  isOpened: boolean;
}


const Article: FC<ArticleProps> = ({
  title,
  context,
  isOpened
}) => { 


  return (
    <>
      <h3>{title}</h3>
      <p className={`${articleStyle.context} ${!isOpened? articleStyle.unopened:''}`}>{context}</p>
    </>

  )
}


export default Article;