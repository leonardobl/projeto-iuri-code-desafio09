import styled from "styled-components";

export const Container = styled.div`

display: flex;
justify-content: space-around;

@media (min-width: 360px) and (max-width: 600px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
}
`