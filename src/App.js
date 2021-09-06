import TopNav from "./partials/TopNav";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import ProductPage from "./pages/ProductPage";
import ProductContextProvider from "./contexts/ProductContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <div className="app">
          <AuthContextProvider>
            <CartContextProvider>
              <TopNav />

              <Switch>
                <Route path="/products">
                  <ProductContextProvider>
                    <ProductPage />
                  </ProductContextProvider>
                </Route>

                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </CartContextProvider>
          </AuthContextProvider>
        </div>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
