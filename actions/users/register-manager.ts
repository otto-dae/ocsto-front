"use server";
import { API_URL } from "@/constants"
import { AuthHeaders } from "@/helpers/authHeaders";

export default async function registerManager(managerId: string, formData: FormData) {
  let data:any = {}
  data.userEmail = formData.get("userEmail")
  data.userPassword = formData.get("userPassword")
  data.userRoles = "Manager"

  const response = await fetch(`${API_URL}/auth/register/${managerId}?role=manager`, {
    method: "POST",
    headers: {
      ...AuthHeaders(),
      'content-type': 'application/json',
    },
    body: JSON.stringify(data)
  })
}