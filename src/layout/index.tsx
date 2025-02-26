import {Stack} from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
    return (
        <Stack direction={"row"} flexGrow={1} minHeight={"100vh"} sx={{backgroundColor: "background.default"}}>
            <Stack width={"240px"}>
                <Sidebar/>
            </Stack>
            <Stack flexGrow={1}>
                <Header/>
                <Stack sx={{padding: 2}} flexGrow={1}>
                    {children}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Layout;

