import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FaRegCalendarAlt } from 'react-icons/fa';
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./calendary.scss";
import { registerLocale } from "react-datepicker"

registerLocale("pt-BR", ptBR)

export function DatePicker({
  inline = false,
  monthsShown = 2,
  withPortal = false,
  startDate,
  endDate,
  setStartDate = () => {},
  setEndDate = () => {},
  excludeDateIntervals = []
}) {

  const today = new Date();
  const tomorrow = new Date().setDate(today.getDate() + 1);

  const commomConfig = {
    className: "date-picker__inputs__input",
    monthsShown,
    withPortal,
    showPopperArrow: false,
    showDisabledMonthNavigation: true,
    locale: "pt-BR",
    dateFormat: "dd/MM/yyyy",
    formatWeekDay: (nameOfDay) => nameOfDay.substring(0, 1).toUpperCase(),
    startDate: startDate,
    endDate: endDate,
    nextMonthButtonLabel: <MdChevronRight />,
    previousMonthButtonLabel: <MdChevronLeft />,
    excludeDateIntervals
  };

  if (inline) {
    return (
      <ReactDatePicker
        {...commomConfig}
        inline
        calendarClassName="inline"
        minDate={today}
        onChange={(dates) => {
          setStartDate(dates[0]);
          setEndDate(dates[1]);
        }}
        selectsRange
      />
    );
  }

  return (
    <div className="date-picker">
      <FaRegCalendarAlt className="date-picker__icon" />
      <span className="date-picker__inputs">
        <ReactDatePicker
          {...commomConfig}
          placeholderText="Check-in"
          minDate={today}
          onChange={(date) => setStartDate(date)}
          selected={startDate}
          selectsStart
        />
        <span className="date-picker__inputs__divider">{">"}</span>
        <ReactDatePicker
          {...commomConfig}
          placeholderText="Check-out"
          minDate={startDate || tomorrow}
          onChange={(date) => setEndDate(date)}
          selected={endDate}
          selectsEnd
        />
      </span>
    </div>
  );
}
