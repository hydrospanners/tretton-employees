import { create } from "zustand";
import { DevtoolsOptions, devtools } from "zustand/middleware";
import { Employee, fetchEmployees } from "./employees.api";

type EmployeesState = {
  fetch: () => Promise<void>;
  employees: any[];
  loading: boolean;
  error: boolean;
  errorMessage?: string;
  updated: number;
};

const store = (initProps?: Pick<EmployeesState, "employees">) => {
  const DEFAULT_STATE: Omit<EmployeesState, "fetch"> = {
    employees: [],
    loading: false,
    error: false,
    errorMessage: undefined,
    updated: 0,
  };
  return create<EmployeesState>()(
    devtools(
      (set) => ({
        ...DEFAULT_STATE,
        ...initProps,
        fetch: async () => {
          set({ loading: true }, false, "fetch employees begin");
          const employees = await fetchEmployees();
          set({ employees, updated: Date.now() }, false, "fetch employees");
        },
      }),
      { name: "Employees Store" }
    )
  );
};

export type EmployeesStore = ReturnType<typeof store>;

export { store as useEmployeesStore };
