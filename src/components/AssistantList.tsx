import React from 'react';
import { ListItemAvatar, ListItemText, MenuItem, Select, SelectProps, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAvatar from '@mui/material/Avatar';
import { ArrowDropDown } from '@mui/icons-material';

const Avatar = styled(MuiAvatar)(({ theme }) => ({
    backgroundColor: "transparent",
    color: "text.primary",
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    padding: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
}));

type AssistantListProps = SelectProps<string> & {
    options: { value: string; label: string; icon: React.ReactNode }[];
}

const AssistantList: React.FC<AssistantListProps> = ({ options, ...props }) => {
    return (
        <Select
            {...props}
            IconComponent={ArrowDropDown}
            renderValue={(selected) => (
                <Stack direction="row" alignItems="center" spacing={1}>
                    {options.find(option => option.value === selected)?.icon}
                    <Typography>{options.find(option => option.value === selected)?.label}</Typography>
                </Stack>
            )}
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    <ListItemAvatar>
                        <Avatar>
                        {option.icon}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={option.label} sx={{
                        marginLeft: 0,
                        fontSize: '0.875rem',
                        color: 'text.secondary',
                        pl:0
                    }} />
                </MenuItem>
            ))}
        </Select>
    );
};

export default AssistantList;