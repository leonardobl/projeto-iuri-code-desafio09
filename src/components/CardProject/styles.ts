import styled from "styled-components";


export const Container = styled.div`

max-width: 350px;
width: 100%;
height: 240px;
border: 1px solid var(--gray-200);
background-color: var(--gray-400);
padding: 20px 25px;

h3{
  margin-bottom: 5px;
}

@media (min-width: 360px) and (max-width: 600px) {
  max-width: 312px;
  width: 100%;
  height: 174px;
  padding: 17px 18px;

  h3{
    font-weight: 500;
    font-size: 13px;
    margin: 6px 0;
  }

  p{
    font-size: 10px;
    font-weight: 400;
  }
}



`


export const Content = styled.div`
background-color: var(--dark);
border: 1px solid var(--gray-200);
max-width: 300px;
width: 100%;
height: 130px;
margin-bottom: 22px;


@media (min-width: 360px) and (max-width: 600px) {
  margin-bottom: 8px;
  max-width: 275px;
  width: 100%;
  height: 100px;
}


`