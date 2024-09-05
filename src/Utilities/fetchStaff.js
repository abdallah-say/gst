import { getStaff } from "Services/staffServices";

export default async function fetchStaff(setRows) {
  try {
    const { status, data } = await getStaff();
  } catch (error) {}
}
