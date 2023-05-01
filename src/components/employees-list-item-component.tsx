import { Employee } from "@/model/employees.api";
import {
  Avatar,
  Box,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

export const EmployeesListItemComponent: React.FC<{ employee: Employee }> = ({
  employee,
}) => (
  <Stack direction="column">
    <Box
      sx={{
        borderRadius: 0,
        width: 150,
        height: 75,
        backgroundColor: "transparent",
        position: "relative",
      }}
    >
      <Image
        alt={`Picture of ${employee.name}`}
        fill
        style={{ objectFit: "contain" }}
        src={employee.imagePortraitUrl}
      />
    </Box>
    <Stack direction="row">
      <Stack direction="column">
        <NextLink href={`/employee/${employee.email}`}>
          <Typography>{employee.name}</Typography>
        </NextLink>

        <Typography>Office: {employee.office}</Typography>
      </Stack>
      <Stack direction="row">
        {employee.linkedIn && (
          <NextLink href={employee.linkedIn}>
            <Image src="linkedin.svg" alt="Twitter" width={20} height={20} />
          </NextLink>
        )}
        {employee.gitHub && (
          <NextLink href={employee.gitHub}>
            <Image src="github.svg" alt="Github" width={20} height={20} />
          </NextLink>
        )}
        {employee.twitter && (
          <NextLink href={employee.twitter}>
            <Image src="twitter.svg" alt="Twitter" width={20} height={20} />
          </NextLink>
        )}
      </Stack>
    </Stack>
  </Stack>
);
