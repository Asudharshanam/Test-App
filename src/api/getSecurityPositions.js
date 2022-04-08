import { authHeader } from "../helpers";
import { handleResponse, config } from "./utils";

export async function getSecurityPositions() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return await fetch(
    `${config.apiUrl}/security-positions`,
    requestOptions
  ).then(handleResponse);
}
