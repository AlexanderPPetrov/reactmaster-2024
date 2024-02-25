import { useQuery } from "@tanstack/react-query";
import { fetchStudents } from "../../api/data-service.js";

export function useFetchStudents() {
    return useQuery( {
        queryKey: ['students'],
        queryFn: fetchStudents
    })
}