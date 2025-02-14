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