import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const {user, loading} = useContext(AuthContext);
        console.log(user)
        const [axiosSecure] = useAxiosSecure();
        const {data: isInstractor, isLoading: isInstractorLoading} = useQuery({
            queryKey: ['isInstractor', user?.email],
            enabled: !loading,
            queryFn: async () => {
                const res = await axiosSecure.get(`/users/instractor/${user?.email}`);
                return res.data.instractor;
            }
        })
        return [isInstractor, isInstractorLoading]
   
};

export default useInstructor;