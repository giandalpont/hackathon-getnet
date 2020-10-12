import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface MenuProps {
  isMobile: boolean;
}


export const Container = styled.div`


`
export const Menu = styled.div`
  overflow: auto;
  position: absolute;
  width: 255px;
  height: 100%;
  left: 0px;
  top: 0px;

  background: #FE0000;
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 33px;
    margin-bottom: 50px;
  }

  hr {
    opacity: 0.5;
    color: rgba(255, 255, 255, 0.8);
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    li {
      color: #f5f6fa;
      /* padding-left: 60px; */
      cursor: pointer;
      display: flex;
      font-size: 16px;
      align-items: center;
      height: 55px;
      list-style-type: none;
      transition: 0.3 ease-in-out;

      img {
        width: 16px;
        margin-right: 24px;
        margin-left: 23px;
      }

      &.active {
        font-weight: 800;
        background: ${shade(0.2, '#FE0000')};
        img {
          width: 18px;
        }
      }

      &:hover {
        background: ${shade(0.2, '#FE0000')};
      }
    }
  }

  @media (max-width:768px){
    left: -300px;
  }
`
export const Menumobile = styled.span<MenuProps>`
      display: none;
  @media (max-width:768px){
    display: flex;
    position: absolute;
    background-color:red;

    ${props => props.isMobile && css`left: 0px;`}
  }

`
export const Content = styled.div`

`
