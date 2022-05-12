import styled from "styled-components";


export const Container = styled.div`
border: 1px solid var(--gray-200);
width: 150px;
height: 150px;
padding: 35px 40px;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--gray-400);

@media (min-width: 360px) and (max-width: 600px) {
  width: 90px;
  height: 90px;
  padding: 21px 24px;
}

`