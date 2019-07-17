import { Moment } from 'moment';
import { ICity } from 'app/shared/model/city.model';

export const enum VisaStatus {
  None = 'None',
  PermenantResident = 'PermenantResident',
  Citizen = 'Citizen',
  Visitor = 'Visitor',
  StudyPermit = 'StudyPermit',
  WorkPermit = 'WorkPermit',
  WorkingHoliday = 'WorkingHoliday'
}

export const enum MemberLevel {
  None = 'None',
  GeneralServant = 'GeneralServant',
  Deacon = 'Deacon',
  OrdainedDecacon = 'OrdainedDecacon',
  Elder = 'Elder',
  InternPastor = 'InternPastor',
  Missionary = 'Missionary',
  Paster = 'Paster',
  PasterWife = 'PasterWife'
}

export const enum BaptismType {
  None = 'None',
  InfantBaptism = 'InfantBaptism',
  Baptism = 'Baptism',
  Confirmation = 'Confirmation'
}

export interface INewComer {
  id?: number;
  visaStatus?: VisaStatus;
  company?: string;
  memberLevel?: MemberLevel;
  mobilePhone?: string;
  familyRelation?: string;
  parentId?: string;
  occupation?: string;
  kFirstName?: string;
  kLastName?: string;
  eFirstName?: string;
  eLastName?: string;
  previousChurch?: string;
  carNumber1?: string;
  email?: string;
  province?: string;
  postalCode?: string;
  country?: string;
  serviceExp?: string;
  street1?: string;
  gender?: string;
  dateOfBirth?: Moment;
  photoUrl?: string;
  acquaintance?: string;
  homePhone?: string;
  street2?: string;
  carNumber2?: string;
  baptismType?: BaptismType;
  baptismChurh?: string;
  baptismYear?: number;
  registrationDate?: Moment;
  isDelete?: boolean;
  isSubmit?: boolean;
  personId?: string;
  isMember?: string;
  note?: string;
  city?: ICity;
}

export const defaultValue: Readonly<INewComer> = {
  isDelete: false,
  isSubmit: false
};
