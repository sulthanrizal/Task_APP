import { Box } from "@chakra-ui/react"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImgCalender = () => {
    return (
        <Box className="container-img-login">
            <FontAwesomeIcon icon={faCalendarDays} />
        </Box>
    )
}
export default ImgCalender;

