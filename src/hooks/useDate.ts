import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

const useDate = (value: string) => {
  const date = dayjs(value);
  return date.format("YYYY. MM. DD.");
};

export default useDate;
