import { Box } from "@chakra-ui/react"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ImgUser = () => {
    return (
        <Box className="container-img-login">
            <FontAwesomeIcon icon={faUser} />
        </Box>
    )
}
export default ImgUser;