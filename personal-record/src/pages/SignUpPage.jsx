import Header from "components/Header";

const SignUpPage = () => {
  return (
    <>
      <Header />
      <main id="page_content">
        <div className="content_title">
          <h1> Sign Up, GreatPeoPle!</h1>
        </div>
        <div id="form_container">
          <span className="form_elem">
            <input id="name" placeholder="이름" />
          </span>
          <span className="form_elem">
            <input id="email" placeholder="이메일" />
          </span>
          <span className="form_elem">
            <select id="role" name="role">
              <option value="">직군을 선택해주세요</option>
              <option value="backend">백엔드</option>
              <option value="frontend">프론트엔드</option>
              <option value="fullstack">풀스택</option>
            </select>
          </span>
          <span className="form_elem">
            <button type="submit">등록</button>
          </span>
        </div>
      </main>
    </>
  );
};

export default SignUpPage;
