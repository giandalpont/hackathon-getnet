import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface MenuProps {
  isMobile: boolean;
}

export const Container = styled.div`
  overflow: auto;
  max-width: 255px;
  height: 100vh;
  width: 100%;
  background: #FE0000;

  a {
    text-decoration: none;
    color: #fff;
  }

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
    overflow: auto;
    position: absolute;
    left: 0px;
    top: 0px;
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
