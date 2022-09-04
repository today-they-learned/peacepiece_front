import { ImageType } from "types";

type ChallengeInterface = {
  id: string;
  title: string;
  description: string;
  categories: string[];
  prover_cnt: number;
  point: number;
  thumbnail: ImageType;
  is_proved: boolean;
  start_at: string;
  end_at: string;
};

export default ChallengeInterface;
