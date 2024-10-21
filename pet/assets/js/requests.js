// ----------------- Requisições -----------------

const API_KEY = "954302b8-837c-48c8-b0d8-7c454dc5f889";
const API_KEY_LOCAL =
  "3RHKr8ek6dR9pVnzX1v0sK6pjtF21MZXR0DQpkzletNeYPPSoCaZVh9eFWRy6qNX";

const criarContato = async (nome, email, telefone) => {
  const corpoRequisicaoContato = JSON.stringify({
    name: nome,
    createdBy: { id: 40952 },
    phones: [{ number: telefone }],
    emails: email ? [{ address: email }] : [],
    responsible: { id: 65856 },
  });

  const response = await fetch("https://api.moskitcrm.com/v2/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: API_KEY,
    },
    body: corpoRequisicaoContato,
  });

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.statusText}`);
  }

  return response.json();
};

const criarNegocio = async (nome, idContato) => {
  const corpoRequisicaoNegocio = JSON.stringify({
    name: nome,
    createdBy: { id: 40952 },
    stage: { id: 125412 },
    status: "OPEN",
    contacts: [{ id: idContato }],
    responsible: { id: 65856 },
    entityCustomFields: [
      { id: "CF_eZYm9BiKiLpJrD47", options: [336517] },
      { id: "CF_eZYm9BiKiRjK0D47", options: [365156] },
      { id: "CF_42AmaJi2iLY8oDjl", options: [341247] },
    ],
    dealProducts: [
      {
        quantity: 1,
        price: 130000,
        initialPrice: 130000,
        finalPrice: 130000,
        product: {
          id: 15626,
          name: "CREMAÇÃO PET - USO FUTURO",
          active: true,
          price: 130000,
        },
      },
    ],
    price: 130000,
  });

  const response = await fetch(
    "https://api.moskit.empresavila.com.br/lead/proxy",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: API_KEY_LOCAL,
      },
      body: corpoRequisicaoNegocio,
    }
  );

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.statusText}`);
  }

  return response.json();
};

export { criarContato, criarNegocio };
