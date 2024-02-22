/** @jsxImportSource @emotion/react */

import { useMemo, useState } from "react";
import * as S from "./style"
import { FaCaretRight, FaCaretLeft } from "react-icons/fa"




function SideBar() {
  const [isShow, setShow] = useState(false);
  const menus = useMemo(() =>
    [
      {
        id: 1,
        path: "/mypage",
        name: "마이페이지"
      },
      {
        id: 2,
        path: "/board",
        name: "게시글"
      },
      {
        id: 3,
        path: "/notice",
        name: "공지사항"
      },
    ], []);
  return (
    <aside css={S.layout(isShow)}>
      <button css={S.toggleButton} onClick={() => { setShow(!isShow) }}>
        {isShow ? <FaCaretLeft /> : <FaCaretRight />}
      </button>
      <ul>

      </ul>
    </aside>
  )
}

export default SideBar;