import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { INewComer, defaultValue } from 'app/shared/model/new-comer.model';

export const ACTION_TYPES = {
  FETCH_NEWCOMER_LIST: 'newComer/FETCH_NEWCOMER_LIST',
  FETCH_NEWCOMER: 'newComer/FETCH_NEWCOMER',
  CREATE_NEWCOMER: 'newComer/CREATE_NEWCOMER',
  UPDATE_NEWCOMER: 'newComer/UPDATE_NEWCOMER',
  DELETE_NEWCOMER: 'newComer/DELETE_NEWCOMER',
  RESET: 'newComer/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<INewComer>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type NewComerState = Readonly<typeof initialState>;

// Reducer

export default (state: NewComerState = initialState, action): NewComerState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_NEWCOMER_LIST):
    case REQUEST(ACTION_TYPES.FETCH_NEWCOMER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_NEWCOMER):
    case REQUEST(ACTION_TYPES.UPDATE_NEWCOMER):
    case REQUEST(ACTION_TYPES.DELETE_NEWCOMER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_NEWCOMER_LIST):
    case FAILURE(ACTION_TYPES.FETCH_NEWCOMER):
    case FAILURE(ACTION_TYPES.CREATE_NEWCOMER):
    case FAILURE(ACTION_TYPES.UPDATE_NEWCOMER):
    case FAILURE(ACTION_TYPES.DELETE_NEWCOMER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_NEWCOMER_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10)
      };
    case SUCCESS(ACTION_TYPES.FETCH_NEWCOMER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_NEWCOMER):
    case SUCCESS(ACTION_TYPES.UPDATE_NEWCOMER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_NEWCOMER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/new-comers';

// Actions

export const getEntities: ICrudGetAllAction<INewComer> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_NEWCOMER_LIST,
    payload: axios.get<INewComer>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<INewComer> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_NEWCOMER,
    payload: axios.get<INewComer>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<INewComer> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_NEWCOMER,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<INewComer> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_NEWCOMER,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<INewComer> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_NEWCOMER,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
