import { PointType } from "types";
import PointCard from "./PointCard";

interface Props {
  points: PointType[];
}

const PointPartialList = ({ points }: Props) => {
  return (
    <>
      {points.map((point) => {
        return <PointCard key={`point-card-${point.id}`} point={point} />;
      })}
    </>
  );
};

export default PointPartialList;
