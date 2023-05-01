import renderer from "react-test-renderer";
import { EmployeesListComponent } from "./employees-list.component";

describe("GIVEN the EmployeesList component", () => {
  test("WHEN the array is empty THEN the list should display empty", () => {
    const rendered = renderer.create(
      <EmployeesListComponent employees={[]} loading={false} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  test("WHEN the array has items THEN the list should display employees", () => {
    const rendered = renderer.create(
      <EmployeesListComponent
        employees={[
          {
            name: "John",
            area: "IT",
            email: "some@email.com",
            phoneNumber: "1234567890",
            gitHub: "somegithub",
            imagePortraitUrl: "/someurl.jpg",
            imageWallOfLeetUrl: "someotherurl",
            linkedIn: "someotherlinkedin",
            twitter: "sometwitter",
            mainText: "sometext",
            manager: "somemanager",
            office: "someoffice",
            orgUnit: "someorgunit",
            primaryRole: "someprimaryrole",
            published: true,
            secondaryRole: "somesecondaryrole",
            stackOverflow: "somestackoverflowurl",
            highlighted: false,
          },
        ]}
        loading={false}
      />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
