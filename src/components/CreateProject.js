import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import MyButton from "./custom/MyButton";
import MyOutlinedField from "./custom/MyOutlinedField"
import { createProject } from "../helpers/WebApi";
import { useHistory } from "react-router-dom";

const CreateProject = (props) => {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const { project_name } = e.target;
    createProject(project_name.value)
      .then((resp) => history.push(`/project/${resp.project_id}`))
      .catch((err) => console.log(err));
  };

  return (
    <Box marginTop="10px">
      <Container maxWidth="sm">
        <form onSubmit={onSubmit}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <MyOutlinedField
                  inputProps={{ autoComplete: "off" }}
                  required
                  id="project_name"
                  label="Project Name"
                />
              </Box>
            </Grid>
            <Grid item sm={12}>
              <Box textAlign="center">
                <MyButton type="submit">Create</MyButton>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default CreateProject;
