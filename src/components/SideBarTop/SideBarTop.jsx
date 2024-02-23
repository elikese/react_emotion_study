/** @jsxImportSource @emotion/react */ // <---css={} 하려고 import됨.
import { useMemo, useState } from "react";
import * as S from "./style"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SideBar() {

  const menus = useMemo(() =>
    [
      {
        id: 1,
        path: "/mypage",
        name: "🤩MyPage"
      },
      {
        id: 2,
        path: "/board",
        name: "😁Board"
      },
      {
        id: 3,
        path: "/notice",
        name: "🙄Notice"
      }
    ], []);

  const [isShow, setShow] = useState(false)

  return (
    <aside css={S.layout(isShow)}>
      <button css={S.topBtn} onClick={() => { setShow(!isShow) }}>
        {isShow ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {
        menus.map(menu => {
          return (
            <Link css={S.menuItem} to={menu.path} key={menu.id} onClick={() => setShow(false)}>
              <span css={S.menuName(isShow)}>{menu.name}</span>
            </Link>
          );
        })
      }
    </aside>
  )
}