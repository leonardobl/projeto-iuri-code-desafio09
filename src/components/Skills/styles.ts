import styled from "styled-components";

export const Container = styled.div`
padding-top: 127px;
padding-bottom: 185px;
text-align: center;

h2{
  font-size: 32px;
  font-weight: 700;
}


@media (min-width:360px) and (max-width: 600px) {
padding-top: 56px;
padding-bottom: 56px;

h2{
  font-size: 24px;
  font-weight: 700;
}


}





`


export const CardWrap = styled.div`
padding-top: 30px;
display: flex;
justify-content: space-between;


@media (min-width: 360px) and (max-width: 600px) {
  padding-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 21px;

}



`