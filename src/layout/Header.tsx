import { Breadcrumbs, OutlinedInput, Stack, Typography } from "@mui/material";
import {CancelOutlined, SearchOutlined} from '@mui/icons-material';
import { useRouter } from "next/router";
import { useMemo } from "react";


const Header = () => {
    const router = useRouter();
    const threadId = useMemo(() => router.query.threadId as string, [router.query.threadId]);
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: "none", md: "flex" },
        width: "100%",
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        maxWidth: { sm: "100%", md: "1700px" },
        pt: 1.5,
        pl: 2,
        pr: 2,
        pb: 1.5,
        backgroundColor: "background.paper",
      }}
      spacing={2}
    >
        <Stack>
            <Breadcrumbs>
                <Typography variant="body1" component="div">
                Home
                </Typography>
                <Typography variant="body1" component="div">
                Thread
                </Typography>
                {threadId && (
                    <Typography variant="body1" component="div">
                    {threadId}
                    </Typography>
                )}
            </Breadcrumbs>
        </Stack>
        <Stack>
            <OutlinedInput
              placeholder="Search..."
              sx={{
                color: "text.secondary",
              }}
              startAdornment={
               <SearchOutlined sx={{
                color: "text.secondary",
                fontSize: "1.25rem",
                mr: 1,
               }} />
              }
              endAdornment={
                <CancelOutlined  sx={{
                    color: "text.secondary",
                    fontSize: "1.25rem",
                    ml: 1,
                    cursor: "pointer",
                }}/>
              }
            />
        </Stack>
    </Stack>
  );
};

export default Header;
