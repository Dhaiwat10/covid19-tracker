import React from "react"
import useStats from "../utils/useStats"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import { Card, Loader } from "../components"

export default () => {
  const { stats, loading, error } = useStats(
    "https://coronavirus-tracker-api.herokuapp.com/v2/latest"
  )

  if (loading) return <Loader />
  if (error)
    return <p>There was an error fetching the data. Try refreshing the page.</p>

  return (
    <React.Fragment>
      <Typography align="center" variant="h4" style={{ color: "#e827b4" }}>
        COVID-19 TRACKER
      </Typography>
      <Typography
        style={{ marginTop: "20px", fontWeight: "bold" }}
        align="center"
        variant="h2"
      >
        GLOBAL STATISTICS
      </Typography>
      <Grid
        style={{ marginTop: "20px" }}
        container
        spacing={5}
        alignItems="center"
        justify="center"
      >
        <Card
          text={"Confirmed cases"}
          data={stats.latest.confirmed}
          type="orange"
        />

        <Card text="Recoveries" data={stats.latest.recovered} type="green" />

        <Card text="Deaths" data={stats.latest.deaths} type="red" />
      </Grid>
    </React.Fragment>
  )
}
