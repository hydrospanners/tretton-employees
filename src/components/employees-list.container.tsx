import { EmployeesContext } from "@/model/employees.context";
import { useContext } from "react";
import { useStore } from "zustand";
import { EmployeesListComponent } from "./employees-list.component";

export const EmployeesListContainer: React.FC = ({}) => {
  const store = useContext(EmployeesContext);
  if (!store) {
    throw new Error("Missing EmployeesContext");
  }
  const employees = useStore(store, (state) => state.employees);
  const loading = useStore(store, (state) => state.loading);
  return <EmployeesListComponent loading={loading} employees={employees} />;
};
