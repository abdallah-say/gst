import { editStaffPassword } from "Services/staffServices";

export default async function editStaff(staffID, newPassword) {
    try {
        const { status } = await editStaffPassword(staffID, newPassword);
        if (status === 200) {
            alert("Password Edited");
        }
    } catch (error) {
        console.error(`Something went wrong: ${error}`);
    }
}
