import styled from "styled-components";



export const Container = styled.div`
width: 350px;
height: 240px;
background-color: var(--gray-400);
display: block;
position: relative;

display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
padding: 30px;

p{
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
}

&::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 5px;
  background-color: var(--green-light);
  display: block;
}


@media (min-width: 360px) and (max-width: 600px) {
  width: 311px;
  height: 140px;
  align-items: center;

  p{
    font-size: 14px;
  }
  
}

`