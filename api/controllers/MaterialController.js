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

materialsearch: async function (req, res) {
    var models = await Book.find().sort([{id:'DESC'}]);
    return res.view('material/materialsearch', { material: models});
},

materialresult: async function(req, res){
    const qmtlCatrgory=req.query.mtlcategory || "";
    const qmtlname = req.query.mtlname;
    const qmtlquantity = req.query.mtlquantity;
    
    var models = await Material.find({
        where:{
        
        mtlcategory:{contains:qmtlCatrgory},
        mtlname:{contains:qmtlname},
        mtlquantity:{contains:qmtlquantity},
        }
        
    }).sort([{id:'DESC'}]);

    return res.view('material/materialresult', {material:models});

},

vmaterialsearch: async function (req, res) {
    var models = await Material.find().sort([{id:'DESC'}])
    return res.view('material/vmaterialsearch', { material: models});
},

vmaterialresult: async function(req, res){
    const qmtlCatrgory=req.query.mtlcategory || "";
    const qmtlname = req.query.mtlname;
    const qmtlquantity = req.query.mtlquantity;


    var models = await Material.find({
        where:{
        
        mtlcategory:{contains:qmtlCatrgory},
        mtlname:{contains:qmtlname},
        quantity:{contains:qmtlquantity},

        }
        
    }).sort([{id:'DESC'}]);

    return res.view('material/vmaterialresult', {material:models});

},



};

