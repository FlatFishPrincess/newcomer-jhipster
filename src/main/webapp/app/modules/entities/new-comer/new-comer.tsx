import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction, TextFormat, getSortState, IPaginationBaseState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './new-comer.reducer';
import { INewComer } from 'app/shared/model/new-comer.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface INewComerProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export type INewComerState = IPaginationBaseState;

export class NewComer extends React.Component<INewComerProps, INewComerState> {
  state: INewComerState = {
    ...getSortState(this.props.location, ITEMS_PER_PAGE)
  };

  componentDidMount() {
    this.getEntities();
  }

  sort = prop => () => {
    this.setState(
      {
        order: this.state.order === 'asc' ? 'desc' : 'asc',
        sort: prop
      },
      () => this.sortEntities()
    );
  };

  sortEntities() {
    this.getEntities();
    this.props.history.push(`${this.props.location.pathname}?page=${this.state.activePage}&sort=${this.state.sort},${this.state.order}`);
  }

  handlePagination = activePage => this.setState({ activePage }, () => this.sortEntities());

  getEntities = () => {
    const { activePage, itemsPerPage, sort, order } = this.state;
    this.props.getEntities(activePage - 1, itemsPerPage, `${sort},${order}`);
  };

  render() {
    const { newComerList, match, totalItems } = this.props;
    return (
      <div>
        <h2 id="new-comer-heading">
          <Translate contentKey="newcomerApp.newComer.home.title">New Comers</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="newcomerApp.newComer.home.createLabel">Create new New Comer</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {newComerList && newComerList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th className="hand" onClick={this.sort('id')}>
                    <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('visaStatus')}>
                    <Translate contentKey="newcomerApp.newComer.visaStatus">Visa Status</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('company')}>
                    <Translate contentKey="newcomerApp.newComer.company">Company</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('memberLevel')}>
                    <Translate contentKey="newcomerApp.newComer.memberLevel">Member Level</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('mobilePhone')}>
                    <Translate contentKey="newcomerApp.newComer.mobilePhone">Mobile Phone</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('familyRelation')}>
                    <Translate contentKey="newcomerApp.newComer.familyRelation">Family Relation</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('parentId')}>
                    <Translate contentKey="newcomerApp.newComer.parentId">Parent Id</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('occupation')}>
                    <Translate contentKey="newcomerApp.newComer.occupation">Occupation</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('kFirstName')}>
                    <Translate contentKey="newcomerApp.newComer.kFirstName">K First Name</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('kLastName')}>
                    <Translate contentKey="newcomerApp.newComer.kLastName">K Last Name</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('eFirstName')}>
                    <Translate contentKey="newcomerApp.newComer.eFirstName">E First Name</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('eLastName')}>
                    <Translate contentKey="newcomerApp.newComer.eLastName">E Last Name</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('previousChurch')}>
                    <Translate contentKey="newcomerApp.newComer.previousChurch">Previous Church</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('carNumber1')}>
                    <Translate contentKey="newcomerApp.newComer.carNumber1">Car Number 1</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('email')}>
                    <Translate contentKey="newcomerApp.newComer.email">Email</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('province')}>
                    <Translate contentKey="newcomerApp.newComer.province">Province</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('postalCode')}>
                    <Translate contentKey="newcomerApp.newComer.postalCode">Postal Code</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('country')}>
                    <Translate contentKey="newcomerApp.newComer.country">Country</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('serviceExp')}>
                    <Translate contentKey="newcomerApp.newComer.serviceExp">Service Exp</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('street1')}>
                    <Translate contentKey="newcomerApp.newComer.street1">Street 1</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('gender')}>
                    <Translate contentKey="newcomerApp.newComer.gender">Gender</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('dateOfBirth')}>
                    <Translate contentKey="newcomerApp.newComer.dateOfBirth">Date Of Birth</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('photoUrl')}>
                    <Translate contentKey="newcomerApp.newComer.photoUrl">Photo Url</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('acquaintance')}>
                    <Translate contentKey="newcomerApp.newComer.acquaintance">Acquaintance</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('homePhone')}>
                    <Translate contentKey="newcomerApp.newComer.homePhone">Home Phone</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('street2')}>
                    <Translate contentKey="newcomerApp.newComer.street2">Street 2</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('carNumber2')}>
                    <Translate contentKey="newcomerApp.newComer.carNumber2">Car Number 2</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('baptismType')}>
                    <Translate contentKey="newcomerApp.newComer.baptismType">Baptism Type</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('baptismChurh')}>
                    <Translate contentKey="newcomerApp.newComer.baptismChurh">Baptism Churh</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('baptismYear')}>
                    <Translate contentKey="newcomerApp.newComer.baptismYear">Baptism Year</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('registrationDate')}>
                    <Translate contentKey="newcomerApp.newComer.registrationDate">Registration Date</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('isDelete')}>
                    <Translate contentKey="newcomerApp.newComer.isDelete">Is Delete</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('isSubmit')}>
                    <Translate contentKey="newcomerApp.newComer.isSubmit">Is Submit</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('personId')}>
                    <Translate contentKey="newcomerApp.newComer.personId">Person Id</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('isMember')}>
                    <Translate contentKey="newcomerApp.newComer.isMember">Is Member</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('note')}>
                    <Translate contentKey="newcomerApp.newComer.note">Note</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th>
                    <Translate contentKey="newcomerApp.newComer.city">City</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {newComerList.map((newComer, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${newComer.id}`} color="link" size="sm">
                        {newComer.id}
                      </Button>
                    </td>
                    <td>
                      <Translate contentKey={`newcomerApp.VisaStatus.${newComer.visaStatus}`} />
                    </td>
                    <td>{newComer.company}</td>
                    <td>
                      <Translate contentKey={`newcomerApp.MemberLevel.${newComer.memberLevel}`} />
                    </td>
                    <td>{newComer.mobilePhone}</td>
                    <td>{newComer.familyRelation}</td>
                    <td>{newComer.parentId}</td>
                    <td>{newComer.occupation}</td>
                    <td>{newComer.kFirstName}</td>
                    <td>{newComer.kLastName}</td>
                    <td>{newComer.eFirstName}</td>
                    <td>{newComer.eLastName}</td>
                    <td>{newComer.previousChurch}</td>
                    <td>{newComer.carNumber1}</td>
                    <td>{newComer.email}</td>
                    <td>{newComer.province}</td>
                    <td>{newComer.postalCode}</td>
                    <td>{newComer.country}</td>
                    <td>{newComer.serviceExp}</td>
                    <td>{newComer.street1}</td>
                    <td>{newComer.gender}</td>
                    <td>
                      <TextFormat type="date" value={newComer.dateOfBirth} format={APP_LOCAL_DATE_FORMAT} />
                    </td>
                    <td>{newComer.photoUrl}</td>
                    <td>{newComer.acquaintance}</td>
                    <td>{newComer.homePhone}</td>
                    <td>{newComer.street2}</td>
                    <td>{newComer.carNumber2}</td>
                    <td>
                      <Translate contentKey={`newcomerApp.BaptismType.${newComer.baptismType}`} />
                    </td>
                    <td>{newComer.baptismChurh}</td>
                    <td>{newComer.baptismYear}</td>
                    <td>
                      <TextFormat type="date" value={newComer.registrationDate} format={APP_LOCAL_DATE_FORMAT} />
                    </td>
                    <td>{newComer.isDelete ? 'true' : 'false'}</td>
                    <td>{newComer.isSubmit ? 'true' : 'false'}</td>
                    <td>{newComer.personId}</td>
                    <td>{newComer.isMember}</td>
                    <td>{newComer.note}</td>
                    <td>{newComer.city ? <Link to={`city/${newComer.city.id}`}>{newComer.city.name}</Link> : ''}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${newComer.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${newComer.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${newComer.id}/delete`} color="danger" size="sm">
                          <FontAwesomeIcon icon="trash" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.delete">Delete</Translate>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="alert alert-warning">
              <Translate contentKey="newcomerApp.newComer.home.notFound">No New Comers found</Translate>
            </div>
          )}
        </div>
        <div className={newComerList && newComerList.length > 0 ? '' : 'd-none'}>
          <Row className="justify-content-center">
            <JhiItemCount page={this.state.activePage} total={totalItems} itemsPerPage={this.state.itemsPerPage} i18nEnabled />
          </Row>
          <Row className="justify-content-center">
            <JhiPagination
              activePage={this.state.activePage}
              onSelect={this.handlePagination}
              maxButtons={5}
              itemsPerPage={this.state.itemsPerPage}
              totalItems={this.props.totalItems}
            />
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ newComer }: IRootState) => ({
  newComerList: newComer.entities,
  totalItems: newComer.totalItems
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComer);
