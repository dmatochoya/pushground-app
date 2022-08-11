import React, { useState } from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import Table from '../components/Table';
import { StyledMain } from '../components/styles/DashboardHeaderAndMain.styled';

function Dashboard() {
  const dateObj = new Date();
  const dateOneWeekAgo = new Date(dateObj.setDate(dateObj.getDate() - 7));

  const [startDate, setStartDate] = useState(dateOneWeekAgo);
  const [endDate, setEndDate] = useState(new Date());

  const dates = {
    startDate, setStartDate, endDate, setEndDate,
  };

  return (
    <section>
      <Header />
      <StyledMain>
        <Filters dates={dates} />
        <Table startDate={startDate} endDate={endDate} />
      </StyledMain>
    </section>
  );
}

export default Dashboard;
