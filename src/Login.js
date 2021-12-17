import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import {TextField} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "./axios";

function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const loginuser = async () => {
    try {
      var response = await axios.post("/users/login", {
        email: email,
        password: password,
      });

      if (response.data) {
        localStorage.setItem("token", response.data);
      }
    } catch (err) {
      console.warn(err);
    }
  };


  return (
    <div className="grid bady logapp">
      <Card className="card" style={{ width: "20rem", textAlign: "center" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Sign-in
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div className="row">
              <TextField
                style={{ minWidth: "60%" }}
                required
                id="standard-required"
                label="E-mail"
                defaultValue={email}
                onChange={(event) => setemail(event.target.value)}
              />
            </div>
            <div className="row">
              <TextField
                style={{ minWidth: "60%" }}
                className="textField"
                required
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(event) => setpassword(event.target.value)}
              />
            </div>
            <div className="row loginBut">
              <Link to="/chat">
                <Button variant="outlined" onClick={loginuser}>
                  Login
                </Button>
              </Link>
            </div>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" color="primary">
            Register
          </Button>
          <Button size="large" color="secondary">
            Forgot Password
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Login;
