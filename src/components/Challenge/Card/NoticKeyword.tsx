import { useState } from "react";
import COLOR from "constants/color";
import { BannerBox, FlexBox, FlexTextBox } from "components/common";
import Tooltip from "components/Tooltip/Tooltip";
import FlexButton from "components/common/FlexButton";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import NoticKeywordModal from "components/Modal/NoticeKeywordModal";
import { ReminderType } from "types";
import { useChallengeReminderData } from "hooks/queries/challenge/reminder";
import styled from "styled-components";
import { useUser } from "hooks";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "38rem",
  borderRadius: "1rem",
  bgcolor: COLOR.bg.default,
  color: "#efefef",
  boxShadow: 24,
  p: 4,
};

const Keyword = styled.div`
  font-family: "Pr-SemiBold";
  max-width: 100%;
  height: 18px;
  font-size: 1.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1023px) {
    max-width: 50%;
  }
`;

const NoticKeyword = () => {
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data: reminders, isFetched } = useChallengeReminderData();

  return (
    <BannerBox width="24.6rem" widthTablet="50%" height="100%" padding="1.6rem">
      <FlexBox background={COLOR.bg.primary} margin="0 0 1rem 0">
        <FlexTextBox
          fontSize="1.56rem"
          mobileFontSize="1.4rem"
          lineHeight="2rem"
          color={COLOR.font.primary}
          margin="0 0.4rem 1rem 0"
        >
          {user?.username}{" "}
          <span style={{ color: COLOR.white }}>님의 알림 키워드</span>
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
      <FlexBox center>
        <BannerBox
          width="100%"
          padding="0.3rem"
          theme="secondary"
          position="relative"
        >
          <FlexButton
            position="absolute"
            top="0.5rem"
            right="0"
            fontSize="0.9rem"
            fontFamily="Pr-Regular"
            onClick={handleOpen}
          >
            수정하기 {">"}
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
          <FlexBox
            margin="1rem 0 0 0"
            padding="2rem 1rem"
            wrap="wrap"
            gap="0.8rem"
          >
            {isFetched &&
              reminders.map((reminder: ReminderType) => (
                <Keyword key={`reminder_category_main_${reminder.category.id}`}>
                  #{reminder.category.title}
                </Keyword>
              ))}
          </FlexBox>
        </BannerBox>
      </FlexBox>
    </BannerBox>
  );
};

export default NoticKeyword;
