import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { deleteProject, getProject } from "../helpers/WebApi";
import MemberList from "./MemberList";
import MyButton from "./custom/MyButton";

const Project = (props) => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const history = useHistory();

  const handleDeleteClick = (e) => {
    deleteProject(project._id).then((result) => {
      if (result.status === "success") history.push("/profile");
    });
  };

  useEffect(() => {
    getProject(id)
      .then((resp) => {
        setProject(resp.project);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container maxWidth="md">
      {project ? (
        <Grid container justify="center" spacing={2}>
          <Grid item container justify="center" xs={12}>
            <Typography
              display="inline"
              align="center"
              color="textSecondary"
              variant="h5"
            >
              Project Title:
            </Typography>
            &nbsp;
            <Typography
              display="inline"
              align="center"
              color="textPrimary"
              variant="h5"
            >
              {project.name}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <MemberList title="Team Leaders" members={project.leaders} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MemberList title="Team Members" members={project.members} />
          </Grid>

          <Grid
            container
            justify="space-evenly"
            spacing={2}
            height="200px"
            item
            xs={12}
          >
            <MyButton>New Task</MyButton>
            <MyButton>Leave Project</MyButton>
            <MyButton onClick={handleDeleteClick}>Delete Project</MyButton>
          </Grid>
        </Grid>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default Project;
