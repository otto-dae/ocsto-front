"use server";
import { API_URL } from "@/constants"
import { AuthHeaders } from "@/helpers/authHeaders";

export default async function registerEmployee(employeeId: string, formData: FormData) {
  let data:any = {}
  data.userEmail = formData.get("userEmail")
  data.userPassword = formData.get("userPassword")
  data.userRoles = "Employee"

  const response = await fetch(`${API_URL}/auth/register/${employeeId}?role=employee`, {
    method: "POST",
    headers: {
      ...AuthHeaders(),
      'content-type': 'application/json',
    },
    body: JSON.stringify(data)
  })
}