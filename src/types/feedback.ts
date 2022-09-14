type FeedbackInterface = {
  feedback: {
    id: number;
    emoji: string;
  };
  count: number;
  is_feedbacked: boolean;
};

export default FeedbackInterface;
