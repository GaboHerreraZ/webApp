import { useForm } from "react-hook-form";
import { Information } from "../models/information.model";
import { Address } from "../models/address.model";
import { SocialMedia } from "../models/social-media.model";
import { useState } from "react";

export const useRegister = () => {
  const [formsValidity, setFormsValidity] = useState({
    information: false,
    address: false,
    socialMedia: false,
  });

  const informationForm = useForm<Information>();
  const addressForm = useForm<Address>();
  const socialMediaForm = useForm<SocialMedia>();

  const validateForms = () => {
    const isInformationValid = informationForm.trigger();
    const isAddressValid = addressForm.trigger();
    const isSocialMediaValid = socialMediaForm.trigger();

    return Promise.all([
      isInformationValid,
      isAddressValid,
      isSocialMediaValid,
    ]).then(([infoValid, addrValid, socialValid]) => {
      setFormsValidity({
        information: infoValid,
        address: addrValid,
        socialMedia: socialValid,
      });

      return infoValid && addrValid && socialValid;
    });
  };

  const saveData = async () => {
    const allValid = await validateForms();
    if (allValid) {
      const informationData = informationForm.getValues();
      const addressData = addressForm.getValues();
      const socialMediaData = socialMediaForm.getValues();
      console.log("All Data:", {
        informationData,
        addressData,
        socialMediaData,
      });
    } else {
      console.log("Some forms are invalid.");
    }
  };

  return {
    informationForm,
    addressForm,
    socialMediaForm,
    formsValidity,
    saveData,
  };
};
