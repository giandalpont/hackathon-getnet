import styled from 'styled-components'

export const Container = styled.div`


`
export const Menu = styled.div`
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
  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    li {
      color: #f5f6fa;
      /* padding-left: 60px; */
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 60px;
      list-style-type: none;
      transition: 0.2 ease-in-out;

      &:hover {
        color: #2E4DD4;
        background: #f5f6fa;
        border-radius: 0.9rem;
        font-weight: 800;
      }
    }
  }
`
export const Content = styled.div`

`
