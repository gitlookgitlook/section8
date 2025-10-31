import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "H&M Home", "Sale", "지속가능성"];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const logout = () => {
    setAuthenticate(false);
    navigate("/");
  };

  const goToHome = () => {
    navigate("/");
  };

  const search = (event) => {
    console.log("onKeyDown");
    if (event.key === "Enter") {
      // console.log("We click this key", event.key);
      // 입력한 검색어를 읽어와서 url을 변경해준다.
      let keyword = event.target.value.trim();
      // console.log("keyword?", keyword);
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div className="nav-wrapper">
      <div className="login-bar">
        {authenticate ? (
          // 로그인된 상태 - 로그아웃 버튼
          <div className="login-button" onClick={logout}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그아웃</div>
          </div>
        ) : (
          // 로그아웃된 상태 - 로그인 버튼
          <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
          </div>
        )}
      </div>
      <div className="nav-section" onClick={goToHome} style={{ cursor: "pointer" }}>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
          alt="H&M 로고"
        />
      </div>
      <div className="menu-area">
        <div></div>
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="search-input" aria-label="검색">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="검색" onKeyDown={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
