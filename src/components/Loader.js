import React from "react"
import styles from "./Loader.module.css"
import Container from "@material-ui/core/Container"

export default () => (
  <Container fixed style={{ height: "100vh" }}>
    <div className={styles.loader}></div>
  </Container>
)
