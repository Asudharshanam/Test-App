import { useEffect, useState } from "react";
import { Spinner, Table } from "reactstrap";
import { getSecurityPositions } from "../api/getSecurityPositions";

export default function SecurityPositions() {
  const [api, setApi] = useState({ loading: true, data: null });

  async function getSecurityPositionsData() {
    const response = await getSecurityPositions();
    setApi({ ...api, data: response, loading: false });
  }

  useEffect(() => {
    getSecurityPositionsData();
  }, []);

  if (api.loading) {
    return <Spinner className="loader">Loading...</Spinner>;
  }

  return (
    <>
      <h2 style={{ marginBottom: "25px" }}>Security Positions</h2>
      <Table hover bordered responsive striped>
        <thead>
          <tr>
            <th>#</th>
            {api.data.columns.map((column) => (
              <th>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {api.data.data.map((d, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                {d.map((t) => (
                  <td>{t}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
