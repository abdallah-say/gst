import { getStaff } from "Services/staffServices";

export default async function fetchStaff(setRows, config) {
  try {
    const { status, data } = await getStaff();
    if (status === 200) {
      const staff = data.staff;
      const all_staff = staff.map((staff) => {
        const formattedStaff = {};
        if (config.includes("Name")) formattedStaff.Name = staff.Name;
        if (config.includes("Email")) formattedStaff.Email = staff.email;
        if (config.includes("Status")) {
          if (staff.admin === 1) {
            formattedStaff.Status = "Admin";
          } else {
            formattedStaff.Status = "Staff";
          }
        }
        return formattedStaff;
      });
      setRows(all_staff);
    }
  } catch (error) {}
}
