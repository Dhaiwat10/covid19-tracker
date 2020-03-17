import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

export default ({ text, data }) => {
  return (
    <Grid alignContent="center" item xs={8} sm={4} md={3}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography align="center" variant="subtitle1">
          {text}
        </Typography>
        <Typography align="center" variant="h5">
          {data}
        </Typography>
      </Paper>
    </Grid>
  )
}
