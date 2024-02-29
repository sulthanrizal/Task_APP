import AxiosInstance from "@service/axios"


export const readTodos = async ({ setTodos }) => {
    try {
        const { data } = await AxiosInstance({
            method: "GET",
            url: "/task"
        })
        setTodos(data.items);
    } catch (err) {
console.log(err)
    }
}

export const createTodos = async ({data,navigate}) => {
    try {
        console.log('masuk');
            await AxiosInstance({
            method: 'POST',
            url: '/task',
            data:[{
                title:data.title,
                completed:data.completed
            }]
        });
        navigate("/todobox")
    } catch (error) {
        console.log('Terjadi kesalahan saat mengirim data:', error);
    }
};



