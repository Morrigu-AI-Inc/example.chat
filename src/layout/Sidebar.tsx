import AssistantList from "@/components/AssistantList";
import {
  Drawer,
  Typography,
  Stack,
  drawerClasses,
  Divider,
  Avatar,
  Card,
} from "@mui/material";
import {
    Assistant,
  AutoAwesome,
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
      value: "assistant1",
      label: "Assistant 1",
      icon: (
        <Assistant
          sx={{
            color: "text.secondary",
            fontSize: "1rem",
          }}
        />
      ),
    },
    {
      value: "assistant2",
      label: "Assistant 2",
      icon: (
        <Assistant
          sx={{
            color: "text.secondary",
            fontSize: "1rem",
          }}
        />
      ),
    },
    {
      value: "assistant3",
      label: "Assistant 3",
      icon: (
        <Assistant
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
            defaultValue="assistant1"
            sx={{ width: "100%" }}
          />
        </Stack>
        <Divider />
        <Stack flexGrow={1} justifyContent="space-between">
          <Stack>
            {/* Placeholder for threads listing */}
            threads should go here but OpenAI doesn't allow for listing threads.
          </Stack>
          <Stack p={1} spacing={2}>
            <Card>
              <Stack direction={"row"} spacing={1}>
                <AutoAwesome
                  sx={{ color: "text.secondary", fontSize: "1rem" }}
                />
                <Typography variant="body1" fontWeight={500}>
                  Sidebar Title
                </Typography>
              </Stack>

              <Stack direction={"row"} spacing={1}>
                <Typography variant="body2" color={"text.secondary"}>
                    This is some content inside the sidebar.
                </Typography>
                </Stack>
            </Card>
          </Stack>
        </Stack>
        {/* Bottom Part of The Sidebar */}
        <BottomPart />
      </Stack>
    </Drawer>
  );
};

export default Sidebar;
