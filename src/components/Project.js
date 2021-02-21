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
    getProject(id).then((resp) => {
      console.log(resp);

      setProject(resp.project);
    });
  }, []);

  return (
    <Container maxWidth="xl">
      {project && (
        <Grid container justify="space-evenly" spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" color="textPrimary" variant="h5">
              <Typography color="textSecondary" variant="span">
                Project Title:{" "}
              </Typography>

              {project.name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MemberList title="Team Leaders" members={project.leaders} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MemberList title="Team Members" members={project.members} />
          </Grid>
          <Grid container justify="center" item xs={12} sm={6}>
            <MyButton>New Task</MyButton>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Project;
