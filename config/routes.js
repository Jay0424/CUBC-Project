/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  //Homepage
  '/': 'UserController.login',

  'GET /user/login': 'UserController.login',
  'POST /user/login': 'UserController.login',
  'POST /user/logout': 'UserController.logout',

  '    /item/userindex': 'ItemController.userindex',
  '    /item/adminindex': 'ItemController.adminindex',
  '    /item/itemsearch': 'ItemController.itemsearch',
  '    /item/vitemsearch': 'ItemController.vitemsearch',

  '    /item/usernoti': 'ItemController.usernoti',
  '    /item/useraccount': 'ItemController.useraccount',

  //Book user
  '   /book/booksearch': 'BookController.booksearch',
  '   /book/bookdetail/:id': 'BookController.bookdetail',
  'GET /book/bookresult': 'BookController.bookresult',
  //Book vistor
  '    /book/vbooksearch': 'BookController.vbooksearch',
  'GET /book/vbookresult': 'BookController.vbookresult',

  //Game user
  '   /game/gamesearch': 'GameController.gamesearch',
  'GET /game/gameresult': 'GameController.gameresult',
  //Game vistor
  '   /game/vgamesearch': 'GameController.vgamesearch',
  'GET /game/vgameresult': 'GameController.vgameresult',

  //Gift user
  '   /gift/giftsearch': 'GiftController.giftsearch',
  'GET /gift/giftresult': 'GiftController.giftresult',
  //Gift vistor
  '   /gift/vgiftsearch': 'GiftController.vgiftsearch',
  'GET /gift/vgiftresult': 'GiftController.vgiftresult',

  // material user
  '   /material/materialsearch': 'MaterialController.materialsearch',
  'GET /material/mamterialresult': 'MaterialController.materialresult',
  //Material vistor
  '   /material/vmaterialsearch': 'MaterialController.vmaterialsearch',
  'GET /material/vmaterialresult': 'MaterialController.vmaterialresult',


  


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
