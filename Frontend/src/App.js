import Header from "./Components/Header";
import CountryNews from "./Components/CountryNews";
import News from "./Components/News";
import TopHeadlines from "./Components/TopHeadlines";

import { BrowserRouter , Route , Routes } from "react-router-dom";
function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<News />}/>
            <Route path="/top-headlines/:category" element={<TopHeadlines/>} />
            <Route path="/country/:iso" element={<CountryNews/>} /> 
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
