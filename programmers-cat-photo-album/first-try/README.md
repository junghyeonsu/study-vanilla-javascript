# 실행방법

1. `npm install`
2. `npm run start`

# 요구사항

1. 폴더, 이미지 데이터 가져와서 띄우기

- fetch `get` method 사용
- https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev
- 데이터 가져오는 동안에는 로딩 표시 (선택적)

2. 폴더 클릭 구현하기

- 클릭 시 `Breadcrumb`에 변화주기
- 화면도 클릭 한 곳으로 데이터 불러오기
- fetch `get` method 사용
- https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/:nodeId

3. 이미지 클릭 구현하기

- 이미지 src에 아래 주소 넣기
- https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/${node.filePath}
- esc, 혹은 이미지 바깥 부분 클릭 시 나가기 처리

4. Breadcrumb 구현하기

- 폴더 클릭 시 해당 폴더가 뒤에 붙여지도록 처리
- 마크업은 아래와 같다.

```html
<nav class="Breadcrumb">
  <div>root</div>
  <div>노란고양이</div>
</nav>
```
