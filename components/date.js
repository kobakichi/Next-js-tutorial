import { parseISO, format } from "date-fns";

export const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  console.log(date);
  return (
    <>
      <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
    </>
  );
};

export default Date;
