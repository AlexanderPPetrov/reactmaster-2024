import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/data-service.js";

export function useFetchProducts() {
    return useQuery( {
        queryKey: ['products'],
        queryFn: fetchProducts
    })
}