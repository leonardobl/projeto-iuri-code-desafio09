import styled from "styled-components";


export const Container = styled.div`
padding-top: 127px; 

h2{
  text-align: center;
  margin-bottom: 32px;
  font-size: 32px;
  font-weight: 700;
}


@media (min-width: 360px) and (max-width: 600px){
  padding-top: 58px; 
  
  h2{
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
  
}


`


export const CardsWrap = styled.div`

display: grid;
grid-template-columns: repeat(3, 1fr);
justify-content: center;
gap: 45px;
grid-template-rows: repeat(2, 1fr);

@media (min-width: 360px) and (max-width: 600px){
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  div + div {
    margin-top: 24px;
  }
}

`