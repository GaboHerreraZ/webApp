import { Address } from "./address.model";
import { Information } from "./information.model";
import { SocialMedia } from "./social-media.model";

export interface Register {
  information: Information;
  address: Address;
  socialMedia: SocialMedia;
}
