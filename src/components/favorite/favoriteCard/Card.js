import React, { Component } from "react";
import PropTypes from "prop-types";
// Utilities
import { getRequest } from "../../../redux/operations";
import {
  Box,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { SyncRounded, DeleteRounded } from "@mui/icons-material";

class CardComponent extends Component {
  _isMounted = false;

  static propTypes = {
    city: PropTypes.string.isRequired,
  };

  state = {
    data: null,
    shouldUpdate: false,
  };
  componentDidMount() {
    this._isMounted = true;

    const { city } = this.props;
    getRequest(city).then((res) => {
      if (this._isMounted) {
        this.setState({ data: res.data });
      }
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const { city } = this.props;
    if (prevState.shouldUpdate !== this.state.shouldUpdate) {
      getRequest(city).then((res) => this.setState({ data: res.data }));
    }
  }

  handleUpdate = () => {
    this.setState((prevState) => ({ shouldUpdate: !prevState.shouldUpdate }));
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { data } = this.state;
    return (
      <>
        {data && (
          <Grid item xs={2} sm={4} md={4} key={data.id}>
            <Card
              className="card-fav"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                display: "flex",
                justifyContent: "space-between",
                minHeight: {
                  xs: "125px",
                  sm: "150px",
                  md: "150px",
                },
              }}
            >
              <CardContent
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  justifyContent: "space-evenly",
                  paddingRight: "8px",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 1.5, textAlign: "center", color: "white" }}
                  component="div"
                >
                  {data.name}, {data.sys.country}
                </Typography>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 40, marginRight: "2px" }}
                    image={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                    alt="Live from space album cover"
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      color: "white",
                      fontSize: "1rem",
                      fontWeight: "normal",
                    }}
                    component="div"
                  >
                    {data.weather[0].description}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      color: "white",
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                    }}
                    component="div"
                  >
                    {Math.floor(data.main.temp)}°C
                  </Typography>
                </Box>
              </CardContent>
              <CardActions
                className="button-cardfav"
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  className="update-button"
                  component="div"
                  sx={{
                    alignItems: "center",
                    backgroundColor: "rgba(0, 200, 247, 1)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <IconButton
                    aria-label="synchronize-location"
                    size="small"
                    sx={{ color: "white" }}
                    onClick={this.handleUpdate}
                  >
                    <SyncRounded />
                  </IconButton>
                </Box>
                <Box
                  className="delete-button"
                  component="div"
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    backgroundColor: "rgba(255, 150, 0, 1)",
                    justifyContent: "center",
                  }}
                >
                  <IconButton
                    aria-label="delete-location"
                    size="small"
                    sx={{ color: "white" }}
                    onClick={() => this.props.onDelete(data.name)}
                  >
                    <DeleteRounded />
                  </IconButton>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        )}
      </>
    );
  }
}

export default CardComponent;
