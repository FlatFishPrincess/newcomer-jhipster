import { INewComer } from 'app/shared/model/new-comer.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { AvFeedback, AvField, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import React from 'react';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, Translate, translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Label, Row } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmitType } from '@syncfusion/ej2-base';
import { InputEventArgs, TextBoxComponent } from '@syncfusion/ej2-react-inputs';

export interface INewComerFormOwnProps {
  newcomer?: INewComer;
}

export interface INewComerFormState {
  newcomer?: INewComer;
}

export class NewcomerForm extends React.Component<INewComerFormOwnProps, INewComerFormState> {
  // ref: React.RefObject<HTMLElement> = React.createRef();
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnInput = (e: InputEventArgs) => {
    const { name, value } = e.event.target as HTMLInputElement; // somehow e.target.name is not assignable
    this.setState({ newcomer: { [name]: value } });
  };

  render() {
    return (
      <div>
        <Row>
          <Col xs={5} sm={3} md={2}>
            <TextBoxComponent placeholder="K Last name" floatLabelType="Auto" name="kFirstName" input={this.handleOnInput} />
          </Col>
          <Col xs={7} sm={3} md={2}>
            <TextBoxComponent placeholder="K First name" floatLabelType="Auto" name="kLastName" />
          </Col>
          <Col xs={7} sm={3} md={2}>
            <TextBoxComponent placeholder="E First name" floatLabelType="Auto" name="eFirstName" />
          </Col>
          <Col xs={5} sm={3} md={2}>
            <TextBoxComponent placeholder="E Last name" floatLabelType="Auto" name="eLastName" />
          </Col>
        </Row>
        <Row>
          <Col xs={5} sm={3} md={2}>
            {/* <DatePickerComponent value={this.dateValue}></DatePickerComponent> */}
          </Col>
          <Col xs={7} sm={3} md={2}>
            <TextBoxComponent placeholder="K First name" floatLabelType="Auto" name="kLastName" />
          </Col>
          <Col xs={12} sm={3} md={2}>
            <TextBoxComponent placeholder="E First name" floatLabelType="Auto" name="eFirstName" />
          </Col>
          <Col xs={6} sm={3} md={2}>
            <TextBoxComponent placeholder="E Last name" floatLabelType="Auto" name="eLastName" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewcomerForm;
