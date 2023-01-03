import React from "react";

export default function Login() {
  return (
    <div className="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-5 p-4">
      <div className="w-px-400 mx-auto">
        <div className="app-brand mb-4">
          <div className="app-brand-link gap-2 mb-2">
            <span className="app-brand-logo demo">
              
            </span>
            <span className="app-brand-text demo h3 mb-0 fw-bold">فرست</span>
          </div>
        </div>
        <h4 className="mb-2">به فرست خوش آمدید!</h4>
        <p className="mb-4">لطفا وارد حساب خود شوید</p>

        <form
          id="formAuthentication"
          className="mb-3"
          action="index.html"
          method="POST"
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              شماره تماس یا نام کاربری
            </label>
            <input
              type="text"
              className="form-control text-start"
              dir="ltr"
              id="email"
              name="email-username"
              placeholder="ایمیل یا نام کاربری خود را وارد کنید"
              autoFocus
            />
          </div>
          <div className="mb-3 form-password-toggle">
            <div className="d-flex justify-content-between">
              <label className="form-label" htmlFor="password">
                رمز عبور
              </label>
              <a href="#">
                <small>رمز عبور را فراموش کردید؟</small>
              </a>
            </div>
            <div className="input-group input-group-merge">
              <input
                type="password"
                id="password"
                className="form-control text-start"
                dir="ltr"
                name="password"
                placeholder="············"
                aria-describedby="password"
              />
              <span className="input-group-text cursor-pointer">
                <i className="bx bx-hide"></i>
              </span>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember-me"
              />
              <label className="form-check-label" htmlFor="remember-me">
                {" "}
                به خاطر سپاری{" "}
              </label>
            </div>
          </div>
          <button className="btn btn-primary d-grid w-100">ورود</button>
        </form>
      </div>
    </div>
  );
}
