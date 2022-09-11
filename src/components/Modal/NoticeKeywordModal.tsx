import COLOR from "constants/color";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import FlexBox from "components/common/FlexBox";
import AutoComplete from "components/Form/AutoComplete";
import { Icon, Label } from "semantic-ui-react";
import { FlexTextBox } from "components/common";
import {
  useChallengeReminderData,
  useDeleteChallengeReminder,
} from "hooks/queries/challenge/reminder";
import { ReminderType } from "types";

interface Props {
  onClick: () => void;
}

const Box = styled.div`
  max-width: 10rem;
  margin-right: 0.2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const TagLabel = styled(Label)`
  padding: 1rem !important;
  margin: 0 0.5rem 0.5rem 0 !important;
  font-size: 1rem !important;
  color: white !important;
  background: ${COLOR.bg.primary} !important;
`;

const NoticKeywordModal = ({ onClick }: Props) => {
  const { data: reminders, isFetched } = useChallengeReminderData();
  const { mutate: deleteReminder } = useDeleteChallengeReminder();

  return (
    <FlexBox column position="relative">
      <AiOutlineClose
        color={COLOR.white}
        size="22"
        style={{ position: "absolute", right: 0, cursor: "pointer" }}
        onClick={onClick}
      />
      <FlexTextBox fontSize="1.5rem">알림 키워드</FlexTextBox>
      <FlexBox wrap="wrap" margin="2rem 0 1rem 0">
        {isFetched &&
          reminders.map((reminder: ReminderType) => (
            <TagLabel key={`reminder_category_${reminder.category.id}`}>
              <FlexBox>
                <Box>{reminder.category.title}</Box>
                <Icon
                  name="delete"
                  link
                  onClick={() => {
                    deleteReminder(reminder.category.id);
                  }}
                />
              </FlexBox>
            </TagLabel>
          ))}
      </FlexBox>
      <AutoComplete />
    </FlexBox>
  );
};

export default NoticKeywordModal;
