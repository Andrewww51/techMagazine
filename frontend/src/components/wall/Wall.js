import "./Wall.css";
import Icon from "../icon/Icon"

export default function Wall({ news, isFetching }) {
  
  return (
    <>
      <div className="wholePage">
        <div className="article_wrapper" id="article_wrapper">
          {news &&
            news.map((article, i) => (
              <div className="article_card" key={i}>
                <a href={article.url}>
                <img src={article.urlToImage} alt="" />
                <div className="text_content">
                  <h3>{article.title}</h3>
                  <p className="date">
                    {article.publishedAt.slice(0, 10) +
                      " " +
                      article.publishedAt.slice(11, -4)}
                  </p>
                  <p>{article.description}</p>
                </div>
                </a>
              </div>
            ))}
        </div>
        {isFetching && <Icon/>}
      </div>
    </>
  );
}