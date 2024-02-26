import { Box } from "@chakra-ui/react"

const DashboardContainer = ({ children }) => {
    return (
        <Box className="container-dashboard">
            {children}
        </Box>
    )
}
export default DashboardContainer;