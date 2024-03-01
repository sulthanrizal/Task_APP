import { Box, Flex, Text } from "@chakra-ui/react";
import './calendarbar.scss'
import { useEffect, useState } from "react";
import moment from "moment";


const CalendarBar = ({ selectedDate, setSelectedDate }) => {

    const [date, setDate] = useState([])
    const today = new Date();
    const listDay = () => {
        const array = []
        const firstDate = moment(today).format("YYYY-MM-DD")
        const endDate = moment(today).add('day', 7).format("YYYY-MM-DD");
        for (let TotalDay = firstDate; TotalDay < endDate; TotalDay = moment(TotalDay).add('day', 1).format('YYYY-MM-DD')) {
            array.push(TotalDay)
            setDate(array)
        }
    }

    useEffect(() => {
        listDay()
    }, [])


    return (
        <Box className="container-calendar">
            <Box className="calendar-title">Today</Box>
            <Flex className="container-date">
                {
                    date.map((tanggal, index) => {
                        return (
                            <Box className="list-date" key={index} style={{ background: tanggal === selectedDate ? "#BA68C8" : "#DEB5E4" }}>
                                <Box onClick={() => { setSelectedDate(tanggal) }}>
                                    <Box className="list-date-day" >
                                        <Text>
                                            {moment(tanggal).format('ddd')}
                                        </Text>
                                    </Box>
                                    <Box className="list-date-tanggal">
                                        <Text>
                                            {moment(tanggal).format('D')}
                                        </Text>
                                    </Box>
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