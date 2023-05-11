import { useForm } from "react-hook-form";

const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: {
    name: string;
    email: string;
    nickname: string;
    role: string;
  }) => {
    console.log(data);
    alert("등록");
  };

  return (
    <>
      <main id="page_content">
        <div className="content_title">
          <h1> Sign Up, GreatPeoPle!</h1>
        </div>
        <form id="form_container" onSubmit={handleSubmit(onSubmit)}>
          <span className="form_elem">
            <input
              id="name"
              placeholder="이름"
              {...register("name", {
                minLength: 2,
                maxLength: 4,
                required: true,
                pattern: /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
              })}
            />
          </span>
          {errors.name && <p>2~4 글자의 한글만 입력이 가능합니다.</p>}
          <span className="form_elem">
            <input
              id="email"
              placeholder="이메일"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9]+@grepp.co$/,
              })}
            />
          </span>
          {errors.email && (
            <p>
              이메일 ID는 영문(대소문자 구분 없음)과 숫자만 입력이 가능하며,
              @grepp.co 형식의 이메일만 입력이 가능합니다.
            </p>
          )}
          <span className="form_elem">
            <input
              id="nickname"
              placeholder="닉네임"
              {...register("nickname", {
                minLength: 3,
                maxLength: 10,
                required: true,
                pattern: /^[a-zA-Z]/,
              })}
            />
          </span>
          {errors.nickname && (
            <p>대소문자 구분 없이 3~10 글자의 영문만 입력이 가능합니다.</p>
          )}
          <span className="form_elem">
            <select id="role" {...register("role")}>
              <option value="">직군을 선택해주세요</option>
              <option value="backend">백엔드</option>
              <option value="frontend">프론트엔드</option>
              <option value="fullstack">풀스택</option>
            </select>
          </span>
          <span className="form_elem">
            <button type="submit" disabled={Object.keys(errors).length > 0}>
              등록
            </button>
          </span>
        </form>
      </main>
    </>
  );
};

export default SignUpPage;
