import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Title>1</Title>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.Pic_Color_Blue};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.Pic_Color_Coral};
  ${({ theme }) => theme.fonts.Pic_Noto_B_Title_1}
`;
