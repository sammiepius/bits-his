import React, { Component } from 'react';
import moment from 'moment';
import { FaPlus } from 'react-icons/fa';
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

class ServiceLog extends Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
    next_service_due_date: moment().format('YYYY-MM-DD'),
    Dates: [],
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      Dates: prevState.Dates.concat({
        date: this.state.date,
        next_service_due_date: this.state.next_service_due_date,
      }),
    }));
    console.log(this.state.date, this.state.next_service_due_date);
  };

  render() {
    const {
      handleChange,
      handleSubmit,
      state: { date, next_service_due_date },
    } = this;
    return (
      <Form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <h4 className="text-center">Service Log</h4>
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
                      value={date}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>

                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>next Service Date</Label>
                    <Input
                      type="date"
                      name="next_service_due_date"
                      value={next_service_due_date}
                      onChange={handleChange}
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

export default ServiceLog;
