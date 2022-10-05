import { useMonth } from '@datepicker-react/hooks';
import styled from 'styled-components';

import Day from './Day';

function Month({ year, month, firstDayOfWeek }) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  });

  // const divStyle = {
  //   display: 'grid',
  //   margin: '32px 0 0',
  //   gridTemplateColumns: `repeat(${activeMonths.length}, 300px)`,
  //   gridGap: '0 64px',
  //   border: '1px solid red',
  // };

  return (
    <Wrapper>
      <MonthLabel>
        <strong>{monthLabel}</strong>
      </MonthLabel>

      <WeekDayWrapper>
        {weekdayLabels.map((dayLabel) => (
          <Weekday key={dayLabel}>{dayLabel}</Weekday>
        ))}
      </WeekDayWrapper>

      <DateWrapper>
        {days.map((day, index) => {
          if (typeof day === 'object') {
            return (
              <Day
                date={day.date}
                key={day.date.toString()}
                dayLabel={day.dayLabel}
              />
            );
          }

          return <div key={index} />;
        })}
      </DateWrapper>
    </Wrapper>
  );
}

export default Month;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0 0;
  /* grid-template-columns: repeat(2, 300px); */
  grid-gap: 0 64px;
  border: 1px solid red;
  width: 400px;
`;

const WeekDayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  margin-bottom: 10px;
  font-size: 10px;
`;

const Weekday = styled.div`
  text-align: center;
`;

const DateWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
`;

const MonthLabel = styled.div`
  text-align: center;
  margin: 0 0 16px;
`;
