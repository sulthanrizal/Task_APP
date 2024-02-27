import { Box, Flex } from "@chakra-ui/react";
import './calendarbar.scss'
import { useEffect, useState } from "react";
import moment from "moment";


const CalendarBar = () => {

    const [date, setDate] = useState([])
    const today = new Date();
    const listDay = () => {
        // const a = 1;
        // const b = 7;
        const array = []
        const firstDate = moment(today).format("YYYY-M-D")
        const endDate = moment(today).add('day', 7).format("YYYY-M-D");
        for (let TotalDay = firstDate; TotalDay < endDate; TotalDay = moment(TotalDay).add('day', 1).format('YYYY-M-D')) {
            array.push(TotalDay)
            setDate(array)
        }
    }
    console.log(date, ' data')

    useEffect(() => {
        listDay()
    }, [])


    return (
        <Box className="container-calendar">
            <Box>Today</Box>
            <Flex className="container-date">
                {
                    date.map((tanggal) => {
                        return (
                            <Box className="list-date">
                                <Box className="list-date-day">
                                    {moment(tanggal).format('ddd')}
                                </Box>

                                <Box className="list-date-tanggal">
                                    {moment(tanggal).format('D')}
                                </Box>
                            </Box>
                        )
                    })
                }
            </Flex>
        </Box>
    )
}
export default CalendarBar;