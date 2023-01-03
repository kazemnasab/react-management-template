import React from "react";
import Login from "../../Containers/Auth/Login.js";

export default function login() {
  return (
    <div class="authentication-wrapper authentication-cover">
      <div class="authentication-inner row m-0">
        <div class="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center">
          <div class="flex-row text-center mx-auto">
            <img
              src="../../assets/img/pages/login-light.png"
              alt="Auth Cover Bg color"
              width="520"
              class="img-fluid authentication-cover-img"
              data-app-light-img="pages/login-light.png"
              data-app-dark-img="pages/login-dark.png"
            />
            <div class="mx-auto">
              <h3>قدرتمندترین قالب مدیریت را کشف کنید</h3>
              <p>
                کاملا مناسب برای هر سطح از توسعه‌دهندگان که به شما کمک می‌کند{" "}
                <br />
                تا پروژه و برنامه بزرگ بعدی خود را شروع کنید.
              </p>
            </div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
}
