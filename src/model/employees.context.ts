import { createContext } from "react";
import { EmployeesStore } from "@/model/employee.store";

export const EmployeesContext = createContext<EmployeesStore | null>(null);
