import moment from "moment";
import "moment/locale/ko";

moment.locale("ko");

export const useDate = (value: string) => {
  const date = moment(value);
  return date.format("YYYY. MM. DD.");
};

export const useFromDate = (value: string) => {
  const today = moment().add(1, "seconds");
  const date = moment(value);
  const diff = today.diff(date, "days");
  return diff > 31 ? date.format("YYYY. MM. DD.") : date.from(today);
};

export const useFromNow = (value: string) => {
  const fromNowDay = moment(value).fromNow();
  const amPm = moment(value).format(" · a ");
  const hourMin = moment(value).format("hh : mm");
  return fromNowDay + amPm + hourMin;
};
