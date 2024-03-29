import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import COLOR from "constants/color";
import FlexBox from "components/common/FlexBox";

const Foot = styled.div`
  width: 100%;
  position: relative;
  transform: translateY(50%);
  background: ${COLOR.bg.default};
`;

const Line = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: #a3a3a3;
  opacity: 0.4;
`;

const Logo = styled.img`
  width: 2rem;
  height: 2rem;
`;

const FootItems = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 2vw;
  width: 72%;
`;

const Label = styled.span`
  position: relative;
  width: auto;
  margin-top: 0.1rem;
  font-size: 0.8rem;
  color: #a3a3a3;
  opacity: 0.5;
  text-align: center;
  cursor: pointer;
`;

const MobileFooter = () => {
  const navigate = useNavigate();
  return (
    <Foot>
      <Line />
      <FlexBox padding="2rem 1rem 1.2rem 2.5rem">
        <Logo src={`${process.env.PUBLIC_URL}/images/logo.png`} />
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
      <FlexBox padding="0rem 1rem">
        <Line />
      </FlexBox>
      <FlexBox padding="0.8rem 1rem">
        <a href="https://github.com/today-they-learned">
          <Label style={{ width: "12rem" }}>Team TTL | PeacePice</Label>
        </a>
      </FlexBox>
    </Foot>
  );
};

export default MobileFooter;
