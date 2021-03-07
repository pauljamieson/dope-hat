import { Box, List, Typography, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import AddMembers from "./AddMembers";
import CurrentMember from "./CurrentMember";


const MemberList = (props) => {
  const { type } = props;
  const list = useSelector((state) =>
    type === 1 ? state.projectLeaders : state.projectMembers
  );
  const projectData = useSelector((state) => state.projectData);

  return (
    <Grid justify="center" container>
      <Box minWidth="300px" flexGrow={1}>
        <Box textAlign="center">
          <Typography color="textSecondary" variant="body1">
            {type === 1? "Team Leaders": "Team Members"}
          </Typography>
        </Box>
        <List dense>
          {list.members.map((member, idx) => (
            <CurrentMember key={idx} type={type} _id={member} />
          ))}
          {projectData.isLeader &&  <AddMembers type={type} />}
        </List>
      </Box>
    </Grid>
  );
};

export default MemberList;
