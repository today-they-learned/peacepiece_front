import { ImageType } from "types";

type ChallengeCategoryInterface = {
  id: string | number;
  title: string;
};

type ChallengeInterface = {
  id: string | number;
  title: string;
  description: string;
  categories: ChallengeCategoryInterface[];
  prover_cnt: number;
  point: number;
  images: ImageType[];
  thumbnail: ImageType;
  is_proved: boolean;
  start_at: string;
  end_at: string;
};

export default ChallengeInterface;
