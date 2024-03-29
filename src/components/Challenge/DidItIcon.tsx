import styled from "styled-components";
import COLOR from "constants/color";

interface Props {
  isAbsolute?: boolean;
  top?: string;
  right?: string;
  mobileLeft?: string;
}

const defaultProps = {
  isAbsolute: false,
  top: "0",
  right: "0",
  mobileLeft: "0",
};

const CompleteBox = styled.div`
  position: ${(props: Props) => props.isAbsolute && "absolute"};
  top: ${(props: Props) => props.top};
  right: ${(props: Props) => props.right};
  color: ${COLOR.font.primary};
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  background: ${COLOR.black};
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 767px) {
    right: 0;
    left: ${(props: Props) => props.mobileLeft};
  }
`;

const CompleteWord = styled.span`
  width: 2rem;
  font-size: 0.875rem;
  font-family: "Pr-SemiBold";
  text-align: center;
  line-height: 1rem;
`;

const DidItIcon = (props: Props) => {
  const { isAbsolute, top, right, mobileLeft } = props;
  return (
    <CompleteBox
      isAbsolute={isAbsolute}
      top={top}
      right={right}
      mobileLeft={mobileLeft}
    >
      <CompleteWord>내가 해냄</CompleteWord>
    </CompleteBox>
  );
};
DidItIcon.defaultProps = defaultProps;

export default DidItIcon;
