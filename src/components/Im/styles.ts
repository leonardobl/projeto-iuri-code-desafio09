import styled from "styled-components";


export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 116px;
`
export const BtnWrap = styled.div`

@media (min-width: 360px) and (max-width: 600px) {
  display: flex;
  justify-content: center;

  button {
    font-size: 10px;
  }

}


margin-top: 35px;
button + button {
  margin-left: 15px;
}
`


export const TextContent = styled.div`
@media (min-width: 360px) and (max-width: 600px) {

  h1 {
    font-size: 24px;
    text-align: center;
    font-weight: 700;
  }

  p{
    text-align: center;
  }
}


width: 100%;

p{
  margin-top: 18px;
}

`
