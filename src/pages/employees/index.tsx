import { Employee, fetchEmployees } from "@/model/employees.api";
import { ListItemText, Paper } from "@mui/material";

import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { EmployeesListContainer } from "../../components/employees-list.container";
import React from "react";
import { useEmployeesStore } from "@/model/employee.store";
import { EmployeesContext } from "../../model/employees.context";

export const getStaticProps: GetStaticProps<{
  employees: Employee[];
}> = async () => {
  const employees = await fetchEmployees();
  return {
    props: {
      employees,
    },
  };
};

const EmployeesPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ employees }) => {
  const store = useEmployeesStore({ employees });
  return (
    <EmployeesContext.Provider value={store}>
      <Head>
        <title>Employees</title>
        <meta name="description" content="tretton37 employeees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <EmployeesListContainer/>
    </EmployeesContext.Provider>
  );
};

export default EmployeesPage;
