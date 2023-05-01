import { EmployeesContext } from "@/model/employees.context";
import { useContext } from "react";
import { useStore } from "zustand";
import { EmployeesListComponent } from "./employees-list.component";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const FilterBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem 5rem",
});

export const EmployeesListContainer:React.FC = () => {
  const store = useContext(EmployeesContext);
  if (!store) {
    throw new Error("Missing EmployeesContext");
  }
  const employees = useStore(store, (state) => state.employees);
  const loading = useStore(store, (state) => state.loading);

  return (
    <>
      <Typography variant="h1">The felloship of the tretton37</Typography>
      <FilterBox>
        <Typography variant="body1">Potential filter and tools area</Typography>
      </FilterBox>
      <EmployeesListComponent loading={loading} employees={employees} />
    </>
  );
};
