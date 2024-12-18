export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  location: {
    lng: number;
    lat: number;
  };
}
