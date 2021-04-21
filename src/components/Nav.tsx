import styled from '@emotion/styled'
import { FaEraser } from 'react-icons/fa'

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
      </ul>
    </NavContainer>
  )
}

export default Nav

const NavContainer = styled.nav`
  position: absolute;
  left: 0;
  top: 10%;

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
