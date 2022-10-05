import { useState } from 'react';
import { useDatepicker, START_DATE } from '@datepicker-react/hooks';

import Month from './Month';
import NavButton from './NavButton';
import DatepickerContext from './datepickerContext';
import styled from 'styled-components';

function Datepicker() {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  });
  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onDatesChange: handleDateChange,
  });

  function handleDateChange(data) {
    if (!data.focusedInput) {
      setState({ ...data, focusedInput: START_DATE });
    } else {
      setState(data);
    }
  }

  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      <div>
        <strong>Focused input: </strong>
        {state.focusedInput}
      </div>
      <div>
        <strong>Start date: </strong>
        {state.startDate && state.startDate.toLocaleString()}
      </div>
      <div>
        <strong>End date: </strong>
        {state.endDate && state.endDate.toLocaleString()}
      </div>

      <NavButton onClick={goToPreviousMonths}>Previous</NavButton>
      <NavButton onClick={goToNextMonths}>Next</NavButton>

      <MonthWrapper>
        {activeMonths.map((month) => (
          <Month
            key={`${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            firstDayOfWeek={firstDayOfWeek}
          />
        ))}
      </MonthWrapper>
    </DatepickerContext.Provider>
  );
}

export default Datepicker;

const MonthWrapper = styled.div`
  border: 1px solid red;
  display: flex;
`;
