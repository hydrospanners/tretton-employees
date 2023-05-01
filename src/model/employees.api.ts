export type Employee = {
  name: string;
  email: string;
  phoneNumber: string;
  office: string;
  manager: string;
  orgUnit: string;
  mainText: string;
  gitHub: string | null;
  twitter: string | null;
  stackOverflow: string | null;
  linkedIn: string | null;
  imagePortraitUrl: string;
  imageWallOfLeetUrl: string;
  highlighted: boolean;
  published: boolean;
  primaryRole: string;
  secondaryRole: string | null;
  area: string;
};

const fetchEmployees = async (): Promise<Employee[]> => {
  const result = await (
    await fetch("https://api.1337co.de/v3/employees", {
      headers: {
        Authorization: process.env.API_KEY as string,
      },
    })
  ).json();
  return result.slice(0, 10);
};

export { fetchEmployees };
