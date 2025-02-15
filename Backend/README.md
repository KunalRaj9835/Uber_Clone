# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
Registers a new user by creating a user account with provided information.

### Request Body:
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing the user's email address with a minimum length of 5 characters (required).
- `password`: A string with a minimum length of 6 characters (required).

### Example:

- `user`:(object):
  - `fullname`: (object).
    - `firstname`: ( string,required ): A string with a minimum length of 3 characters (required).
    - `lastname`: ( string,optional ): A string with a minimum length of 3 characters (optional).
  - `email`: ( string, required )A string representing the user's email address with a minimum length of 5 characters (required).
  - `password`: ( string,required)A string with a minimum length of 6 characters (required).
- `token`(string): JWT Token

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:
Logs in an existing user by validating their email and password.

### Request Body:
The request body should be a JSON object with the following fields:

- `email`: A string representing the user's email address (required).
- `password`: A string with a minimum length of 6 characters (required).

### Example Response:

- `user`:(object):
  - `fullname`: (object).
    - `firstname`: ( string,required ): A string with a minimum length of 3 characters (required).
    - `lastname`: ( string,optional ): A string with a minimum length of 3 characters (optional).
  - `email`: ( string, required )A string representing the user's email address with a minimum length of 5 characters (required).
  - `password`: ( string,required)A string with a minimum length of 6 characters (required).
- `token`(string): JWT Token

# User Profile Endpoint

## Endpoint: `/users/profile`

### Method: GET

### Description:
Retrieves the profile information of the currently authenticated user.

### Authentication:
Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Example Response:
- `user` (object): User object containing user details
  - `fullname`: (object)
    - `firstname`: (string) User's first name
    - `lastname`: (string) User's last name
  - `email`: (string) User's email address

# User Logout Endpoint

## Endpoint: `/users/logout`

### Method: POST

### Description:
Logs out the current user and blacklist the token provided in cookie or header.

### Authentication:
Requires a valid JWT token in the Authorization header or cookie:
`Authorization: Bearer <token>`

