import styled from 'styled-components';

export const StyledTable = styled.table`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    font-size: 13px;
    border: 1px solid rgb(#dee2e6);
    overflow-x: scroll;
`;

interface TableRowProps {
    isStatRow: boolean;
    isGrayed: boolean;
}

export const TableRow = styled.tr<TableRowProps>`
    display: flex;
    align-items: center;
    min-width: fit-content;
    height: 43px;
    background-color: ${({ isGrayed }) => (
    isGrayed ? '#f4f6f9' : '#fff'
  )};
    padding: 0 20px;
    border-bottom: 1px solid #dee2e6;

    ${({ isStatRow }) => (isStatRow && '&:hover { background: #e6e8eb }')} 
`;

export const TotalTableRow = styled(TableRow)`
    font-size: 14px;
    font-weight: 500;
`;

export const TableHeader = styled.th`
    flex: 1;
    min-width: 150px;
    font-weight: 600;
    text-align: left;
`;

export const TableCell = styled.td`
    flex: 1;
    min-width: 150px;
`;

export const RefetchButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const RefetchButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    font-size: 15px;
    width: 33px;
    height: 33px;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 4px;
    margin: 10px 0;
    transition: all 0.2s linear 0s;

    &:hover {
        background-color: rgb(226, 230, 234);
    }
`;

export const ClipLoaderContainer = styled.tr`
    display: flex;
    justify-content: center;
    height: 43px;
    padding: 4px 0 5px;
`;

export const ErrorMessage = styled.h4`
    color: #ff0000;
`;
