import React from 'react';
import { ClipLoader } from 'react-spinners';
import { FaUndo } from 'react-icons/fa';
import { useGetStatsQuery } from '../app/services/pushgroundApi';
import {
  StyledTable, TableRow, TotalTableRow, TableHeader, TableCell,
  ClipLoaderContainer, RefetchButtonContainer, RefetchButton, ErrorMessage,
} from './styles/Table.styled';
import formatDate from '../utils/formatDate';
import getRowMetricsData from '../utils/getRowMetricsData';

const tableHeaders = ['Campaign', 'Deliveries', 'Clicks', 'Conversions', 'Win rate', 'View Content', 'ROI'];

function Table({ startDate, endDate }: { startDate: Date; endDate: Date }) {
  const {
    data: stats, isFetching, isError, refetch,
  } = useGetStatsQuery({ dateStart: formatDate(startDate), dateEnd: formatDate(endDate) });

  const refetchButton = (
    <RefetchButtonContainer>
      <RefetchButton type="button" onClick={refetch}>
        <FaUndo />
      </RefetchButton>
    </RefetchButtonContainer>
  );

  return (
    <>
      {refetchButton}
      <StyledTable>
        <thead>
          <TableRow isGrayed={false} isStatRow={false}>
            {tableHeaders.map((header, index) => (
              <TableHeader key={index}>{header}</TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {isFetching
            ? (
              <ClipLoaderContainer>
                <td><ClipLoader color="#000" size={35} /></td>
              </ClipLoaderContainer>
            )
            : isError
              ? (
                <TableRow isGrayed={false} isStatRow={false}>
                  <td>
                    <ErrorMessage>
                      There are no stats to be shown. Change the filters and refresh to get stats.
                    </ErrorMessage>
                  </td>
                </TableRow>
              )
              : (
                <>
                  {stats?.leafs.map(({ metrics }: any, idx: number) => (
                    <TableRow isStatRow isGrayed={idx % 2 === 0} key={idx}>
                      {getRowMetricsData(metrics, `DEMO_${idx + 1}`).map((dataItem, index) => (
                        <TableCell key={index}>{dataItem}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                  {stats?.total?.metrics && (
                  <TotalTableRow isStatRow={false} isGrayed={false}>
                    {getRowMetricsData(stats.total.metrics, 'TOTAL').map((totalData, index) => (
                      <TableCell key={index}>{totalData}</TableCell>
                    ))}
                  </TotalTableRow>
                  )}
                </>
              )}
        </tbody>
      </StyledTable>
    </>
  );
}

export default Table;
