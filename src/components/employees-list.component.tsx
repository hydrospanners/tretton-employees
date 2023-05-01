import { Employee } from "@/model/employees.api";
import { List, ListItem, Skeleton } from "@mui/material";
import { EmployeesListItemComponent } from "./employees-list-item-component";

export const EmployeesListComponent: React.FC<{
  loading: boolean;
  employees: Employee[];
}> = ({ loading, employees }) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      {loading &&
        [...Array(10)].map((s, i) => (
          <ListItem key={"skeleton_" + i} sx={{ padding: "10px 8px" }}>
            <Skeleton
              variant="circular"
              height={40}
              width={40}
              sx={{ marginRight: 2 }}
            />
            <Skeleton variant="rectangular" width={180} height={45} />
          </ListItem>
        ))}
      {!loading &&
        employees.map((employee) => (
          <EmployeesListItemComponent
            key={`employeeListItemComponent_email_${employee.email}`}
            employee={employee}
          />
        ))}
    </List>
  );
};
