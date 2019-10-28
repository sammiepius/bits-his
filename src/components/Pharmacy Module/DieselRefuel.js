import React, { Component } from 'react';
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
import { FaPlus } from 'react-icons/fa';

class DieselRefuel extends Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
    gen: '',
    quantity: '',
    diesel_refuel: [],
    error: '',
  };

  onChange = ({ target }) => {
    this.setState({
      error: '',
      [target.name]: target.value,
    });
  };

  resetForm = () => {
    this.setState({
      date: '',
      gen: '',
      quantity: '',
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { date, gen, quantity } = this.state;
    if (date === '' || gen === '' || quantity === '') {
      this.setState({ error: 'Please complete the form' });
    } else {
      this.setState(prevState => ({
        diesel_refuel: prevState.diesel_refuel.concat({
          date: this.state.date,
          gen: this.state.gen,
          time_started: this.state.quantity,
        }),
      }),

      () => this.resetForm()
      )
    }
  };
  render() {
    const {
      onChange,
      onSubmit,
      state: { error, date, gen, quantity },
    } = this;
    return (
      <Form onSubmit={onSubmit}>
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
                      value={date}
                      onChange={onChange}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-12 col-lg-12">
                  <hr />
                </div>

                <div className="col-md-6 col-lg-12">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="gen"
                        value="Gen1"
                        onChange={onChange}
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
                        onChange={onChange}
                      />{' '}
                      Gen2
                    </Label>
                  </FormGroup>
                  <hr />
                </div>
                <div className="col-md-6 col-lg-12">
                  <FormGroup>
                    <label>Quantity(litre)</label>
                    <input
                      className="form-control"
                      type="text"
                      name="quantity"
                      value={quantity}
                      onChange={onChange}
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
                <FaPlus />
              </Button>
            </center>
          </CardFooter>
        </Card>
      </Form>
    );
  }
}

export default DieselRefuel;
