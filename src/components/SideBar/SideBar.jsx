/** @jsxImportSource @emotion/react */

import { layout } from "./style"
import { FaCaretRight } from "react-icons/fa"


function SideBar() {
  return (
    <aside css={layout}>
      <button><FaCaretRight /></button>
    </aside>
  )
}

export default SideBar;