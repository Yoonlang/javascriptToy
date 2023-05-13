### 프로그래머스 과제
### 사원 정보 테이블 구축


### 1차 구현 완료
+ tsconfig.json
  + resolveJsonModule - import json 처리
  + esModuleInterop - commonJS 모듈 가져오기
  + allowSyntheticDefaultImports - default import 처리
  + moduleResolution - node.js 프로젝트에서 적합함. node_modlues에서 모듈 찾기 with package.json의 main field 참조.

+ react-router-dom v6 createBrowserRouter 처리

+ typescript 처리

### 리팩토링 요소
+ react helmet async, react snap 처리
+ manifest.json, robots.txt
+ CRA eslint, babel 처리 보기


react helmet 도입 계획
1. 메인페이지에서 클릭 시 user page로 넘어간다.
2. 각 유저에 대한 메타 데이터를 helmet 통해서 넣어준다.
3. react snap으로 적절히 추가 html을 넣어준다.

meta 데이터 넣으면서 open graph, json LD에 대해 알게 됨.

JSON-LD : 구글 SEO

og : SNS에 도움되는 메타 정보 (사진, 설명)

둘 다 넣으면 충돌이 발생할 수도 있나?

구글링으로는 시원하게 답이 안나옴.

채찍이에 의하면 동일 속성에 대해 같은 값만 가지면 문제 없다!

[structured markup 검증 사이트](https://validator.schema.org/)

[현 버전 json+ld](https://www.w3.org/TR/2020/REC-json-ld11-20200716/)

json+ld는 제대로 하려면 시간 좀 들여야겠는데?

---

왜 헬멧 이미지는 안되냐