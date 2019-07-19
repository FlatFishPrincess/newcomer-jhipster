import { getEntities as getCities } from 'app/entities/city/city.reducer';
import { ICity } from 'app/shared/model/city.model';
import { INewComer } from 'app/shared/model/new-comer.model';
import { IRootState } from 'app/shared/reducers';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { AvFeedback, AvField, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import React from 'react';
import { Translate, translate } from 'react-jhipster';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Form, Label, Row } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NewcomerCreateDispatchProps, NewcomerCreateStateProps } from '../container/new-comer-create';
import { NewcomerForm } from './new-comer-create-form';

// another way of dispatch type
// export interface NewcomerCreateDispatchProps {
//   getCities: ICrudGetAllAction<INewComer>;
//   getEntity: ICrudGetAction<INewComer>;
//   updateEntity: ICrudPutAction<INewComer>;
//   createEntity: ICrudPutAction<INewComer>;
//   reset: () => void;
// }

export interface INewComerUpdateProps extends NewcomerCreateStateProps, NewcomerCreateDispatchProps, RouteComponentProps<{ id: string }> {}

export interface INewComerUpdateState {
  isNew: boolean;
  cityId: string;
}

export class NewComerCreate extends React.Component<INewComerUpdateProps, INewComerUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      cityId: '0',
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
      this.handleClose();
    }
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getCities();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { newComerEntity } = this.props;
      const entity = {
        ...newComerEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/new-comer');
  };

  render() {
    const { newComerEntity, cities, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">Create NewComer</Row>
        <Row>
          <Form>
            <NewcomerForm />
          </Form>
        </Row>
      </div>
    );
  }
}

export default NewComerCreate;
