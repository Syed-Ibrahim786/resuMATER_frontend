import { api } from "@/service/api";


export const analyze = (data) => api.post("/upload",data);