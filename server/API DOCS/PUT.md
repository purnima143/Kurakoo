# PUT API DOCS

**1.ADMIN: Update User Profile**

-   **URL**
    `/apiadmin/user/:id`

-   **METHOD**
    `PUT`

-   **PASSED OBJECTS** <br />

    required atleast one field to update

    `firstName,` <br />
    `lastName,` <br />
    ` email,` <br />
    `isAdmin,`

-   **Success Response**<br />

    -   **Code:** `201` <br />
        **Message:** `Profile updated` <br />
        **data:** `{ id: "user_id", firstName, lastName, email, isAdmin }`

-   **Error Response**

    -   **Code:** `400` <br />
        **Message:** `User Not Found` <br />

-   **Required Filed**
    -   **Auth Need : True**
    -   **Admin Auth Need : True**

**2. User: Follow other user**

-   **URL**
    `/followUser/:user_id`

-   **METHOD**
    `PUT`

-   **OBJECTS** <br />
    _No need to pass anything just replace :user_id with user_id which you want to update_

-   **Success Response**<br />

    -   **Code:** `201` <br />
        **Message:** `Following` <br />
        **data:** `{data}`

-   **Error Response**

    -   **Code:** `400` <br />
        **Message:** `Something went wrong` <br />

-   **Required Filed**
    -   **Auth Need : True**
    -   **Admin Auth Need : false**

**3. User: Unfollow other user**

-   **URL**
    `/unfollowUser/:user_id`

-   **METHOD**
    `PUT`

-   **OBJECTS** <br />
    _No need to pass anything just replace :user_id with user_id which you want to update_

-   **Success Response**<br />

    -   **Code:** `201` <br />
        **Message:** `Unfollowing` <br />
        **data:** `{null}`

-   **Error Response**

    -   **Code:** `400` <br />
        **Message:** `Something went wrong` <br />

-   **Required Filed**
    -   **Auth Need : True**
    -   **Admin Auth Need : false**

**4. User: Follow Space**

-   **URL**
    `/followSpace/:space_id`

-   **METHOD**
    `PUT`

-   **OBJECTS** <br />
    _No need to pass anything just replace :space_id with space_id which you want to update_

-   **Success Response**<br />

    -   **Code:** `201` <br />
        **Message:** `Following` <br />
        **data:** `{data}`

-   **Error Response**

    -   **Code:** `400` <br />
        **Message:** `Something went wrong` <br />

-   **Required Filed**
    -   **Auth Need : True**
    -   **Admin Auth Need : false**

**5. User: Unfollow Space**

-   **URL**
    `/unfollowSpace/:space_id`

-   **METHOD**
    `PUT`

-   **OBJECTS** <br />
    _No need to pass anything just replace :space_id with space_id which you want to update_

-   **Success Response**<br />

    -   **Code:** `201` <br />
        **Message:** `Unfollow` <br />
        **data:** `{data}`

-   **Error Response**

    -   **Code:** `400` <br />
        **Message:** `Something went wrong` <br />

-   **Required Filed**
    -   **Auth Need : True**
    -   **Admin Auth Need : false**
