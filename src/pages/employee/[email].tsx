import { Employee, fetchEmployees } from "@/model/employees.api";
import { Card, Paper, Typography } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/employee/akan.murat.cimen@1337.tech"],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{ employee: Employee }> = async (
  context
) => {
  const employee = await (
    await fetchEmployees()
  ).filter((e) => e.email === context.params?.email)[0];

  return {
    props: {
      employee,
      revalidate: 60,
    },
  };
};

const EmployeePage: NextPage<{ employee: Employee }> = ({ employee }) => {
  return (
    <Card>
      <Typography variant="h5">{employee.name}</Typography>
      <Image  width={200} height={200} src={employee.imagePortraitUrl} alt={employee.name} />
    </Card>
  );
};
export default EmployeePage;
