import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import context
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import ProductContextProvider from "./contexts/ProductContext";
import CartContextProvider from "./contexts/CartContextProvider";

//import pages;
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage/index";
import ProductPage from "./pages/ProductPage/index";

// import partials
import TopNav from "./partials/TopNav/index";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./partials/Footer";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <div className="app">
          <AuthContextProvider>
            <CartContextProvider>
              <ProductContextProvider>
                <TopNav />
              </ProductContextProvider>

              <ScrollToTop />

              <Switch>
                <Route path="/products">
                  <ProductContextProvider>
                    <ProductPage />
                  </ProductContextProvider>
                </Route>

                <Route path="/cart">
                  <CartPage />
                </Route>

                <Route path="/product-detail-page">
                  <ProductDetailPage />
                </Route>

                <Route path="/">
                  <HomePage />
                </Route>

              </Switch>

              <Footer />
            </CartContextProvider>
          </AuthContextProvider>
        </div>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
