import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  if (request.method === "POST") {
    const DATOCMS_TOKEN_FULL = process.env.DATOCMS_TOKEN_FULL;
    const client = new SiteClient(DATOCMS_TOKEN_FULL);

    const registroCriado = await client.items.create({
      itemType: "976005",
      ...request.body,
      //   title: "TEST",
      //   imageUrl: "https://http.cat/100.jpg",
      //   creatorSlug: "me",
    });

    response.json({ registroCriado: registroCriado });
    return;
  }
  response.status(404).json({ message: "Ainda não temos nada no GET." });
}
