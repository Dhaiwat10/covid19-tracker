import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import styles from "./Card.module.css"

export default ({ text, data, type }) => {
  
  return (
    <Grid alignContent="center" item xs={8} sm={4} md={3}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography align="center" variant="subtitle1" style= {{ fontSize: "30px" }}>
          {text}
        </Typography>
        <Typography className={styles[type]} align="center" variant="h5"  style={{ fontSize: "40px", fontWeight: "500" }}>
          {data}
        </Typography>
      </Paper>
    </Grid>
  )
}
