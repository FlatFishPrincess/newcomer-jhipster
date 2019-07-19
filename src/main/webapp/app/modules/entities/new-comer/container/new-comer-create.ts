import { getEntities as getCities } from 'app/entities/city/city.reducer';
import { IRootState } from 'app/shared/reducers';
import { connect } from 'react-redux';

import { NewComerCreate } from '../components/new-comer-create';
import { createEntity, getEntity, reset, updateEntity } from '../new-comer.reducer';

// https://spin.atomicobject.com/2017/04/20/typesafe-container-components/

export type NewcomerCreateStateProps = ReturnType<typeof mapStateToProps>;
export type NewcomerCreateDispatchProps = typeof mapDispatchToProps;

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComerCreate);
