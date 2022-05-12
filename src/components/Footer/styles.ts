import styled from "styled-components";



export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 60px;
background-color: var(--gray-400);

h3{
  font-size: 16px;
  font-weight: 700;
}

@media (min-width: 360px) and (max-width: 600px) {
  height: 40px;

  h3{
  font-size: 12px;
  font-weight: 700;
}

}


`