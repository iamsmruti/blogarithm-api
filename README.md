
# Blogarithm - API

This is the Official API for Blogarithm. ( Routes are protected )


## Features

- Authentication with JWT
- Protected Routes


## API Reference
Base Url - https://blogarithm-api.herokuapp.com/

### Authentication

#### Register ~

```http
  POST /api/auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | The E-mail goes here. |
| `password` | `string` | The Password goes here. |

The password is stored in hashed format. Hence , even the admins don't know the password.


#### Login ~

```http
  POST /api/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | The E-mail goes here. |
| `password` | `string` | The Password goes here. |

After sucessfull login , a Token is generated. 

## TOKEN can be of 3 types

- **Normal User** - Only have access to Blogarithm.

- **Author** - Have Access to Blogarithm and Blogarithm CMS, can create and delete own post.

- **Admin** - The Super user can access everything and manage users and posts.

