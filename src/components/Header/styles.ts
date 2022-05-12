import styled from "styled-components";





export const Container = styled.div`


@media (min-width: 360px ) and (max-width: 600px) {
  
  h2{
    font-size: 14px;
  }
  
  
}



padding-top: 35px;
display: flex;
align-items: center;
justify-content: space-between;

h2{
  font-weight: 700;
  font-size: 26px;
}


`

export const WrapLinks = styled.div`

@media (min-width: 360px ) and (max-width: 600px) {

  
  a {
    display: none;
  }
  
}



a{
  font-size: 18px;
  color: var(--white);
  transition: color .2s linear;
  
  &:hover {
    color: var(--green-light);
  }
}

a + a {
  margin-left: 45px;
}

`