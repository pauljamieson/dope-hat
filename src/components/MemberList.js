import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getUserById } from "../helpers/WebApi";
import { useSelector } from "react-redux";
import AddMembers from "./AddMembers";

const MemberList = (props) => {
  const { members, title, isLeader } = props;
  const [listMembers, setListMembers] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const promises = members.map((id) => getUserById(id, user.username));
    Promise.all(promises)
      .then((vals) => setListMembers(vals))
      .catch((err) => console.log(err));
  }, [members, user.username]);

  return (
    <Grid justify="center" container>
      <Box minWidth="300px" flexGrow={1}>
        <Box textAlign="center">
          <Typography color="textSecondary" variant="body1">
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
          {isLeader && <AddMembers listName={title} />}
        </List>
      </Box>
    </Grid>
  );
};

export default MemberList;
