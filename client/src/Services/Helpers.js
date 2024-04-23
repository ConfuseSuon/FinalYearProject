export const getAccessTokenFromLocalStorage = () => {
  let user = JSON.parse(localStorage.getItem("KBA"));
  return user;
};

export const setAccessTokenFromLocalStorage = (key) => {
  localStorage.setItem("KBA", JSON.stringify(key));
};
export const getAdminAccessTokenFromLocalStorage = () => {
  let user = JSON.parse(localStorage.getItem("KBAadmin"));
  return user;
};

export const setAdminAccessTokenFromLocalStorage = (key) => {
  localStorage.setItem("KBAadmin", JSON.stringify(key));
};

export const setOtpTokenToLocalStorage = (otpToken) =>
  localStorage.setItem("otpTokenuserdgmp", otpToken);

export const getOtpTokenFromLocalStorage = () =>
  localStorage.getItem("otpTokenuserdgmp");

export const isOtpTokenRemoveFromLocalStorage = () => {
  localStorage.removeItem("otpToken");
  return !localStorage.getItem("optToken") ? true : false;
};

export const setUserDetailsToLocalStorage = (userDetails) =>
  localStorage.setItem("KBA", JSON.stringify(userDetails));
export const setUserEmailToLocalStorage = (userDetails) =>
  localStorage.setItem("KBAemail", JSON.stringify(userDetails));
export const getUserEmailFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("KBAemail"));

export const getUserFromLocalStorage = () => {
  let user = typeof window !== "undefined" && getUserStringFromLocalStorage();
  return user ? user : null;
};
export const getUserStringFromLocalStorage = () => {
  let user =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("KBAadname"));
  return user ? user : null;
};

export const isRemoveUserFromLocalStorage = () => {
  localStorage.removeItem("KBA");
  localStorage.removeItem("KBAadname");
  localStorage.removeItem("KBArefer");
  localStorage.removeItem("KBAprofile");
  localStorage.removeItem("KBAemail");
  localStorage.removeItem("otpTokenuserdgmp");
  localStorage.removeItem("KBAphone");
  return !JSON.parse(localStorage.getItem("KBA")) ? true : false;
};

export const doesUserExistInLocalStorage = () => {
  if (!getUserFromLocalStorage()) {
    window.location.href = "/signin";
    return;
  }
  return;
};

export const getUserIdFromLocalStorage = () => {
  const details = JSON.parse(localStorage?.getItem("KBA"));

  return details?.user?._id;
};
export const getUserImageFromLocalStorage = () => {
  const profile =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("KBAprofile"))
      : "";
  return profile;
};
export const setUserImageToLocalStorage = (userImage) => {
  typeof window !== "undefined" &&
    localStorage.setItem("KBAadprofile", JSON.stringify(userImage));
};
export const removeUserImageFromLocalStorage = () => {
  typeof window !== "undefined" && localStorage.removeItem("KBAadprofile");
};
export const setUserReferrer = (referrer) => {
  typeof window !== "undefined" &&
    localStorage.setItem("KBAadrefer", JSON.stringify(referrer));
};
export const getUserRefererFromLocalStorage = () => {
  const profile =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("KBAadrefer"))
      : "";
  return profile;
};

export const getUsernameFromLocalstorage = () => {
  const profile =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("KBAadname"))
      : "";
  return profile;
};
export const getUserPhoneFromLocalstorage = () => {
  const profile =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("KBAadphone"))
      : "";
  return profile;
};
export const setUsernameToLocalStorage = (name) => {
  typeof window !== "undefined" &&
    localStorage.setItem("KBAadname", JSON.stringify(name));
};
export const setUserphoneToLocalStorage = (name) => {
  typeof window !== "undefined" &&
    localStorage.setItem("KBAadphone", JSON.stringify(name));
};

export const setUnverifiedEmailToLocalStorage = (email) => {
  localStorage.setItem("KBA-unverified", JSON.stringify(email));
};
export const getUnverifiedEmailFromLocalstorage = () => {
  const resp = JSON.parse(localStorage.getItem("KBA-unverified"));
  return resp;
};
export const setForgotEmailToLocalStorage = (email) => {
  localStorage.setItem("KBA-unverified", JSON.stringify(email));
};
export const getForgotEmailFromLocalstorage = () => {
  const resp = JSON.parse(localStorage.getItem("KBA-unverified"));
  return resp;
};

export const setAdminDetailsToLocalStorage = (AdminDetails) =>
  localStorage.setItem("KBA", JSON.stringify(AdminDetails));

export const getAdminFromLocalStorage = () => {
  let Admin = typeof window !== "undefined" && getAdminStringFromLocalStorage();
  return Admin ? Admin : null;
};
export const getAdminStringFromLocalStorage = () => {
  let Admin =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("KBAadminname"));
  return Admin ? Admin : null;
};
export const setAdminUsernameToLocalStorage = (name) => {
  typeof window !== "undefined" &&
    localStorage.setItem("KBAadminname", JSON.stringify(name));
};
