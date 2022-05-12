import styled from "styled-components";


export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin-top: 40px;

span{
  color: var(--white);
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
}

@media (min-width: 360px) and (max-width: 600px){
  p{
    font-size: 11px;
  }

  span {
    font-size: 13px;
  }
}


text-align: center;
width: fit-content;

`


export const WrapImg = styled.div`
background-color: var(--gray-400);
border-radius: 35px;
width: 70px;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 18px;

img{
  min-width: 40px;
  display: block;
}

`