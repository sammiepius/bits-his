import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import moment from 'moment';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class DieSelUsage extends Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
    gen: '',
    time_started: moment().format('HH:MM'),
    time_stopped: moment().format('HH:MM'),
    diesel: [],
    today: new Date(),
  };

  componentDidMount() {
    console.log(moment().format('DD-MM-YYYY'));
  }

  onChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      diesel: prevState.diesel.concat({
        date: this.state.date,
        gen: this.state.gen,
        time_started: this.state.time_started,
        time_stopped: this.state.time_stopped,
      }),
    }));
    console.log(
      this.state.gen,
      this.state.time_started,
      this.state.time_stopped
    );
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Card>
          <CardHeader>
            <h4 className="text-center">Diesel Usage</h4>
          </CardHeader>
          <CardBody>
            <div>
              <FormGroup row>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <label>Date</label>
                    <input
                      className="form-control"
                      type="date"
                      name="date"
                      value={this.state.date}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6 col-lg-12">
                  <hr />
                </div>

                <div className="col-md-6 col-lg-12">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="gen"
                        value="Gen1"
                        onChange={this.onChange}
                      />{' '}
                      Gen1
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="gen"
                        value="Gen2"
                        onChange={this.onChange}
                      />{' '}
                      Gen2
                    </Label>
                  </FormGroup>
                  <hr />
                </div>

                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <label>Time Started</label>
                    <input
                      className="form-control"
                      type="time"
                      name="time_started"
                      value={this.state.time_started}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </div>

                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <label>Time Stopped</label>
                    <input
                      className="form-control"
                      type="time"
                      name="time_stopped"
                      value={this.state.time_stopped}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </div>
              </FormGroup>
            </div>
          </CardBody>

          <CardFooter>
            <center>
              <Button color="primary" outline size="sm">
                <FaPlus />
              </Button>
            </center>
          </CardFooter>
        </Card>
      </Form>
    );
  }
}

export default DieSelUsage;
