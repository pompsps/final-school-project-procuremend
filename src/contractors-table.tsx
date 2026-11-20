"use client";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient";

function ContractorsTable() {
  const [contractors, setContractors] = useState([]);

  useEffect(() => {
    getContractors();
  }, []);

  async function getContractors() {
    const { data, error } = await supabase.from("contractor_table").select("*");
    if (error) {
      console.error("Error fetching contractors:", error);
    } else {
      setContractors(data);
    }
  }

  return (
    <div>
      <h1>Contractors</h1>
      <ul>
        {contractors.map((contractor) => (
          <li key={contractor.contractor_id}>
            {contractor.contractor_username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContractorsTable;
