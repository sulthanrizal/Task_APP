import { Box } from "@chakra-ui/react";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImgListCheck = () => {
    return (
        <Box className="container-img-login">
            <FontAwesomeIcon icon={faListCheck} />
        </Box>
    )
}
export default ImgListCheck;