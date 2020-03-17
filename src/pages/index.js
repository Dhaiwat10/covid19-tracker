import React from "react"
import useStats from "../utils/useStats"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

import { Card, Loader } from "../components"

export default () => {
  const { stats, loading, error } = useStats("https://covid19.mathdro.id/api")

  if (loading) return <Loader/>
  if (error)
    return <p>There was an error fetching the data. Try refreshing the page.</p>

  return (
    <React.Fragment>
      <Typography align="center" variant="h4">
        COVID-19 tracker
      </Typography>
      <Typography style={{ marginTop: "20px" }} align="center" variant="h2">
        Global statistics
      </Typography>
      <Grid
        style={{ marginTop: "20px" }}
        container
        spacing={5}
        alignItems="center"
        justify="center"
      >
        <Card text="Confirmed cases" data={stats.confirmed.value} />

        <Card text="Recoveries" data={stats.recovered.value} />

        <Card text="Deaths" data={stats.deaths.value} />
      </Grid>
    </React.Fragment>
  )
}
