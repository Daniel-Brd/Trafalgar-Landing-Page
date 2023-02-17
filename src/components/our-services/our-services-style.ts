import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 70rem;
  padding: 20rem;


  >h1{
    font-weight: 700;
    font-size: 36rem;
  }

  >p{
    font-weight: 300;
    font-size: 18rem;
    line-height: 30rem;
    text-align: center;
    padding: 0 80rem;
  }

  >button{
    border: 1.4px solid var(--main-blue);
    color: var(--main-blue);
    background-color: white;
    align-self: center;
    cursor: pointer;
    font-size: 18rem;
  }
`;
