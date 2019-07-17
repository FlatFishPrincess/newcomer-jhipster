import { INewComer } from 'app/shared/model/new-comer.model';

export interface ICity {
  id?: number;
  name?: string;
  code?: string;
  newcomers?: INewComer[];
}

export const defaultValue: Readonly<ICity> = {};
