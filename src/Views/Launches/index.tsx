import { Box, CircularProgress, Grid } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useLaunchesQuery } from "./../../generated/graphql";
import Card from "../../Components/Card/index";
import styles from "./styles";
import { Link } from "react-router-dom";
const Index: React.FC = () => {
  const classes = styles();
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<number>(0);
  const { data, loading, error } = useLaunchesQuery({
    variables: {
      limit: 9,
      offset: offset,
    },
  });

  useEffect(() => {
    if (ref.current) {
      ref!.current!.scrollTop = 0;
    }
  }, [offset]);

  useEffect(() => {}, [data]);

  const rendered =
    data &&
    data!.launches!.map((val, i) => {
      return (
        <Link to={`/launches/${val?.flight_number}`}>
          <Card
            identifier={val?.flight_number}
            topLeft={val?.rocket?.rocket_name}
            topLeftBottom={val?.mission_name}
            center={val?.launch_success === false ? "Failure" : "Success"}
            topRight={val?.launch_year}
          />
        </Link>
      );
    });
  return (
    <>
      {loading ? (
        <CircularProgress style={{ margin: "auto" }} />
      ) : (
        <div ref={ref} className={classes.root}>
          <Grid
            container
            item
            justify="center"
            xs={12}
            style={{ padding: "5%" }}
          >
            {rendered && [...rendered]}
          </Grid>
          <Box display="flex" margin="5% 0" justifyContent="center">
            <Box width="20%" display="flex" justifyContent="space-between">
              <span
                className={classes.arrowLeft}
                onClick={() =>
                  setOffset((prev) => (prev - 9 >= 0 ? prev - 9 : prev))
                }
              />
              <span
                className={classes.arrowRight}
                onClick={() => setOffset((prev) => prev + 9)}
              />
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

export default Index;
