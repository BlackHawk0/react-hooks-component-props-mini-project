import React from "react";
import Article from "./Article"

function ArticleList(props) {
  return (
    <main>
      {props.posts.map(article => (
        <Article key={article.id} post={article} />
      ))}
    </main>
  );
}


export default ArticleList