class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

/**
 * @swagger
 *  components :
 *      schemas :
 *          User :
 *              type : object
 *              required:
 *                  - name
 *                  - email
 *              properties :
 *                  name :
 *                      type : string
 *                      description : User name
 *                  email :
 *                      type : string
 *                      format : email
 *                      description : Email for user, needs to be unique
 *              example :
 *                  name : tester
 *                  email : tester@tester.com
 *
 */

module.exports = User;
