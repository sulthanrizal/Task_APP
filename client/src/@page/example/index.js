import { Box, Flex, ListItem, UnorderedList, cookieStorageManager } from "@chakra-ui/react"
import './example.scss'
import BackgorundImgExample from "./backgroundImgExample";
import ImgCalender from "../login/imgSvg/imgCalendar";
import ImgListCheck from "../login/imgSvg/imgListCheck";
import ImgUser from "../login/imgSvg/imgUser";
import { useNavigate } from "react-router-dom";
import { onClickNav } from "../../@components/helperOnClick";

const Example = () => {
    const navigate = useNavigate()
    return (
        <Box className="container-example">
            <BackgorundImgExample />
            <Flex className="header-example">
                <h3>Les't make a contract</h3>
                <Box className="list-example">
                    <h4>I will</h4>
                    <UnorderedList className="list-example-flex">
                        <ListItem>* Plan tasks.</ListItem>
                        <ListItem>🎯 Set goals.</ListItem>
                        <ListItem>🚶‍♂️ Take breaks.</ListItem>
                        <ListItem>💪 Move and refresh.</ListItem>
                        <ListItem>📝 Prioritize.</ListItem>
                        <ListItem>🔍 Breaks tasks down.</ListItem>
                        <ListItem>🚫 No multitasking.</ListItem>
                        <ListItem>📵 Minimize distractions.</ListItem>
                        <ListItem>⏰ Limit sosial media.</ListItem>
                    </UnorderedList>
                </Box>
            </Flex>
            <Box className="btn-example">
                <Box className="btn-example-agree">
                    <p onClick={() => { onClickNav({ path: '/todobox', navigate }) }}>I AGREE</p>
                </Box>
            </Box>
            <Box className="example-footer">
                <Flex className="example-footer-img">
                    <Box className="img-btn-example">
                        <ImgCalender />
                    </Box>
                    <Box className="img-btn-example">
                        <ImgListCheck />
                    </Box>
                    <Box className="img-btn-example">
                        <ImgUser />
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}
export default Example;