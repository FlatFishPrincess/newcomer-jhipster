import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './new-comer.reducer';
import { INewComer } from 'app/shared/model/new-comer.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface INewComerDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class NewComerDetail extends React.Component<INewComerDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { newComerEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="newcomerApp.newComer.detail.title">NewComer</Translate> [<b>{newComerEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="visaStatus">
                <Translate contentKey="newcomerApp.newComer.visaStatus">Visa Status</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.visaStatus}</dd>
            <dt>
              <span id="company">
                <Translate contentKey="newcomerApp.newComer.company">Company</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.company}</dd>
            <dt>
              <span id="memberLevel">
                <Translate contentKey="newcomerApp.newComer.memberLevel">Member Level</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.memberLevel}</dd>
            <dt>
              <span id="mobilePhone">
                <Translate contentKey="newcomerApp.newComer.mobilePhone">Mobile Phone</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.mobilePhone}</dd>
            <dt>
              <span id="familyRelation">
                <Translate contentKey="newcomerApp.newComer.familyRelation">Family Relation</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.familyRelation}</dd>
            <dt>
              <span id="parentId">
                <Translate contentKey="newcomerApp.newComer.parentId">Parent Id</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.parentId}</dd>
            <dt>
              <span id="occupation">
                <Translate contentKey="newcomerApp.newComer.occupation">Occupation</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.occupation}</dd>
            <dt>
              <span id="kFirstName">
                <Translate contentKey="newcomerApp.newComer.kFirstName">K First Name</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.kFirstName}</dd>
            <dt>
              <span id="kLastName">
                <Translate contentKey="newcomerApp.newComer.kLastName">K Last Name</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.kLastName}</dd>
            <dt>
              <span id="eFirstName">
                <Translate contentKey="newcomerApp.newComer.eFirstName">E First Name</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.eFirstName}</dd>
            <dt>
              <span id="eLastName">
                <Translate contentKey="newcomerApp.newComer.eLastName">E Last Name</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.eLastName}</dd>
            <dt>
              <span id="previousChurch">
                <Translate contentKey="newcomerApp.newComer.previousChurch">Previous Church</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.previousChurch}</dd>
            <dt>
              <span id="carNumber1">
                <Translate contentKey="newcomerApp.newComer.carNumber1">Car Number 1</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.carNumber1}</dd>
            <dt>
              <span id="email">
                <Translate contentKey="newcomerApp.newComer.email">Email</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.email}</dd>
            <dt>
              <span id="province">
                <Translate contentKey="newcomerApp.newComer.province">Province</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.province}</dd>
            <dt>
              <span id="postalCode">
                <Translate contentKey="newcomerApp.newComer.postalCode">Postal Code</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.postalCode}</dd>
            <dt>
              <span id="country">
                <Translate contentKey="newcomerApp.newComer.country">Country</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.country}</dd>
            <dt>
              <span id="serviceExp">
                <Translate contentKey="newcomerApp.newComer.serviceExp">Service Exp</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.serviceExp}</dd>
            <dt>
              <span id="street1">
                <Translate contentKey="newcomerApp.newComer.street1">Street 1</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.street1}</dd>
            <dt>
              <span id="gender">
                <Translate contentKey="newcomerApp.newComer.gender">Gender</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.gender}</dd>
            <dt>
              <span id="dateOfBirth">
                <Translate contentKey="newcomerApp.newComer.dateOfBirth">Date Of Birth</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={newComerEntity.dateOfBirth} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="photoUrl">
                <Translate contentKey="newcomerApp.newComer.photoUrl">Photo Url</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.photoUrl}</dd>
            <dt>
              <span id="acquaintance">
                <Translate contentKey="newcomerApp.newComer.acquaintance">Acquaintance</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.acquaintance}</dd>
            <dt>
              <span id="homePhone">
                <Translate contentKey="newcomerApp.newComer.homePhone">Home Phone</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.homePhone}</dd>
            <dt>
              <span id="street2">
                <Translate contentKey="newcomerApp.newComer.street2">Street 2</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.street2}</dd>
            <dt>
              <span id="carNumber2">
                <Translate contentKey="newcomerApp.newComer.carNumber2">Car Number 2</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.carNumber2}</dd>
            <dt>
              <span id="baptismType">
                <Translate contentKey="newcomerApp.newComer.baptismType">Baptism Type</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.baptismType}</dd>
            <dt>
              <span id="baptismChurh">
                <Translate contentKey="newcomerApp.newComer.baptismChurh">Baptism Churh</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.baptismChurh}</dd>
            <dt>
              <span id="baptismYear">
                <Translate contentKey="newcomerApp.newComer.baptismYear">Baptism Year</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.baptismYear}</dd>
            <dt>
              <span id="registrationDate">
                <Translate contentKey="newcomerApp.newComer.registrationDate">Registration Date</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={newComerEntity.registrationDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="isDelete">
                <Translate contentKey="newcomerApp.newComer.isDelete">Is Delete</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.isDelete ? 'true' : 'false'}</dd>
            <dt>
              <span id="isSubmit">
                <Translate contentKey="newcomerApp.newComer.isSubmit">Is Submit</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.isSubmit ? 'true' : 'false'}</dd>
            <dt>
              <span id="personId">
                <Translate contentKey="newcomerApp.newComer.personId">Person Id</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.personId}</dd>
            <dt>
              <span id="isMember">
                <Translate contentKey="newcomerApp.newComer.isMember">Is Member</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.isMember}</dd>
            <dt>
              <span id="note">
                <Translate contentKey="newcomerApp.newComer.note">Note</Translate>
              </span>
            </dt>
            <dd>{newComerEntity.note}</dd>
            <dt>
              <Translate contentKey="newcomerApp.newComer.city">City</Translate>
            </dt>
            <dd>{newComerEntity.city ? newComerEntity.city.name : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/new-comer" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/new-comer/${newComerEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ newComer }: IRootState) => ({
  newComerEntity: newComer.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComerDetail);
