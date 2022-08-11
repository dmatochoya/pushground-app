import React, { Dispatch, SetStateAction } from 'react';
import {
  FiltersWrapper, DatePickersContainer, StyledDatePicker, Divider,
} from './styles/Filters.styled';

type Setter = Dispatch<SetStateAction<Date>>;

interface Props {
  dates: {
    startDate: Date;
    setStartDate: Setter;
    endDate: Date;
    setEndDate: Setter;
  }
}

function Filters({ dates }: Props) {
  const {
    startDate, endDate, setStartDate, setEndDate,
  } = dates;

  const datePicker = (date: Date, setDate: Setter) => (
    <StyledDatePicker
      selected={date}
      onChange={(newDate: Date) => setDate(newDate)}
      maxDate={new Date()}
    />
  );

  return (
    <FiltersWrapper>
      <h4>Filters</h4>
      <DatePickersContainer>
        {datePicker(startDate, setStartDate)}
        <Divider>-</Divider>
        {datePicker(endDate, setEndDate)}
      </DatePickersContainer>
    </FiltersWrapper>
  );
}

export default Filters;
