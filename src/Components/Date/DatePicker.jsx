import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import classes from "./DatePicker.module.css";
import PropTypes from "prop-types";
import { format } from "date-fns";

function DatePicker(props) {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  function handleSelect(ranges) {
    const start = format(ranges.selection.startDate, "MM/dd/yyyy");
    const end = format(ranges.selection.endDate, "MM/dd/yyyy");
    const dateObj = { startDate: start, endDate: end };

    props.handleChange(dateObj);
  }
  return (
    <div>
      <DateRangePicker
        className={classes.container}
        dateDisplayFormat={"P"}
        showDateDisplay={false}
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
    </div>
  );
}

DatePicker.propTypes = {
  handleChange: PropTypes.func,
};

export default DatePicker;
