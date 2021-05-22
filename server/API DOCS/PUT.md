# PUT API DOCS
**1.ADIMN: Update User Profile**
* **URL**
    `/apiadmin/user/:id`

* **METHOD**
    `PUT`

* **PASSED OBJETCS** <br />

    required atleast one field to update

    `firstName,` <br />
    `lastName,` <br />
    ` email,` <br />
    `isAdmin,`

* **Success Response**<br />
    * **Code:** `201` <br />
      **Message:** `Profile updated` <br />
      **data:** `{ id: "user_id", firstName, lastName, email, isAdmin }`

* **Error Response**
    * **Code:** `40$` <br />
      **Message:** `User Not Found` <br />

* **Required Filed**
     * **Auth Need : True**
    * **Admin Auth Need : True**