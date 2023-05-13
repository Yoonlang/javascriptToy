
### 프로그래밍 언어 검색 서비스 구현

현재 구현해야하는 요구사항들

### Suggestion
1. 검색 언어 일치 시 background 칠하기 (대문자까지 일치)
2. handleLanguageList에서 selectedLang 관련 처리? (Suggestion에서 하는거 맞아?)
3. 화살표로 이동가능, hover 색깔 표시 (서로 다른 색깔)
4. API 제공 서버 마비 시 처리 (catch)

### SelectedLanguage

### SearchInput
1. 첫 렌더링 시 자동 focus
2. 검색어 캐시 통해서 fetch 적게 부르기

### localStorage
1. 화면을 닫았다 다시 켜도 선택된 언어 목록이 유지되도록 만듭니다.
2. 화면을 닫았다 다시 켜도 마지막 화면 상태가 모두 유지되도록 만듭니다. 입력중이던 검색어, 검색된 언어 목록 등