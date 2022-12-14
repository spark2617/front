import { Link, useNavigate } from "react-router-dom";
import { useDateRange } from "../useHook/DateRangeProvider";
import { useWindowSize } from "../useHook/useWindowSize";
import { AuthContext } from "../../pages/Login/contexts/auth";
import { DatePicker } from "../DataPicker/DatePicker"
import { useContext } from "react";
import "./Reserva.scss";
import { id } from "date-fns/locale";

export default function Reserva({
  id = "",
  landPrice = 0,
  reservations = [], }) {
  const { startDate, endDate, setStartDate, setEndDate } = useDateRange();
  const [windowWidth] = useWindowSize();
  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!logout) return navigate("/login");

    if (startDate && endDate) {
      navigate(`/success`);
    }
  };

  let excludeDateIntervals;
  if (reservations.length > 0 && reservations[0].dateInitial) {
    excludeDateIntervals = reservations.map((reservation) => {
      return { start: new Date(reservation.dateInitial), end: new Date(reservation.dateFinal) };
    });
  }

  const datePickerProps = {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    monthsShown: windowWidth > 1150 ? 2 : 1,
    excludeDateIntervals
  };

  return (
    <div className="available-dates">
      <h3 className="available-dates__heading text-dark">
        Verifique as datas disponíveis:
      </h3>
      <form className="available-dates__form" onSubmit={handleSubmit}>
        <div className="available-dates__form__date-picker">
          <DatePicker inline={true} {...datePickerProps} />
        </div>
        <div className="available-dates__form__floating-date-picker">
          <div className="floating-date-picker">
            <p className="floating-date-picker__price">
              A partir de{" "}
              <strong>
                {landPrice.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </p>
            <DatePicker {...datePickerProps} />

           
              
  
            <button type="submit" disabled={!startDate || !endDate} >
              Reserve agora
            </button>


            <p className="floating-date-picker__info">
              Não se preocupe, você so será cobrado na etapa final!
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
