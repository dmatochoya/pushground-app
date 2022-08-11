import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const FiltersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
`;

export const DatePickersContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const StyledDatePicker = styled(DatePicker)`
    font-size: 16px;
    color: #495057;
    text-align: center;
    width: 135px;
    height: 38px;
    padding: 6px 12px;
    border: 1px solid #ced4da;
    border-radius: 5px;

    &:focus {
        border-color: #80bdff;
    }
`;

export const Divider = styled.span`
    margin: 0 10px;
`;
