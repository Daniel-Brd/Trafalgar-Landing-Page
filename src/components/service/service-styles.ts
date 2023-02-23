import styled from "styled-components";

export const StServices = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340rem, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(340rem, 1fr));
  padding: 20rem;
  width: 100%;
  gap: 35rem;
`;

export const Bgimage = styled.figure`
  position: relative;
  z-index: -1;
  width: 100vw;
  left: -220px;
  >img{
    position: absolute;
    width: 50%;
    left: 0;
  }
`

export const StService = styled.article`
  cursor: pointer;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 40rem;
  justify-content: space-around;
  box-shadow: 10rem 40rem 50rem rgba(229, 233, 246, 0.4);
  border-radius: 20rem;
  margin-bottom: auto;
  background-color: white;
  >p{
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
