import styled from 'styled-components';

export const StyledTable = styled.table`
    border: 1px solid rgb(222, 226, 230);
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    overflow-x: scroll;
    font-size: 13px;
`;

interface TableRowProps {
    isStatRow: boolean;
    isGrayed: boolean;
}

export const TableRow = styled.tr<TableRowProps>`
    display: flex;
    border-bottom: 1px solid rgb(222,226,230);
    height: 43px;
    align-items: center;
    padding: 0 20px;
    min-width: fit-content;
    background-color: ${({ isGrayed }) => (
    isGrayed ? 'rgb(244, 246, 249)' : 'rgb(255, 255, 255)'
  )};

    ${({ isStatRow }) => (isStatRow && '&:hover { background: rgb(230, 232, 235) }')} 
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
    border: 1px solid rgb(0, 0, 0);
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
    color: red;
`;
