import { postStaff } from "Services/staffServices";

export default async function AddStaff(info) {
  try {
    const { status } = await postStaff(info);
    if (status === 201) {
      alert("Staff added successfully!");
    }
  } catch (error) {
    console.error(error);
  }
}
