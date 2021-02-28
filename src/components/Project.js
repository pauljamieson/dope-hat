import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../helpers/WebApi";
import MemberList from "./MemberList";
import MyButton from "./custom/MyButton";

const Project = (props) => {
  const { id } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    getProject(id)
      .then((resp) => {
        setProject(resp.project);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container maxWidth="md">
      {project && (
        <Grid container justify="center" spacing={2}>
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
