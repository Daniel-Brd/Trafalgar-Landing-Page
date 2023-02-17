import styled from "styled-components";

export const StServices = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: center;
`;

export const StService = styled.article`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 350px;
  height: 350px;
  padding: 40px;
  justify-content: space-around;
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  border-radius: 20px;
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
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  color: #7d7987;
`;
