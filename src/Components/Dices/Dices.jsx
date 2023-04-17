import styled from "styled-components";

export default function Dices({ img1, img2 }) {
  const StyledImg = styled.img`
    border: 5px solid #EC9EC0;
    padding: 2px;
    box-shadow: 3px gray;
    width: 70px;
    height: 70px;
  `;

  return (
    <>
      <StyledImg src={img1} alt={img1} />
      <br />
      <br />
      <StyledImg src={img2} alt={img2}/>
    </>
  );
}
