"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function updateEmployee(employeeId: string, formData: FormData){
  const cleanData = new FormData()
  for (const [key, value] of formData.entries()) { //IMLKAEJDOIPQWJDQPOIWDJAOISKMNDAS WHYYYYYYYYYYYYYY
    if (!key.startsWith("$")) {
      cleanData.append(key, value);
    }
  }
  const response = await fetch (`${API_URL}/employees/${employeeId}`, {
    method: "PATCH",
    headers: {
      ...AuthHeaders()
    },
    body: cleanData,
  })
  console.log(await response.json())
  if (response.status === 200) revalidateTag("dashboard:employees");
  if (response.status === 200) revalidateTag(`dashboard:employees:${employeeId}`);
  return;
}