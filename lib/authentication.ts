
/* -------------------------------------------------------------------------- */
/*                               Authentication                               */
/* -------------------------------------------------------------------------- */

export interface AuthenticationRequest {
  authorizationCode: string
}

export interface AuthenticationSuccessfulResponse {
  status: 'ok',

  // The ID token is a JWT token that contains information about the user
  idToken: string

  // Session ID is a unique identifier for the user's session
  sessionId: string

  // ID of the user's database
  collectionId: string
}

export interface AuthenticationNextStepRequiredResponse {
  status: 'next',

  // Message to be displayed to the user
  message: string

  // Data from the server
  data?: unknown
}

export type AuthenticationResponse = AuthenticationSuccessfulResponse | AuthenticationNextStepRequiredResponse


/* -------------------------------------------------------------------------- */
/*                                Refresh token                               */
/* -------------------------------------------------------------------------- */

export interface RefreshTokenRequest {
  // Session ID is a unique identifier for the user's session
  sessionId: string
}

export interface RefreshTokenResponse {
  // The ID token is a JWT token that contains information about the user
  idToken: string
}
