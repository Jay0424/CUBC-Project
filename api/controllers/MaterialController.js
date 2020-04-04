/**
 * MaterialController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    usermaterialsearch: async function (req, res) {
        var models = await Material.find().sort([{ id: 'DESC' }]);
        return res.view('material/usermaterialsearch', { material: models });
    },

    usermaterialresult: async function (req, res) {
        const qCategory = req.query.category || "";
        const qMaterialname = req.query.materialname;
        const qAmount = parseInt(req.query.amount);

        if (isNaN(qAmount)) {
            var models = await Material.find({
                where: {

                    category: { contains: qCategory },
                    materialname: { contains: qMaterialname },
                }

            }).sort([{ id: 'DESC' }]);
        } else {
            var models = await Material.find({
                where: {

                    category: { contains: qCategory },
                    qMaterialname: { contains: qMaterialname },
                    qAmount: Amount
                }

            }).sort([{ id: 'DESC' }]);
        }


        return res.view('material/usermaterialresult', { material: models });

    },

    usermaterialdetail: async function (req, res) {

        var model = await Material.findOne(req.params.id);

        if (!model) return res.notFound();

        return res.view('material/usermaterialdetail', { material: model });

    },

    adminmaterialsearch: async function (req, res) {
        var models = await Material.find().sort([{ id: 'DESC' }]);
        return res.view('material/adminmaterialsearch', { material: models });
    },

    adminmaterialresult: async function (req, res) {
        const qCategory = req.query.category || "";
        const qMaterialname = req.query.materialname;
        const qAmount = parseInt(req.query.amount);

        if (isNaN(qAmount)) {
            var models = await Material.find({
                where: {

                    category: { contains: qCategory },
                    materialname: { contains: qMaterialname },
                }

            }).sort([{ id: 'DESC' }]);
        } else {
            var models = await Material.find({
                where: {

                    category: { contains: qCategory },
                    qMaterialname: { contains: qMaterialname },
                    qAmount: Amount
                }

            }).sort([{ id: 'DESC' }]);
        }


        return res.view('material/adminmaterialresult', { material: models });

    },

    adminmaterialdetail: async function (req, res) {

        var model = await Material.findOne(req.params.id);

        if (!model) return res.notFound();

        return res.view('material/adminmaterialdetail', { material: model });

    },

    adminmaterialedit: async function (req, res) {
        var models = await Material.find().sort([{id:'DESC'}]);
        return res.view('material/adminmaterialedit', { material: models});
    },

     // action - adminupdate
     adminmaterialupdate: async function (req, res) {

        if (req.method == "GET") {

            var model = await Material.findOne(req.params.id);

            if (!model) return res.notFound();

            return res.view('material/adminmaterialupdate', { material: model });

        } else {

            if (!req.body.Material)
                return res.badRequest("Form-data not received.");

            var models = await Material.update(req.params.id).set({
                materialname: req.body.Material.materialname,
                category: req.body.Material.category,
                location: req.body.Material.location,
                photo: req.body.Material.photo,
                amount: req.body.Material.amount,
            }).fetch();
            if (models.length == 0) return res.notFound();

            return res.redirect("/material/adminmaterialedit");

        }
    },

    // action - delete 
    adminmaterialdelete: async function (req, res) {

        if (req.method == "GET") return res.forbidden();

        var models = await Material.destroy(req.params.id).fetch();

        if (models.length == 0) return res.notFound();

        return res.redirect("/material/adminmaterialedit");

    },


};

