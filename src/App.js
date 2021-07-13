import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Shop from "./components/Pages-Folder/Shop";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import CartPage from './components/Pages-Folder/CartPage/CartPage';
import "./App.scss";


// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import MainSection from "./components/Main-Section/MainSection";
// import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
// import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path ="/product/:id" component={SingleProduct}/>
        <Route path="/cart" component= {CartPage}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

//Github set-up
//npm install gh-pages --save -dev
//git init
//git status
//git add .
//git commit -m 'deploy my react app to github pages'
//git remote add origin https://github.com/Tshembani04/Online.git
//pull before using git pull
//git branch --set-upstream-to=origin/master master
//git pull --allow-unrelated-histories
//git add .gitignore
//git commit -m "Adding gitignore"
//git config --global user.name "Tshembani04"
// git config --global user.email "aurthurmhlongo.ta@gmail.com"
// npm run deploy
// git push -u origin master
//"homepage": "http://Tshembani04.github.io/OnlineStore",