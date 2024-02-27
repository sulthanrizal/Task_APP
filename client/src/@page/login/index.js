import { Box, Flex } from "@chakra-ui/react"
import './login.scss'
import BackgroundImgLogin from "./backgorundImgLogin";
import { useNavigate } from "react-router-dom";
import { onClickNav } from "../../@components/helperOnClick";
import ImgCalender from "./imgSvg/imgCalendar";
import ImgListCheck from "./imgSvg/imgListCheck";
import ImgUser from "./imgSvg/imgUser";
import ImgSvgHome from "@page/home/imgSvg/imgSvgHome";

const Login = () => {
    const navigate = useNavigate()
    return (
        <Box className="container-login">
            <BackgroundImgLogin />
            <Flex className="header-login">
                <span>Log in to HabitHUB</span>
                <p>Welcome back! Sign in using your social account or email to continue us</p>
                <Flex className="btn-login-home-img">
                    <ImgSvgHome />
                </Flex>
                <Flex className="line-login-header">
                    <hr />
                    OR
                    <hr />
                </Flex>
            </Flex>
            <Box className="input-login-body">
                <Flex className="input-login">
                    <Box className="input-2">
                        <input name="email" type="email" placeholder="Email" />
                    </Box>
                    <Box className="input-2">
                        <input name="password" type="password" placeholder="Password" />
                    </Box>
                    <Box className="btn-login">
                        <p onClick={() => { onClickNav({ path: '/example', navigate }) }}>Login</p>
                    </Box>
                </Flex>
            </Box>
            <Box className="login-footer">
                <Flex className="login-footer-img">
                    <Box className="img-btn-login">
                        <ImgCalender />
                    </Box>
                    <Box className="img-btn-login">
                        <ImgListCheck />
                    </Box>
                    <Box className="img-btn-login">
                        <ImgUser />
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}
export default Login;