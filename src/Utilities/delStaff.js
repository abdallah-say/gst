import { delStaff } from "Services/staffServices";

export default async function DelStaff(staffID) {
  try {
    const { status } = await delStaff(staffID);
    if (status === 200) {
      alert("Staff Deleted!");
    }
  } catch (error) {
    console.error(error);
  }
}
