import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getUserById } from "../helpers/WebApi";
import { useSelector } from "react-redux";

const MemberList = (props) => {
  const { members, title } = props;
  const [listMembers, setListMembers] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const promises = members.map((id) =>
      getUserById(id, user.username, user.session_id)
    );
    Promise.all(promises).then((vals) => setListMembers(vals));
  }, [user]);

  return (
    <Box width="300px">
      <Box textAlign="center">
        <Typography color="textPrimary" variant="body1">
          {title}
        </Typography>
      </Box>
      <List dense>
        {listMembers.map((member, idx) => (
          <ListItem divider key={idx} button onClick={() => alert(member.id)}>
            <ListItemText
              primaryTypographyProps={{ color: "textPrimary" }}
              primary={member.display_name}
            ></ListItemText>
          </ListItem>
        ))}
        <ListItem divider button onClick={() => alert("add new member")}>
          <Box textAlign="center" clone>
            <ListItemText
              primaryTypographyProps={{ color: "textPrimary" }}
              primary="+"
            ></ListItemText>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default MemberList;
