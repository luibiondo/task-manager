import axios from "axios"; //importa o axios

const api = axios.create({ // cria o url base pra poder usar em outros lugares sem repetir
  baseURL: "https://symmetrical-parakeet-g4wpwqxp94pf9q7p-3000.app.github.dev/", // link do back
});

export default api;