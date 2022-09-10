import { useState, useRef } from "react";
import { useTextArea } from "hooks";
import COLOR from "constants/color";
import styled from "styled-components";
import { BannerBox, FlexBox, FlexTextBox, Toggle } from "components/common";
import { Textarea } from "components/Form";
import { Input } from "semantic-ui-react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "components/Tooltip/Tooltip";
import ModalFrame from "./ModalFrame";

interface Props {
  visible: boolean;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
  title: string;
  text?: string;
  type?: string;
  subTitle?: boolean;
}

const defaultProps = {
  text: "챌린지 인증 글을 입력해주세요",
  type: "warning",
  subTitle: false,
};

const dummyData = {
  id: "1",
  avatar: "images/man.png",
  userName: "홍길동",
  subTitle: true,
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
  object-fit: cover;
`;

export const PhotoInput = styled(Input)`
  width: 5rem !important;
  height: 2.5rem !important;
  display: none !important;
`;

export const PhotoButton = styled(AddPhotoAlternateIcon)`
  width: 4.5em !important;
  height: 5.2rem !important;
  margin-top: 0.3rem !important;
  cursor: pointer;
`;

const RemoveBtn = styled(CloseIcon)`
  position: absolute;
  top: 0;
  right: 13px;
  cursor: pointer;
  color: white;
`;

const ChallengeConfirmModal = ({
  onClose,
  visible,
  title,
  text,
  type,
  subTitle,
}: Props) => {
  const [content, onChangeContent] = useTextArea("");
  const [imageList, setimageList] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setimageList([...imageList, imageUrl]);
  };

  const deleteImage = (idx: number) => {
    setimageList(imageList.filter((_, index) => index !== idx));
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const uploadImg = () => {
    const newArr = [];
    for (let i = 0; i < imageList.length; i += 1) {
      newArr.push(
        <ImgInner>
          <Image alt="sample" src={imageList[i]} />
          <RemoveBtn onClick={() => deleteImage(i)} />
        </ImgInner>
      );
    }
    return newArr;
  };
  return (
    <ModalFrame
      width="52.25rem"
      height="auto"
      title={title}
      btnTitle1="취소하기"
      btnTitle2="작성하기"
      onClose={onClose}
      visible={visible}
      type={type}
      subTitle={subTitle}
    >
      <BannerBox
        position="relative"
        theme="transparent"
        padding="0"
        margin="0"
        widthMobile="15rem"
      >
        <FlexBox
          background={COLOR.bg.nav}
          borderRadius="1.25rem"
          margin="1rem 0 0 0"
          padding="1.1rem"
          column
        >
          <FlexBox background="transparent" margin="0 0 1rem 0">
            <Avatar src={`${process.env.PUBLIC_URL}/${dummyData.avatar}`} />
            <FlexTextBox
              color={COLOR.font.primary}
              fontSize="1.25rem"
              margin="0.9rem 0 0 0.8rem"
            >
              {dummyData.userName}
            </FlexTextBox>
          </FlexBox>
          <Textarea
            value={content}
            onChange={onChangeContent}
            text={text}
            width="43rem"
            mobileWidth="13rem"
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
              <FlexBox background="transparent">{uploadImg()}</FlexBox>
            </div>
            <input
              name="imggeUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
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

        <FlexBox column padding="0 2rem" mobilePadding="0.1rem">
          <FlexBox
            background="transparent"
            width="100%"
            mobileWidth="100%"
            margin="2rem 0 0.5rem 0"
            height="2rem"
          >
            {subTitle && (
              <FlexBox
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                mobileWidth="100%"
              >
                <FlexTextBox
                  fontSize="1.5rem"
                  mobileFontSize="0.8rem"
                  margin="0.1rem 0 0 0"
                  width="100%"
                >
                  이 글을 피스에도 같이 올릴까요?
                </FlexTextBox>
                <Toggle checked={false} />
              </FlexBox>
            )}
          </FlexBox>
          <FlexBox
            background="transparent"
            margin="1.4rem 0"
            height="2rem"
            width="100%"
            mobileWidth="100%"
          >
            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              mobileWidth="100%"
            >
              <FlexTextBox
                fontSize="1.5rem"
                mobileFontSize="0.8rem"
                margin="0.1rem 0 0 0"
                width="100%"
              >
                페이스북 공유
              </FlexTextBox>
              <Toggle checked={false} />
            </FlexBox>
          </FlexBox>
          <FlexBox
            background="transparent"
            margin="0.5rem 0 4rem 0"
            height="2rem"
            width="100%"
            mobileWidth="100%"
          >
            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              mobileWidth="100%"
            >
              <FlexBox width="100%">
                <FlexTextBox
                  fontSize="1.5rem"
                  margin="0.1rem 0 0 0"
                  mobileFontSize="0.8rem"
                >
                  인스타그램 공유
                </FlexTextBox>
                <Tooltip
                  text="인스타그램 공유는 계정 연동 후 사용할 수 있어요 🥺"
                  margin="0"
                />
              </FlexBox>
              <Toggle checked={false} />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </BannerBox>
    </ModalFrame>
  );
};
ChallengeConfirmModal.defaultProps = defaultProps;

export default ChallengeConfirmModal;
