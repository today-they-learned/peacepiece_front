import { useState } from "react";
import COLOR from "constants/color";
import FlexTextBox from "components/common/FlexTextBox";
import BannerBox from "components/common/BannerBox";
import Tooltip from "components/Tooltip/Tooltip";
import FlexButton from "components/common/FlexButton";
import FlexBox from "components/common/FlexBox";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import NoticKeywordModal from "components/Modal/NoticeKeywordModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "38rem",
  borderRadius: "1rem",
  bgcolor: COLOR.bg.default,
  color: "#efefef",
  boxShadow: 24,
  p: 4,
};

const NoticKeyword = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [keywords] = useState([
    "일회용품_안_쓰기",
    "텀블러",
    "이_세상에는_다시_쓸_수_있는_물건이_많다",
  ]);

  return (
    <BannerBox
      width="24.6rem"
      height="18.37rem"
      padding="1.8rem 0.5rem 1.8rem 0.5rem"
    >
      <FlexBox background={COLOR.bg.primary}>
        <FlexTextBox
          fontSize="1.56rem"
          color={COLOR.font.primary}
          margin="0.2rem 0 1rem 1.2rem"
        >
          권소예
        </FlexTextBox>
        <FlexTextBox fontSize="1.56rem" margin="0.2rem 0.4rem 1rem 0">
          님의 알림 키워드
        </FlexTextBox>
        <Tooltip
          text={
            <>
              알림 설정을 한 키워드의 챌린지가 올라왔을 때, <br />
              이메일로 알려드릴게요. 😇
            </>
          }
        />
      </FlexBox>
      <BannerBox
        width="21.6rem"
        height="10.75rem"
        margin="1rem"
        padding="0.5rem 0.3rem 0.5rem 0.4rem"
        theme="secondary"
      >
        <FlexButton
          margin="0 0 0 14rem"
          fontSize="0.9rem"
          fontFamily="Pr-Regular"
          onClick={handleOpen}
        >
          수정하기{">"}
        </FlexButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <NoticKeywordModal onClick={handleClose} />
          </Box>
        </Modal>
        <FlexBox margin="0.2rem 0.5rem 0.5rem 0.5rem" wrap="wrap">
          {keywords.map((keyword: string) => (
            <FlexTextBox
              key={keyword}
              height="18px"
              margin="0 0.5rem 1rem 0"
              fontSize="1.1rem"
            >
              #{keyword}
            </FlexTextBox>
          ))}
        </FlexBox>
      </BannerBox>
    </BannerBox>
  );
};

export default NoticKeyword;
