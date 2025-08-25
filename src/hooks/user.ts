import { useQuery } from "@tanstack/react-query"

type Account = {
    username?: string
    email?: string
    money?: number
    password?: string
}

const defaultAccount: Account = {
    username: "",
    email: "",
    money: 0,
    password: "",
}

const useUser = (account: Account = defaultAccount) => {
    return useQuery({
        queryKey: ["user"],
        queryFn: () => account,     // chỉ return local
        initialData: account,
    })
}

export default useUser
