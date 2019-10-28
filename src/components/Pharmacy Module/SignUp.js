import React, { Component } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
} from 'reactstrap';

class SignUp extends Component {
  state = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    retype_password: '',
    SignUp: [],
    error: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      error: '',
      [target.name]: target.value,
    });
  };

  resetForm = () => {
    this.setState({
      fullname: '',
      username: '',
      email: '',
      password: '',
      retype_password: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fullname, username, email, password, retype_password } = this.state;
    if (
      fullname === '' ||
      username === '' ||
      email === '' ||
      password === '' ||
      retype_password === ''
    ) {
      this.setState({ error: 'Please complete the form' });
    } else {
      this.setState(
        prevState => ({
          SignUp: prevState.SignUp.concat({
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            retype_password: this.state.retype_password,
          }),
        }),
        () => this.resetForm()
      );
    }
  };

  render() {
    const {
      handleChange,
      handleSubmit,
      state: { error, fullname, username, email, password, retype_password },
    } = this;
    return (
      <Form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <h4 className="text-center">Registration Form</h4>
          </CardHeader>
          <CardBody>
            <div>
              <FormGroup row>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <label>Fullname</label>
                    <input
                      className="form-control"
                      type="text"
                      name="fullname"
                      value={fullname}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>

                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <label>Username</label>
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>

                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <label>Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>

                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <label>Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>

                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <label>Retype Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="retype_password"
                      value={retype_password}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
              </FormGroup>
            </div>
            {error !== '' ? (
              <center>
                <p style={{ color: 'red' }}>{error}</p>
              </center>
            ) : null}
          </CardBody>

          <CardFooter>
            <center>
              <Button color="primary" outline size="sm">
                Register
              </Button>
            </center>
          </CardFooter>
        </Card>
      </Form>
    );
  }
}

export default SignUp;
