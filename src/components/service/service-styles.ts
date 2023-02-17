import styled from "styled-components";

export const StServices = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20rem;
  width: 100%;
  gap: 5%;
`;

export const StService = styled.article`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 350rem;
  height: 350rem;
  padding: 40rem;
  justify-content: space-around;
  box-shadow: 10rem 40rem 50rem rgba(229, 233, 246, 0.4);
  border-radius: 20rem;
  margin-bottom: auto;
  p{
    font-weight: 300;
    font-size: 16rem;
    line-height: 28rem;
  }
`;

export const Image = styled.img`
  height: 90px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 56px; ;
`;

export const Text = styled.p`
`;
