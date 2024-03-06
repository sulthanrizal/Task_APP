import ImgCalender from '@page/login/imgSvg/imgCalendar'
import './profile.scss'
import ImgListCheck from '@page/login/imgSvg/imgListCheck'
import ImgUser from '@page/login/imgSvg/imgUser'
import { onClickNav } from '@components/helperOnClick'
import { useNavigate } from 'react-router-dom'
const { Box, Text } = require("@chakra-ui/react")


const Profile = () => {
    const navigate = useNavigate()
    return (
        <Box className="container-profile">
            <Box className="header-text-profile">
                <Text>Profile</Text>
            </Box>
            <Box className="list-profile">
                <Text>Account </Text>
                <Text>{'>'}</Text>
            </Box>
            <Box className="list-profile">
                <Text>Notifications </Text>
                <Text>{'>'}</Text>
            </Box>
            <Box className="list-profile">
                <Text>Help </Text>
                <Text>{'>'}</Text>
            </Box>
            <Box className="list-profile">
                <Text>Storage and data </Text>
                <Text>{'>'}</Text>
            </Box>
            <Box className="list-profile">
                <Text>Invite a friends </Text>
                <Text>{'>'}</Text>
            </Box>
            <Box className="list-profile" onClick={() => { onClickNav({ path: '/', navigate }) }}>
                <Text>Logout </Text>
                <Text>{'>'}</Text>
            </Box>
            <Box className='footer-profile'>
                <Box className='btn-footer-profile-bottom'>
                    <Box className='btn-img-profile'>
                        <ImgCalender />
                    </Box>
                    <Box className='btn-img-profile' onClick={() => { onClickNav({ path: '/todobox', navigate }) }}>
                        <ImgListCheck />
                    </Box>
                    <Box className='btn-img-profile' onClick={() => { onClickNav({ path: '/profile', navigate }) }}>
                        <ImgUser />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Profile;