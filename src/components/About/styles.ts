import styled from "styled-components"

export const Container = styled.div`
padding-top: 170px;
padding-bottom: 125px;

h2{
  padding-bottom: 14px;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
}

p{
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
}

@media (min-width: 360px) and (max-width: 600px) {
  padding-top: 56px;
  padding-bottom: 56px;
  
  
  h2{
    font-size: 24px;
  }
  
  p{
    font-size: 14px;
  }
  
}




`