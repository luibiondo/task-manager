import axios from "axios"; //importa o axios

const api = axios.create({ // cria o url base pra poder usar em outros lugares
  baseURL: "https://super-duper-space-carnival-97qxv6699x7rcp9r6-3000.app.github.dev", // link do back
});

export default api;