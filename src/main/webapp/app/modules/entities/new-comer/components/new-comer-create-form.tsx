import newComer from 'app/entities/new-comer/new-comer';
import { INewComer, VisaStatus } from 'app/shared/model/new-comer.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { AvFeedback, AvField, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import moment from 'moment';
import React from 'react';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, Translate, translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Label, Row } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmitType } from '@syncfusion/ej2-base';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ChangedEventArgs, DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { ChangeEventArgs, DropDownListComponent, SelectEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { InputEventArgs, MaskedTextBoxComponent, TextBoxComponent } from '@syncfusion/ej2-react-inputs';

export interface INewComerFormOwnProps {
  newcomer?: INewComer;
}

export interface IState {
  newcomer?: INewComer;
  selectedDate?: Date;
}

export class NewcomerForm extends React.Component<INewComerFormOwnProps, IState> {
  private visaStatusList: VisaStatus[] = Object.values(VisaStatus);
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps: INewComerFormOwnProps, prevState: IState) {
    // tslint:disable-next-line: no-console
    if (prevState !== this.state) {
      console.log(prevState);
    }
  }

  handleOnInput = (e: InputEventArgs) => {
    const { name, value } = e.event.target as HTMLInputElement; // somehow e.target.name is not assignable
    const { newcomer } = this.state;
    this.setState({ newcomer: { ...newcomer, [name]: value } });
  };

  handleOnSelct = (e: ChangeEventArgs) => {
    // tslint:disable-next-line: no-console
    console.log(e);
  };

  selectTest = (e: SelectEventArgs) => {
    // tslint:disable-next-line: no-console
    console.log(e);
  };

  handleOnDate = (e: ChangedEventArgs) => {
    const { name } = e.element as HTMLInputElement;
    const { value } = e;
    const { newcomer } = this.state;
    const convertedValue = this.handleConvertDateToMoment(value);
    this.setState({ newcomer: { ...newcomer, [name]: convertedValue }, selectedDate: value });
  };

  handleConvertDateToMoment = (date: Date) => moment(date);

  render() {
    const { newcomer, selectedDate } = this.state;
    return (
      <div>
        <Row>
          <Col xs={5} sm={3} md={2}>
            <TextBoxComponent placeholder="K Last name" floatLabelType="Auto" name="kFirstName" input={this.handleOnInput} />
          </Col>
          <Col xs={7} sm={3} md={2}>
            <TextBoxComponent placeholder="K First name" floatLabelType="Auto" name="kLastName" input={this.handleOnInput} />
          </Col>
          <Col xs={5} sm={3} md={2}>
            <TextBoxComponent placeholder="E Last name" floatLabelType="Auto" name="eLastName" input={this.handleOnInput} />
          </Col>
          <Col xs={7} sm={3} md={2}>
            <TextBoxComponent placeholder="E First name" floatLabelType="Auto" name="eFirstName" input={this.handleOnInput} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={3} md={2}>
            <DatePickerComponent name="dateOfBirth" change={this.handleOnDate} value={selectedDate} />
          </Col>
          <Col xs={12} sm={3} md={2}>
            <RadioButtonComponent label="Male" name="gender" change={this.handleOnInput} value="m" />
            <RadioButtonComponent label="Female" name="gender" change={this.handleOnInput} value="f" />
          </Col>
          <Col xs={12} sm={3} md={2}>
            <MaskedTextBoxComponent mask="000-000-0000" name="mobilePhone" />
          </Col>
          <Col xs={12} sm={3} md={2}>
            <DropDownListComponent
              name="visaStatus"
              dataSource={this.visaStatusList}
              select={this.selectTest}
              change={this.handleOnSelct}
              placeholder="Select a visa status"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewcomerForm;
