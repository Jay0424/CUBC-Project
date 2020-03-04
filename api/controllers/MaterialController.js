/**
 * MaterialController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
// // json function
//     json: async function (req, res) {

//     var materials = await materials.find();

//     return res.json(materials);
// },


    vmaterialsearch: async function (req, res) {

    var models = await Material.find();
    return res.view('material/vmaterialsearch', { materials: models });
    
},



};

