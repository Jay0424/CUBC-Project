/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,

  ItemController:
  {
    userindex:"isUser",
    usersearch:"isUser",
    usernoti:"isUser",
    useraccount:"isUser",
    adminindex:"isAdmin",
    adminsearch:"isAdmin",
    adminnoti:"isAdmin",
    adminaccount:"isAdmin",
    adminadditem:"isAdmin",
    adminaddbook:"isAdmin",
    adminaddgame:"isAdmin",
    adminaddgift:"isAdmin",
    adminaddmaterial:"isAdmin",
  },

  BookController:
  {
    userbooksearch:"isUser",
    userbookresult:"isUser",
    userbookdetail:"isUser",
    adminbooksearch:"isAdmin",
    adminbookresult:"isAdmin",
    adminbookdetail:"isAdmin",
  },

  GameController:
  {
    usergamesearch:"isUser",
    usergameresult:"isUser",
    usergamedetail:"isUser",
    admingamesearch:"isAdmin",
    admingameresult:"isAdmin",
    admingamedetail:"isAdmin",
  },

  GiftController:
  {
    usergiftsearch:"isUser",
    usergiftresult:"isUser",
    usergiftdetail:"isUser",
    admingiftsearch:"isAdmin",
    admingiftresult:"isAdmin",
    admingiftdetail:"isAdmin",
  },

  MaterialController:
  {
    usermaterialsearch:"isUser",
    usermaterialresult:"isUser",
    usermaterialdetail:"isUser",
    adminmaterialsearch:"isAdmin",
    adminmaterialresult:"isAdmin",
    adminmaterialdetail:"isAdmin",
  }

};
