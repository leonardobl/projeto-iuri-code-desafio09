import styled from "styled-components";



export const Container = styled.div`
padding-top: 130px;

h2{
  margin-bottom: 30px;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
}
`


export const CardWrap = styled.div`
display: flex;
justify-content: space-between;

div + div {
  margin-left: 45px;
}


@media (min-width: 360px) and (max-width: 600px) {
  flex-direction: column;

  div{
    width: 100%;
  }

  div + div {
    margin-top: 40px;
    margin-left: 0;
  }
}
`