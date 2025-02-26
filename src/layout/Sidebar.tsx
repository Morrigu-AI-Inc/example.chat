import AssistantList from "@/components/AssistantList";
import {
  Drawer,
  Typography,
  Stack,
  drawerClasses,
  Divider,
  Avatar,
} from "@mui/material";
import {
  HomeOutlined,
  SchoolOutlined,
  WorkOutlined,
} from "@mui/icons-material";

const BottomPart = () => {
  return (
    <Stack>
      <Divider />
      <Stack p={2} direction={"row"} spacing={2}>
        <Avatar sx={{ backgroundColor: "primary.main", color: "white" }}>
          J
        </Avatar>
        <Stack>
          <Typography variant="body1" fontWeight={500}>
            Jason St Cyr
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            jsonstcyr@gmail.com
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

const Sidebar = () => {
  const options: { value: string; label: string; icon: React.ReactNode }[] = [
    {
      value: "home",
      label: "Home",
      icon: (
        <HomeOutlined
          sx={{
            color: "text.secondary",
            fontSize: "1rem",
          }}
        />
      ),
    },
    {
      value: "work",
      label: "Work",
      icon: (
        <WorkOutlined
          sx={{
            color: "text.secondary",
            fontSize: "1rem",
          }}
        />
      ),
    },
    {
      value: "school",
      label: "School",
      icon: (
        <SchoolOutlined
          sx={{
            color: "text.secondary",
            fontSize: "1rem",
          }}
        />
      ),
    },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      <Stack
        sx={{ width: 240 }}
        flexGrow={1} // Ensures the sidebar takes up the full height of the viewport
      >
        <Stack p={1}>
          <AssistantList
            options={options}
            defaultValue="home"
            sx={{ width: "100%" }}
          />
        </Stack>
        <Divider />
        <Stack flexGrow={1} justifyContent="center">
          <Typography variant="body1">Sidebar content goes here.</Typography>
        </Stack>
        {/* Bottom Part of The Sidebar */}
        <BottomPart />
      </Stack>
    </Drawer>
  );
};

export default Sidebar;
