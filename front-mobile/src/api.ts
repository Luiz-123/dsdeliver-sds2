import axios from "axios";

const API_URL = 'https://luiz--sds2.herokuapp.com';

export function fechtOrders() {
   return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number) {
   return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}