import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProject } from "../helpers/WebApi";
import MemberList from "./MemberList";
import MyButton from "./MyButton";

const Project = (props) => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProject(id, user.username, user.session_id).then((resp) => {
      console.log(resp);
      setProject(resp.project);
    });
  }, [id, user]);

  return (
    <Container maxWidth="xl">
      {project && (
        <Grid container spacing={2} s>
          <Grid container justify="center" alignItems="center" item xs={12}>
            <Box textAlign="center">
              <Typography color="textPrimary" variant="h5">
                {project.name}
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            justify="flex-end"
            alignItems="flex-start"
            item
            xs={12}
            md={4}
          >
            <MemberList title="Team Leaders" members={project.leaders} />
          </Grid>
          <Grid
            container
            justify="flex-start"
            alignItems="flex-start"
            item
            xs={12}
            md={4}
          >
            <MemberList title="Team Members" members={project.members} />
          </Grid>
          <Grid
            container
            justify="flex-start"
            alignItems="flex-start"
            item
            xs={12}
            md={4}
          >
            <MyButton>New Task</MyButton>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Project;
