import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { deleteProject, getProject, leaveProject } from "../helpers/WebApi";
import MemberList from "./MemberList";
import MyButton from "./custom/MyButton";
import { useDispatch, useSelector, batch } from "react-redux";
import {
  clearProjectLeaders,
  clearProjectMembers,
  clearProjectData,
  setProjectData,
  setProjectLeaders,
  setProjectMembers,
} from "../action";

const Project = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const projectData = useSelector((state) => state.projectData);

  const handleDeleteClick = (e) => {
    if (projectData.isLeader) {
      deleteProject(projectData._id).then((resp) => {
        if (resp.status === "success" && resp.delete) history.push("/profile");
      });
    }
  };

  const handleLeaveClick = (e) => {
    leaveProject(projectData._id).then((resp) => {
      if (resp.status === "success") history.push("/profile");
    });
  };

  useEffect(() => {
    getProject(id)
      .then((resp) => {
        if (resp.status === "success")
          batch(() => {
            dispatch(
              setProjectData(
                resp.project.name,
                resp.project._id,
                resp.is_leader
              )
            );
            dispatch(setProjectLeaders(resp.project.leaders, resp.project._id));
            dispatch(setProjectMembers(resp.project.members, resp.project._id));
          });
        else {
          history.push("/profile");
        }
      })
      .catch((err) => console.log(err));

    return () => {
      batch(() => {
        dispatch(clearProjectData());
        dispatch(clearProjectLeaders());
        dispatch(clearProjectMembers());
      });
    };
  }, [id]);

  return (
    <Container maxWidth="md">
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
            {projectData.name}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <MemberList type={1} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MemberList type={2} />
        </Grid>

        <Grid container justify="space-evenly" spacing={2} item xs={12}>
          <MyButton onClick={handleLeaveClick}>Leave Project</MyButton>
          <MyButton onClick={handleDeleteClick}>Delete Project</MyButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Project;
