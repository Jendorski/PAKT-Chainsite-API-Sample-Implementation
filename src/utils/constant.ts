// Please note that some of these endpoints can be enabled or disabled according to policy settings on your Chainsite dashboard. Ensure the endpoint you want to utilize has its policy settings enabled.
export const API_PATHS = {
  API_VERSION: "/v1",
  // Authentication endpoints
  LOGIN: "/auth/login",
  REGISTER: "/auth/create-account",
  ACCOUNT_VERIFY: "/auth/account/verify",
  RESEND_VERIFY_LINK: "/auth/verify/resend",
  VALIDATE_PASSWORD_TOKEN: "/auth/validate/password",
  RESET_PASSWORD: "/auth/password/reset",
  CHANGE_PASSWORD: "/auth/password/change",
  VALIDATE_REFERRAL: "/auth/referral/validate/",

  // Collection endpoints
  COLLECTION: "/collection",
  COLLECTION_TYPE: "/collection-type",
  COLLECTION_MANY: "/collection/many",
  COLLECTION_UPDATE: "/collection",

  // Bookmark endpoints
  BOOKMARK: "/bookmark",

  // Notifications
  NOTIFICATION_FETCH: "/notifications/",
  NOTIFICATION_MARK_ALL: "/notifications/mark/all",
  NOTIFICATION_MARK_ONE: "/notifications/mark",

  // Manage Account and settings
  ACCOUNT: "/account",
  ACCOUNT_ONBOARD: "/account/onboard",
  ACCOUNT_UPDATE: "/account/update",
  ACCOUNT_PASSWORD: "/account/password/change",
  ACCOUNT_TWO_INIT: "/account/initiate/2fa",
  ACCOUNT_TWO_ACTIVATE: "/account/activate/2fa",
  ACCOUNT_TWO_DEACTIVATE: "/account/deactivate/2fa",
  ACCOUNT_FETCH_ALL: "/account/user",
  ACCOUNT_FETCH_SINGLE: "/account/user/",
  ACCOUNT_LOGOUT: "/account/logout",
  ACCOUNT_SEND_EMAIL_TWO_FA: "/account/2fa/email",

  // Wallet Endpoints
  WALLET_TRANSACTIONS: "/transaction/",
  A_WALLET_TRANSACTION: "/transaction",
  WALLET_EXCHANGE: "/wallet/exchange",
  WALLET_DATA: "/wallet/data",
  WALLET_STATS: "/wallet/stats",
  WALLET_AGGREGATE_STATS: "/wallet/aggregate/stats",
  WALLETS: "/wallet",
  SINGLE_WALLET: "/wallet/coin",

  // File Upload
  FILE_UPLOAD: "/upload/",

  // Review
  ADD_REVIEW: "/reviews/",
  GET_REVIEW: "/reviews/",

  //Withdrawal
  CREATE_WITHDRAWAL: "/withdrawals/",
  FETCH_WITHDRAWALS: "/withdrawals/",

  //User Verification
  CREATE_SESSION: "/user-verification/veriff/session/new",
  SEND_SESSION_MEDIA: "/user-verification/veriff/session/media",
  SESSION_ATTEMPTS: "/user-verification/veriff/session/attempts",
  USER_VERIFICATION: "/user-verification/user",
  DELETE_SESSION: "/user-verification/veriff/session/delete",

  //Chat
  GET_USER_MESSAGES: "/chat/",

  //Connection Filter
  CREATE_CONNECTION_FILTER: "/conn-filter/",
  GET_CONNECTION_FILTER: "/conn-filter/user",
  UPDATE_CONNECTION_FILTER: "/conn-filter/",

  //Invite
  SEND_INVITE: "/invite/",
  ACCEPT_INVITE: "/invite",
  DECLINE_INVITE: "/invite",
  VIEW_ALL_INVITE: "/invite/",
  VIEW_A_INVITE: "/invite/",
  CANCEL_AN_INVITE: "/invite/",

  //Feeds
  FEEDS: "/feeds",
  FEEDS_DISMISS_ONE: "/dismiss",
  FEEDS_DISMISS_ALL: "/feeds/dismiss/all",
};
