import styled from "styled-components";

type ButtomProps = {
  isFill: boolean
}

export const Button = styled.button<ButtomProps>`

font-size: 14px;
font-weight: 500;
line-height: 18px;
padding: 12px 27px;
border: 2px solid var(--gray-200);


background-color: ${ ({isFill})=> isFill ? "var(--green-light)" : "transparent" };
color: ${ ({isFill})=> isFill ? "var(--dark)" : "var(--white)" };
`