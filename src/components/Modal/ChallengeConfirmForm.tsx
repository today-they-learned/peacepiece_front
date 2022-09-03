import { useState, useRef } from "react";
import COLOR from "constants/color";
import styled from "styled-components";
import {
  BannerBox,
  FlexBox,
  FlexTextBox,
  Toggle,
  FlexButton,
} from "components/common";
import Textarea from "components/Form/Textarea";
import { Input } from "semantic-ui-react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "components/Tooltip/Tooltip";
import { AiOutlineClose } from "react-icons/ai";

const dummyData = {
  id: "1",
  avatar: "images/man.png",
  userName: "홍길동",
  images: [
    { id: 1, image_url: "images/image1.png" },
    { id: 2, image_url: "images/image2.png" },
  ],
};

const Avatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
`;

const ImgInner = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 6.2rem;
  height: 6.2rem;
  margin-right: 1rem;
  border-radius: 0.6rem;
`;

export const PhotoInput = styled(Input)`
  width: 5rem !important;
  height: 2.5rem !important;
  display: none !important;
`;

export const PhotoButton = styled(AddPhotoAlternateIcon)`
  width: 5em !important;
  height: 5rem !important;
  cursor: pointer;
`;

const RemoveBtn = styled(CloseIcon)`
  position: absolute;
  top: 0;
  right: 13px;
  cursor: pointer;
  color: white;
`;

const ChallengeConfirmForm = () => {
  const [fileImage, setFileImage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileImage(URL.createObjectURL(event.target.files[0]));
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const uploadImg = () => {
    const newArr = [];
    for (let i = 0; i < dummyData.images.length; i += 1) {
      newArr.push(
        <ImgInner>
          <Image
            alt="sample"
            src={`${process.env.PUBLIC_URL}${dummyData.images[i].image_url}`}
          />
          <RemoveBtn onClick={() => deleteFileImage()} />
        </ImgInner>
      );
    }
    return newArr;
  };
  return (
    <BannerBox width="52rem" padding="2rem 3rem 5rem 3rem" position="relative">
      <FlexBox background="transparent">
        <FlexTextBox
          color={COLOR.font.primary}
          fontSize="1.8rem"
          margin="0.25rem 1rem 0 0"
        >
          일회용품 No! 다시 쓰기 Yes!
        </FlexTextBox>
        <FlexTextBox fontSize="1.8rem" margin="0.25rem 24% 0 0">
          챌린지 인증하기
        </FlexTextBox>
        <AiOutlineClose color={COLOR.white} size="28" />
      </FlexBox>
      <FlexBox
        background={COLOR.bg.nav}
        borderRadius="1.25rem"
        margin="2rem 0 0 0"
        padding="1.1rem"
        column
      >
        <FlexBox background="transparent" margin="0 0 1rem 0">
          <Avatar src={dummyData.avatar} />
          <FlexTextBox
            color={COLOR.font.primary}
            fontSize="1.25rem"
            margin="0.9rem 0 0 0.8rem"
          >
            {dummyData.userName}
          </FlexTextBox>
        </FlexBox>
        <Textarea
          text="챌린지 인증 글을 입력해주세요"
          width="44rem"
          minRow={2}
        />
      </FlexBox>
      <FlexBox
        background={COLOR.bg.nav}
        borderRadius="1.25rem"
        margin="2rem 0 0 0"
        padding="1.2rem"
        column
      >
        <FlexBox background="transparent">
          <FlexTextBox fontSize="1.25rem" margin="0.15rem 0.5rem 1rem 0">
            이미지 첨부
          </FlexTextBox>

          <Tooltip text="이미지를 첨부하면 챌린지 인증이 원할하게 이루어질 수 있어요 🚀" />
        </FlexBox>
        <FlexBox background="transparent">
          <div>
            <FlexBox background="transparent">
              {uploadImg()}
              {fileImage && (
                <ImgInner>
                  <Image alt="sample" src={fileImage} />
                  <RemoveBtn onClick={() => deleteFileImage()} />
                </ImgInner>
              )}
            </FlexBox>
          </div>
          <input
            name="imggeUpload"
            type="file"
            accept="image/*"
            onChange={saveFileImage}
            ref={inputRef}
            style={{ width: "10rem", height: "10rem", display: "none" }}
          />
          <FlexBox
            width="6.2rem"
            height="6.2rem"
            borderRadius="0.6rem"
            background={COLOR.bg.secondary}
          >
            <PhotoButton onClick={onButtonClick} />
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox
        background="transparent"
        margin="1rem 2.5rem 1.5rem 2.5rem"
        position="relative"
        height="2rem"
      >
        <FlexTextBox fontSize="1.5rem" margin="0.1rem 0 0 0">
          이 글을 피스에도 같이 올릴까요?
        </FlexTextBox>
        <FlexBox position="absolute">
          <Toggle checked={false} />
        </FlexBox>
      </FlexBox>
      <FlexBox
        background="transparent"
        margin="1.4rem 2.5rem"
        position="relative"
        height="2rem"
      >
        <FlexTextBox fontSize="1.5rem" margin="0.1rem 0 0 0">
          페이스북 공유
        </FlexTextBox>
        <FlexBox position="absolute">
          <Toggle checked={false} />
        </FlexBox>
      </FlexBox>
      <FlexBox
        background="transparent"
        margin="0.5rem 2.5rem 1rem 2.5rem"
        position="relative"
        height="2rem"
      >
        <FlexTextBox fontSize="1.5rem" margin="0.1rem 0 0 0">
          인스타그램 공유
        </FlexTextBox>
        <Tooltip
          text="인스타그램 공유는 계정 연동 후 사용할 수 있어요 🥺"
          margin="0 0 0 0.5rem"
        />
        <FlexBox position="absolute">
          <Toggle checked={false} />
        </FlexBox>
      </FlexBox>
      <FlexBox position="absolute" right="3rem" bottom="1rem">
        <FlexButton fontSize="1.56rem" backgroundColor={COLOR.bg.default}>
          취소하기
        </FlexButton>
        <FlexButton
          margin="0 0 0 1rem"
          color={COLOR.font.primary}
          fontSize="1.56rem"
          backgroundColor={COLOR.bg.primary}
        >
          작성하기
        </FlexButton>
      </FlexBox>
    </BannerBox>
  );
};

export default ChallengeConfirmForm;
