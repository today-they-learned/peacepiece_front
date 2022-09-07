import { UserType } from "types";

type ChallengeSuggestionInterface = {
  id?: number;
  feedback_count?: number;
  is_feedbacked?: boolean;
  suggester?: UserType;
  content: string;
};

export default ChallengeSuggestionInterface;
