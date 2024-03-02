export interface ICountry {
  _id: string;
  name: string;
  code: string;
  created_at: Date;
}

export interface IAddCountryFormProps {
  country?: ICountry;
}
