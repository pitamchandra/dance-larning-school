import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useCart = () => {
    const {user, loading} = useContext(AuthContext)

    const {  refetch, data: cart =[]} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
        const res = await fetch (`https://dance-learning-school-server-ochre.vercel.app/carts?email=${user?.email}`)
        return res.json()
    }
    })
    
    return [cart , refetch]
};

export default useCart;