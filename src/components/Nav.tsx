/* eslint-disable jsx-a11y/accessible-emoji */
import styled from '@emotion/styled'
import { FaEraser } from 'react-icons/fa'
import { IoRefresh } from 'react-icons/io5'

function Nav() {
  return (
    <NavContainer>
      <ul>
        <li>⚫️</li>
        <li>🔵</li>
        <li>🟢</li>
        <li>🟣</li>
        <li>🔴</li>
        <li>🟤</li>
        <li>🟠</li>
        <li>🟡</li>
        <li>
          <FaEraser />
        </li>
        <li>
          <Io5Refresh />
        </li>
      </ul>
    </NavContainer>
  )
}

export default Nav

const NavContainer = styled.nav`
  position: absolute;
  left: 0;
  top: 10%;
  z-index: 100;

  ul {
    padding-left: 15px;
    border-radius: 0 5px 5px 0;

    li {
      margin-top: 15px;
      font-size: 20px;
      cursor: pointer;
    }
  }
`
const Io5Refresh = styled(IoRefresh)`
  font-size: 23px;
`
