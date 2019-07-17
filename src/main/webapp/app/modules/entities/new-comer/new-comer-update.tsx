import { getEntities as getCities } from 'app/entities/city/city.reducer';
import { ICity } from 'app/shared/model/city.model';
import { INewComer } from 'app/shared/model/new-comer.model';
import { IRootState } from 'app/shared/reducers';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { AvFeedback, AvField, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import React from 'react';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, Translate, translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Label, Row } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

import { createEntity, getEntity, reset, updateEntity } from './new-comer.reducer';

export interface INewComerUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface INewComerUpdateState {
  isNew: boolean;
  cityId: string;
}

export class NewComerUpdate extends React.Component<INewComerUpdateProps, INewComerUpdateState> {
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
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="newcomerApp.newComer.home.createOrEditLabel">
              <Translate contentKey="newcomerApp.newComer.home.createOrEditLabel">Create or edit a NewComer</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : newComerEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="new-comer-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="new-comer-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="visaStatusLabel" for="new-comer-visaStatus">
                    <Translate contentKey="newcomerApp.newComer.visaStatus">Visa Status</Translate>
                  </Label>
                  <AvInput
                    id="new-comer-visaStatus"
                    type="select"
                    className="form-control"
                    name="visaStatus"
                    value={(!isNew && newComerEntity.visaStatus) || 'None'}
                  >
                    <option value="None">{translate('newcomerApp.VisaStatus.None')}</option>
                    <option value="PermenantResident">{translate('newcomerApp.VisaStatus.PermenantResident')}</option>
                    <option value="Citizen">{translate('newcomerApp.VisaStatus.Citizen')}</option>
                    <option value="Visitor">{translate('newcomerApp.VisaStatus.Visitor')}</option>
                    <option value="StudyPermit">{translate('newcomerApp.VisaStatus.StudyPermit')}</option>
                    <option value="WorkPermit">{translate('newcomerApp.VisaStatus.WorkPermit')}</option>
                    <option value="WorkingHoliday">{translate('newcomerApp.VisaStatus.WorkingHoliday')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="companyLabel" for="new-comer-company">
                    <Translate contentKey="newcomerApp.newComer.company">Company</Translate>
                  </Label>
                  <AvField id="new-comer-company" type="text" name="company" />
                </AvGroup>
                <AvGroup>
                  <Label id="memberLevelLabel" for="new-comer-memberLevel">
                    <Translate contentKey="newcomerApp.newComer.memberLevel">Member Level</Translate>
                  </Label>
                  <AvInput
                    id="new-comer-memberLevel"
                    type="select"
                    className="form-control"
                    name="memberLevel"
                    value={(!isNew && newComerEntity.memberLevel) || 'None'}
                  >
                    <option value="None">{translate('newcomerApp.MemberLevel.None')}</option>
                    <option value="GeneralServant">{translate('newcomerApp.MemberLevel.GeneralServant')}</option>
                    <option value="Deacon">{translate('newcomerApp.MemberLevel.Deacon')}</option>
                    <option value="OrdainedDecacon">{translate('newcomerApp.MemberLevel.OrdainedDecacon')}</option>
                    <option value="Elder">{translate('newcomerApp.MemberLevel.Elder')}</option>
                    <option value="InternPastor">{translate('newcomerApp.MemberLevel.InternPastor')}</option>
                    <option value="Missionary">{translate('newcomerApp.MemberLevel.Missionary')}</option>
                    <option value="Paster">{translate('newcomerApp.MemberLevel.Paster')}</option>
                    <option value="PasterWife">{translate('newcomerApp.MemberLevel.PasterWife')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="mobilePhoneLabel" for="new-comer-mobilePhone">
                    <Translate contentKey="newcomerApp.newComer.mobilePhone">Mobile Phone</Translate>
                  </Label>
                  <AvField id="new-comer-mobilePhone" type="text" name="mobilePhone" />
                </AvGroup>
                <AvGroup>
                  <Label id="familyRelationLabel" for="new-comer-familyRelation">
                    <Translate contentKey="newcomerApp.newComer.familyRelation">Family Relation</Translate>
                  </Label>
                  <AvField id="new-comer-familyRelation" type="text" name="familyRelation" />
                </AvGroup>
                <AvGroup>
                  <Label id="parentIdLabel" for="new-comer-parentId">
                    <Translate contentKey="newcomerApp.newComer.parentId">Parent Id</Translate>
                  </Label>
                  <AvField id="new-comer-parentId" type="text" name="parentId" />
                </AvGroup>
                <AvGroup>
                  <Label id="occupationLabel" for="new-comer-occupation">
                    <Translate contentKey="newcomerApp.newComer.occupation">Occupation</Translate>
                  </Label>
                  <AvField id="new-comer-occupation" type="text" name="occupation" />
                </AvGroup>
                <AvGroup>
                  {/* <TextBoxComponent placeholder="First Name" floatLabelType="Auto" /> */}
                  {/* <Label id="kFirstNameLabel" for="new-comer-kFirstName">
                    <Translate contentKey="newcomerApp.newComer.kFirstName">K First Name</Translate>
                  </Label>
                  <AvField id="new-comer-kFirstName" type="text" name="kFirstName" /> */}
                </AvGroup>
                <AvGroup>
                  <Label id="kLastNameLabel" for="new-comer-kLastName">
                    <Translate contentKey="newcomerApp.newComer.kLastName">K Last Name</Translate>
                  </Label>
                  <AvField id="new-comer-kLastName" type="text" name="kLastName" />
                </AvGroup>
                <AvGroup>
                  <Label id="eFirstNameLabel" for="new-comer-eFirstName">
                    <Translate contentKey="newcomerApp.newComer.eFirstName">E First Name</Translate>
                  </Label>
                  <AvField id="new-comer-eFirstName" type="text" name="eFirstName" />
                </AvGroup>
                <AvGroup>
                  <Label id="eLastNameLabel" for="new-comer-eLastName">
                    <Translate contentKey="newcomerApp.newComer.eLastName">E Last Name</Translate>
                  </Label>
                  <AvField id="new-comer-eLastName" type="text" name="eLastName" />
                </AvGroup>
                <AvGroup>
                  <Label id="previousChurchLabel" for="new-comer-previousChurch">
                    <Translate contentKey="newcomerApp.newComer.previousChurch">Previous Church</Translate>
                  </Label>
                  <AvField id="new-comer-previousChurch" type="text" name="previousChurch" />
                </AvGroup>
                <AvGroup>
                  <Label id="carNumber1Label" for="new-comer-carNumber1">
                    <Translate contentKey="newcomerApp.newComer.carNumber1">Car Number 1</Translate>
                  </Label>
                  <AvField id="new-comer-carNumber1" type="text" name="carNumber1" />
                </AvGroup>
                <AvGroup>
                  <Label id="emailLabel" for="new-comer-email">
                    <Translate contentKey="newcomerApp.newComer.email">Email</Translate>
                  </Label>
                  <AvField id="new-comer-email" type="text" name="email" />
                </AvGroup>
                <AvGroup>
                  <Label id="provinceLabel" for="new-comer-province">
                    <Translate contentKey="newcomerApp.newComer.province">Province</Translate>
                  </Label>
                  <AvField id="new-comer-province" type="text" name="province" />
                </AvGroup>
                <AvGroup>
                  <Label id="postalCodeLabel" for="new-comer-postalCode">
                    <Translate contentKey="newcomerApp.newComer.postalCode">Postal Code</Translate>
                  </Label>
                  <AvField id="new-comer-postalCode" type="text" name="postalCode" />
                </AvGroup>
                <AvGroup>
                  <Label id="countryLabel" for="new-comer-country">
                    <Translate contentKey="newcomerApp.newComer.country">Country</Translate>
                  </Label>
                  <AvField id="new-comer-country" type="text" name="country" />
                </AvGroup>
                <AvGroup>
                  <Label id="serviceExpLabel" for="new-comer-serviceExp">
                    <Translate contentKey="newcomerApp.newComer.serviceExp">Service Exp</Translate>
                  </Label>
                  <AvField id="new-comer-serviceExp" type="text" name="serviceExp" />
                </AvGroup>
                <AvGroup>
                  <Label id="street1Label" for="new-comer-street1">
                    <Translate contentKey="newcomerApp.newComer.street1">Street 1</Translate>
                  </Label>
                  <AvField id="new-comer-street1" type="text" name="street1" />
                </AvGroup>
                <AvGroup>
                  <Label id="genderLabel" for="new-comer-gender">
                    <Translate contentKey="newcomerApp.newComer.gender">Gender</Translate>
                  </Label>
                  <AvField id="new-comer-gender" type="text" name="gender" />
                </AvGroup>
                <AvGroup>
                  <Label id="dateOfBirthLabel" for="new-comer-dateOfBirth">
                    <Translate contentKey="newcomerApp.newComer.dateOfBirth">Date Of Birth</Translate>
                  </Label>
                  <AvField id="new-comer-dateOfBirth" type="date" className="form-control" name="dateOfBirth" />
                </AvGroup>
                <AvGroup>
                  <Label id="photoUrlLabel" for="new-comer-photoUrl">
                    <Translate contentKey="newcomerApp.newComer.photoUrl">Photo Url</Translate>
                  </Label>
                  <AvField id="new-comer-photoUrl" type="text" name="photoUrl" />
                </AvGroup>
                <AvGroup>
                  <Label id="acquaintanceLabel" for="new-comer-acquaintance">
                    <Translate contentKey="newcomerApp.newComer.acquaintance">Acquaintance</Translate>
                  </Label>
                  <AvField id="new-comer-acquaintance" type="text" name="acquaintance" />
                </AvGroup>
                <AvGroup>
                  <Label id="homePhoneLabel" for="new-comer-homePhone">
                    <Translate contentKey="newcomerApp.newComer.homePhone">Home Phone</Translate>
                  </Label>
                  <AvField id="new-comer-homePhone" type="text" name="homePhone" />
                </AvGroup>
                <AvGroup>
                  <Label id="street2Label" for="new-comer-street2">
                    <Translate contentKey="newcomerApp.newComer.street2">Street 2</Translate>
                  </Label>
                  <AvField id="new-comer-street2" type="text" name="street2" />
                </AvGroup>
                <AvGroup>
                  <Label id="carNumber2Label" for="new-comer-carNumber2">
                    <Translate contentKey="newcomerApp.newComer.carNumber2">Car Number 2</Translate>
                  </Label>
                  <AvField id="new-comer-carNumber2" type="text" name="carNumber2" />
                </AvGroup>
                <AvGroup>
                  <Label id="baptismTypeLabel" for="new-comer-baptismType">
                    <Translate contentKey="newcomerApp.newComer.baptismType">Baptism Type</Translate>
                  </Label>
                  <AvInput
                    id="new-comer-baptismType"
                    type="select"
                    className="form-control"
                    name="baptismType"
                    value={(!isNew && newComerEntity.baptismType) || 'None'}
                  >
                    <option value="None">{translate('newcomerApp.BaptismType.None')}</option>
                    <option value="InfantBaptism">{translate('newcomerApp.BaptismType.InfantBaptism')}</option>
                    <option value="Baptism">{translate('newcomerApp.BaptismType.Baptism')}</option>
                    <option value="Confirmation">{translate('newcomerApp.BaptismType.Confirmation')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="baptismChurhLabel" for="new-comer-baptismChurh">
                    <Translate contentKey="newcomerApp.newComer.baptismChurh">Baptism Churh</Translate>
                  </Label>
                  <AvField id="new-comer-baptismChurh" type="text" name="baptismChurh" />
                </AvGroup>
                <AvGroup>
                  <Label id="baptismYearLabel" for="new-comer-baptismYear">
                    <Translate contentKey="newcomerApp.newComer.baptismYear">Baptism Year</Translate>
                  </Label>
                  <AvField id="new-comer-baptismYear" type="string" className="form-control" name="baptismYear" />
                </AvGroup>
                <AvGroup>
                  <Label id="registrationDateLabel" for="new-comer-registrationDate">
                    <Translate contentKey="newcomerApp.newComer.registrationDate">Registration Date</Translate>
                  </Label>
                  <AvField id="new-comer-registrationDate" type="date" className="form-control" name="registrationDate" />
                </AvGroup>
                <AvGroup>
                  <Label id="isDeleteLabel" check>
                    <AvInput id="new-comer-isDelete" type="checkbox" className="form-control" name="isDelete" />
                    <Translate contentKey="newcomerApp.newComer.isDelete">Is Delete</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="isSubmitLabel" check>
                    <AvInput id="new-comer-isSubmit" type="checkbox" className="form-control" name="isSubmit" />
                    <Translate contentKey="newcomerApp.newComer.isSubmit">Is Submit</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="personIdLabel" for="new-comer-personId">
                    <Translate contentKey="newcomerApp.newComer.personId">Person Id</Translate>
                  </Label>
                  <AvField id="new-comer-personId" type="text" name="personId" />
                </AvGroup>
                <AvGroup>
                  <Label id="isMemberLabel" for="new-comer-isMember">
                    <Translate contentKey="newcomerApp.newComer.isMember">Is Member</Translate>
                  </Label>
                  <AvField id="new-comer-isMember" type="text" name="isMember" />
                </AvGroup>
                <AvGroup>
                  <Label id="noteLabel" for="new-comer-note">
                    <Translate contentKey="newcomerApp.newComer.note">Note</Translate>
                  </Label>
                  <AvField id="new-comer-note" type="text" name="note" />
                </AvGroup>
                <AvGroup>
                  <Label for="new-comer-city">
                    <Translate contentKey="newcomerApp.newComer.city">City</Translate>
                  </Label>
                  <AvInput id="new-comer-city" type="select" className="form-control" name="city.id">
                    <option value="" key="0" />
                    {cities
                      ? cities.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.name}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/new-comer" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />
                  &nbsp;
                  <span className="d-none d-md-inline">
                    <Translate contentKey="entity.action.back">Back</Translate>
                  </span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />
                  &nbsp;
                  <Translate contentKey="entity.action.save">Save</Translate>
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  cities: storeState.city.entities,
  newComerEntity: storeState.newComer.entity,
  loading: storeState.newComer.loading,
  updating: storeState.newComer.updating,
  updateSuccess: storeState.newComer.updateSuccess
});

const mapDispatchToProps = {
  getCities,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComerUpdate);
