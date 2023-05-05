
/* -------------------------------------------------------------------------- */
/*                               Authentication                               */
/* -------------------------------------------------------------------------- */

export interface AuthenticationRequest {
  authorizationCode: string
}

export interface AuthenticationResponse {
  // The ID token is a JWT token that contains information about the user
  idToken: string

  // Session ID is a unique identifier for the user's session
  sessionId: string

  // ID of the user's database
  collectionId: string
}

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
