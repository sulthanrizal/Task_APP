import { Box, Flex } from "@chakra-ui/layout"
import ImgColorPurple from "../../@components/imgSvg/imgColorPurple";
import './home.scss'
import ImgColorPink from "../../@components/imgSvg/imgColorPink";
import ImgColorBlue from "../../@components/imgSvg/imgColorBlue";
import { useNavigate } from "react-router-dom";
import { onClickNav } from "../../@components/helperOnClick";
import ImgSvgHome from "./imgSvg/imgSvgHome";


const Home = () => {
    const navigate = useNavigate()
    return (
        <Box className="container-home">
            <Box className="home-header">
                <Box className="home-background-img">
                    <ImgColorPurple />
                    <ImgColorPink />
                    <ImgColorBlue />
                </Box>
                <Box className="home-body">
                    <h1>Do your</h1>
                    <h1>task</h1>
                    <h1>quickly</h1>
                    <h1>and easy</h1>
                    <p>Your task, your rules, our support</p>
                </Box>
                <Box className="btn-login-home">
                    <p onClick={() => onClickNav({ path: '/login', navigate })}>Login</p>
                    <a href="./register">Create an account</a>
                    <Flex className="line-home-body">
                        <hr />
                        OR
                        <hr />
                    </Flex>
                    <Flex className="btn-login-home-img">
                        <ImgSvgHome />
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
export default Home;