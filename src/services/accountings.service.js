import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/accounting";

class AccountingService {
  getAccountings() {
    return axios.get(API_URL + "/", { headers: authHeader() });
  }
}
export default new AccountingService();
