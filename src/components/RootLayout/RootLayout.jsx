/** @jsxImportSource @emotion/react */
import * as S from "./style"
// children지정을 해줘야 component의 하위요소로 css가 적용 됨
function RootLayout({ children }) {
  return (
    <>
      <div css={S.backgroundLayout}></div>
      <div css={S.layout}>
        {children}
      </div>
    </>
  );
}

export default RootLayout;