import { useState, useRef } from "react";
import { useTextArea, useUser } from "hooks";
import COLOR from "constants/color";
import styled from "styled-components";
import { BannerBox, FlexBox, FlexTextBox, Toggle } from "components/common";
import { Textarea } from "components/Form";
import { Input } from "semantic-ui-react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "components/Tooltip/Tooltip";
import ModalFrame from "components/Modal/ModalFrame";
import { useAddArticle } from "hooks/queries/article";

interface Props {
  visible: boolean;
  onClose: () => void;
  title: string;
  type?: string;
  subTitle?: boolean;
  challengeId?: string | false;
}

const defaultProps = {
  type: "warning",
  subTitle: false,
  challengeId: false,
};

const Avatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  object-fit: cover;
  background: ${COLOR.bg.primary};
`;

const ImgInner = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  margin-right: 0.7rem;
  border-radius: 0.6rem;
  object-fit: cover;
  background: ${COLOR.bg.primary};
`;

export const PhotoInput = styled(Input)`
  width: 5rem !important;
  height: 2.5rem !important;
  display: none !important;
`;

export const PhotoButton = styled(AddPhotoAlternateIcon)`
  width: 4.3em !important;
  height: 4.3rem !important;
  margin: 0 0 3px 5px;
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
  type,
  subTitle,
  challengeId,
}: Props) => {
  const { user } = useUser();
  const [content, onChangeContent] = useTextArea("");
  const [imageList, setimageList] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSettled = () => {
    onClose();
  };

  const { mutate: addArticle } = useAddArticle({ onSettled }, challengeId);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setimageList([...imageList, { file: imageFile, url: imageUrl }]);
  };

  const deleteImage = (idx: number) => {
    setimageList(imageList.filter((_, index) => index !== idx));
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const handleSubmit = () => {
    const formdata = new FormData();
    if (challengeId) formdata.append("challenge_id", challengeId);
    formdata.append("content", content);
    [...imageList].forEach((image, index) => {
      formdata.append(`images[${index}]file`, image.file);
    });
    addArticle(formdata);
  };

  return (
    <ModalFrame
      width="50rem"
      height="auto"
      title={title}
      btnTitle1="취소하기"
      btnTitle2="작성하기"
      handleSubmit={handleSubmit}
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
            <Avatar src={user.avatar} />
            <FlexTextBox
              color={COLOR.font.primary}
              fontSize="1.25rem"
              margin="0.9rem 0 0 0.8rem"
            >
              {user.username}
            </FlexTextBox>
          </FlexBox>
          <Textarea
            autoFocus
            value={content}
            onChange={onChangeContent}
            text="챌린지 인증 글을 입력해주세요"
            width="43rem"
            mobileWidth="13rem"
            minRow={2}
          />
        </FlexBox>
        <FlexBox
          background={COLOR.bg.nav}
          borderRadius="1.25rem"
          margin="1.5rem 0 0 0"
          padding="1.2rem"
          column
        >
          <FlexBox background="transparent">
            <FlexTextBox fontSize="1.25rem" margin="0.15rem 0.5rem 1rem 0">
              이미지 첨부
            </FlexTextBox>
            <Tooltip
              text={
                <>
                  이미지를 첨부하면 챌린지 인증이 <br /> 원할하게 이루어질 수
                  있어요 🚀
                </>
              }
            />
          </FlexBox>
          <FlexBox background="transparent">
            <div>
              <FlexBox background="transparent">
                {imageList.map((image, index) => (
                  <ImgInner key={`add_article_images_${index}`}>
                    <Image alt="article_image" src={image.url} />
                    <RemoveBtn onClick={() => deleteImage(index)} />
                  </ImgInner>
                ))}
              </FlexBox>
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
              width="5.5rem"
              height="5.5rem"
              borderRadius="0.6rem"
              background={COLOR.bg.secondary}
              center
            >
              <PhotoButton onClick={onButtonClick} />
            </FlexBox>
          </FlexBox>
        </FlexBox>

        <FlexBox
          column
          padding="0 1.3rem"
          mobilePadding="0.1rem"
          margin="2.5rem 0"
          gap="1rem"
        >
          <FlexBox background="transparent" width="100%" mobileWidth="100%">
            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              mobileWidth="100%"
            >
              <FlexTextBox
                fontSize="1.3rem"
                mobileFontSize="0.8rem"
                margin="0.1rem 0 0 0"
                width="100%"
              >
                페이스북 공유
              </FlexTextBox>
              <Toggle disabled checked={false} />
            </FlexBox>
          </FlexBox>
          <FlexBox background="transparent" width="100%" mobileWidth="100%">
            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              mobileWidth="100%"
            >
              <FlexBox width="100%" alignItems="center">
                <FlexTextBox
                  fontSize="1.3rem"
                  margin="0 5px 0 0"
                  mobileFontSize="0.8rem"
                >
                  인스타그램 공유
                </FlexTextBox>
                <Tooltip
                  text={
                    <>
                      인스타그램 공유는 계정 연동 후 <br /> 사용할 수 있어요 🥺
                    </>
                  }
                  margin="0"
                />
              </FlexBox>
              <Toggle disabled checked={false} />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </BannerBox>
    </ModalFrame>
  );
};
ChallengeConfirmModal.defaultProps = defaultProps;

export default ChallengeConfirmModal;
