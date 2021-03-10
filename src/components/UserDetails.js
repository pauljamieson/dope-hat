import { Grid, Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import MyOutlinedField from "./custom/MyOutlinedField";


const UserDetails = (props) => {
  const user = useSelector((state) => state.user);
  return (
    <form>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box textAlign="center">
            <MyOutlinedField label="Username" value={user.username} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box textAlign="center">
            <MyOutlinedField
              label="Display Name"
              value={user.display_name}
            />
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserDetails;
