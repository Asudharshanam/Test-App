import { authHeader } from "../helpers";
import { handleResponse, config } from "./utils";

export async function getSecurityTransactions() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return await fetch(
    `${config.apiUrl}/security-transactions`,
    requestOptions
  ).then(handleResponse);
}
