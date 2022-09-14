import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import COLOR from "constants/color";
import { FlexBox } from "components/common";

const Foot = styled.div`
  width: 100%;
  height: 5rem;
  position: relative;
  transform: translateY(50%);
`;

const Line = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: ${COLOR.border.default};
  opacity: 0.4;
`;

const Logo = styled.span`
  color: ${COLOR.font.primary};
  font-size: 20px;
  font-family: "Pr-ExtraBold";
  cursor: pointer;
`;

const FootItems = styled.div`
  display: flex;
  margin-left: 3vw;
  justify-content: space-around;
  width: 69%;
`;

const Label = styled.span`
  position: relative;
  width: auto;
  font-size: 1rem;
  color: ${COLOR.font.secondary};
  text-align: center;
  cursor: pointer;
`;

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Foot>
      <Line />
      <FlexBox padding="1.8rem 10rem">
        <Logo
          onClick={() => {
            navigate(`/`);
          }}
        >
          PeacePiece
        </Logo>
        <FootItems>
          <Label
            onClick={() => {
              navigate(`/intro`);
            }}
          >
            서비스 소개
          </Label>
          <Label
            onClick={() => {
              navigate(`/terms`);
            }}
          >
            이용약관
          </Label>
          <Label
            onClick={() => {
              navigate(`/privacy`);
            }}
          >
            개인정보처리방침
          </Label>
          <Label
            onClick={() => {
              navigate(`/team`);
            }}
          >
            팀원 소개
          </Label>
        </FootItems>
      </FlexBox>
      <FlexBox padding="0rem 9rem">
        <Line />
      </FlexBox>
      <FlexBox padding="0.8rem 9rem">
        <Label style={{ width: "12rem" }}>Team TTL | PeacePice</Label>
      </FlexBox>
    </Foot>
  );
};

export default Footer;
