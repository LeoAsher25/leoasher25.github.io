import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./AuthForm.scss";

const AuthForm = (props) => {
  useEffect(() => {});

  const { handleSetAuthFormOpen } = props;
  const { AuthDispatch } = useContext(AuthContext);

  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  //  handle when toggle form, (login or sign up)
  function handleChangeForm(e) {
    if (e.target.closest(".type-form-wrap")) {
      const authWrapContent = e.target.closest(".auth-wrap-content");
      const typeFormWraps = Array.from(
        authWrapContent.querySelectorAll(".type-form-wrap")
      );
      console.log(typeFormWraps);

      typeFormWraps.forEach((ele) => {
        ele.classList.add("active");
        ele.classList.remove("non-active");
      });

      e.target.closest(".type-form-wrap").classList.remove("active");
      e.target.closest(".type-form-wrap").classList.add("non-active");
    }
  }

  // handle toggle auth form overlay
  function handleOverlayClick() {
    handleSetAuthFormOpen(false);
    console.log("click");
  }

  //handle after login submit
  function handleLoginSubmit(e) {
    // e.preventDefault();
    AuthDispatch({
      type: "TOGGLE_AUTH",
    });
    handleSetAuthFormOpen(false);
  }



  return (
    <div className="auth-wrap ">
      <div className="auth-form-overlay " onClick={() => handleOverlayClick()}>
        {/* <i class="fas fa-times"></i> */}
        <i
          class="bi bi-x-lg close-auth-form"
          style={{ color: style.color }}
        ></i>
      </div>
      <div
        className="auth-wrap-content"
        style={{ backgroundColor: style.backgroundColor, color: style.color }}
      >
        {/* login-wrap */}
        <div className="login-wrap type-form-wrap">
          <h2 className="auth-wrap-heading">Login</h2>

          <form
            action=""
            className="form-group"
            onSubmit={(e) => handleLoginSubmit(e)}
          >
            <div className="form-wrap">
              <input
                required
                autoComplete="off"
                type="text"
                name="username"
                id="auth-login-username"
                placeholder="Username"
              />

              <input
                required
                autoComplete="off"
                type="password"
                name="password"
                id="auth-login-password"
                placeholder="Password"
              />

              <button type="submit">Login</button>
            </div>

            <div className="form-gr__footer">
              <div className="remember-me-wrap">
                <input
                  autoComplete="off"
                  type="checkbox"
                  name="rememberAuth"
                  id="remember-auth"
                  className="remember-auth"
                />
                <label htmlFor="remember-auth">Remember me</label>
              </div>

              <span className="forget-password">Quên mật khẩu</span>
            </div>
          </form>

          <div className="other-way">
            <span>or login with</span>
            <a href="/" className="login-by-fb">
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
            <a href="/" className="login-by-gg">
              <i className="fab fa-google"></i>
              <span>Google</span>
            </a>
          </div>

          <div className="turn-to-sign-up">
            <div onClick={(e) => handleChangeForm(e)}>
              <span>Create a Account</span>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </div>

        {/* sign up wrap */}
        <div className="signup-wrap type-form-wrap">
          <h2 className="auth-wrap-heading">Sign up</h2>

          <form action="" className="form-group">
            <div className="form-wrap">
              <input
                required
                autoComplete="off"
                type="text"
                name="username"
                id="auth-signup-username"
                placeholder="Username"
              />

              <input
                required
                autoComplete="off"
                type="text"
                name="email"
                id="auth-signup-email"
                placeholder="Email"
              />

              <input
                required
                autoComplete="off"
                type="password"
                name="password"
                id="auth-signup-password"
                placeholder="Password"
              />

              <button type="submit">Sign up</button>
            </div>
          </form>

          <div className="other-way">
            <span>or sign up with</span>
            <a href="/" className="login-by-fb">
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
            <a href="/" className="login-by-gg">
              <i className="fab fa-google"></i>
              <span>Google</span>
            </a>
          </div>

          <div className="turn-to-sign-up">
            <div onClick={(e) => handleChangeForm(e)}>
              <span>Already have an account!</span>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </div>
      </div>
      {/* end of auth form content  */}



    </div>
    // enf of auth form 
  );
};

export default AuthForm;
