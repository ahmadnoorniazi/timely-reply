import React from 'react';
import NewForm from "../../Components/Create/NewForm";
import Box from "@material-ui/core/Box";
import Template from "../../Components/Create/Template";
import Grid from "@material-ui/core/Grid";


const CreatePage = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <NewForm />
        </Grid>
        <Grid item xs={3}>
          <Template />
        </Grid>
        <Grid item xs={3}>
          <Template />
        </Grid>
        <Grid item xs={3}>
          <Template />
        </Grid>
        <Grid item xs={3}>
          <Template />
        </Grid>
      </Grid>
    )
}

export default CreatePage