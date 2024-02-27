import AxiosInstance from "@service/axios"

export const readTodos = async ({ setTodos }) => {
    try {
        const { data } = await AxiosInstance({
            method: "GET",
            url: "/task",
            headers: {
                Authorization: "Bearer vg_-7Pc_SHyxPqTkiHsSoWnFVuUlVYI7K6RdovVOXB3dylIVkA"
            }
        })

        setTodos(data.items);
    } catch (err) {

    }
}