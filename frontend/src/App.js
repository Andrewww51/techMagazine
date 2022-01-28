import "./App.css";
import Wall from "./components/wall/Wall";
import Landing from "./components/landing/Landing";
import {useState, useEffect } from "react";
import {BrowserRouter, Route} from "react-router-dom";
// import {useHistory} from "react-router-dom";

function App() {
  const [news, setNews] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [last, setLast] = useState(new Date().getTime());
  const [first, setFirst] = useState(new Date().getTime());
  // const history = useHistory();

  function handleScroll() {
    if (
      window.innerHeight + window.scrollY <=
      document.getElementById("article_wrapper").offsetHeight
    ) {
      return;
    } else {
      setIsFetching(true);
    }
  }

  function lastAndFirst(array) {
    setLast(new Date(array[array.length - 1].publishedAt).getTime());
    setFirst(new Date(array[0].publishedAt).getTime());
  }

  async function getNews(first, last, per_page) {
    const response = await fetch(
      `http://localhost:3005/news?first=${first}&last=${last}&per_page=${per_page}`
    );
    const newsData = await response.json();
    setTimeout(() => {
      setNews(newsData.newer.concat(news.concat(newsData.older)));
      lastAndFirst(newsData.newer.concat(news.concat(newsData.older)));
      setIsFetching(false);
    }, 500);
  }

  useEffect(() => {
    getNews(first, last, 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    getNews(first, last, 4);
  }, [isFetching]);

  return (
    <>
      {/* {localStorage.getItem("new_visitor") !== "no"
        ? history.push("/landing")
        : history.push("/")} */}
      <BrowserRouter>
        <Route exact path="/">
          <div className="force_scroll">
            <Wall news={news} isFetching={isFetching} />
          </div>
        </Route>
        <Route>
          <Landing exact path="/landing" />
        </Route>
      </BrowserRouter>
      <button id="reset" onClick={() => localStorage.clear() }>Reset</button>
    </>
  );
}

export default App;
