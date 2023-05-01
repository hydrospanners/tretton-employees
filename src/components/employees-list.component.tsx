import { Employee } from "@/model/employees.api";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Skeleton
} from "@mui/material";
import Image from "next/image";

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
              sx={{ marginRight: 2 }} />
            <Skeleton variant="rectangular" width={180} height={45} />
          </ListItem>
        ))}
      {!loading &&
        employees.map((employee) => (
          <ListItemButton
            component="a"
            href={`/employee/${employee.email}`}
            key={employee.email}
          >
            <ListItemAvatar>
              <Avatar>
                <Image
                  width={75}
                  height={75}
                  src={employee.imagePortraitUrl}
                  alt={employee.name} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={employee.name} secondary={employee.email} />
          </ListItemButton>
        ))}
    </List>
  );
};
