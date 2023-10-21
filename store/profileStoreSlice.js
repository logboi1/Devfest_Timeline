export const profileStoreSlice = set => ({
  userProfile: {},
  setUserProfile: userProfile => set({userProfile: userProfile}),

  userAuthorized: null,
  setUserAuthorized: userAuthorized => set({userAuthorized: userAuthorized}),
});
