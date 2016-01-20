var Product = require("./../models/Product")

module.exports = {
    create: function(req, res){
        var newProduct = new Product(req.body);
        newProduct.save(function(err, result){
            if(err) res.status(500).json(err);
            else res.json(result);
        })
    },
    read: function(req, res){
        Product
        .find(req.query)
        .exec(function(err, result) {
            if(err) res.status(500).json(err);
            else res.json(result);
        })
    },
    update: function(req, res){
        Product.findByIdAndUpdate(req.params.id, req.body, function(err, result){
            if(err) res.status(500).json(err);
            else res.json(result);
        })
    },
    delete: function(req, res){
        Product.findByIdAndRemove(req.params.id, function(err, result){
            if(err) res.status(500).json(err);
            else res.json(result);
        })
    }
}
// app.post('/products', function(req, res){
//     var dataToInsert = req.body;
//     db.products.insert(dataToInsert, function(err, result){
// if(err){    
//             res.status(500).end('not posting');
//         }
//     res.send(result);        
//     })
// })

// app.get('/products', function(req, res){
//     console.log('get hit');
//     db.products.find({}, function(err, result){
//         if(err){
//             res.status(550).end('not getting')
//         }
//         res.send(result);
//     })
// });


// app.put('/products/:id', function(req, res){
//     console.log('get put');
//     var idToModify = ObjectId(req.params.id);
//     var updateObject = {
//         query: {_id: idToModify},
//         update: {$set: req.body},
//         new: false
//     }
//     db.products.findAndModify(updateObject, function(err, result){
//         if(err || result.n === 0){
//             res.status(500).send('Failed to put');
//         }
//         res.send(result);
//     });
// });

// app.delete('/products/:id', function(req, res){
//     console.log('get delete');
//     var idToDelete = ObjectId(req.params.id);
//     db.products.remove({_id: idToDelete}, 
//     function(err, result){
//         if (err || result.n === 0){
//             res.status(500).send("Failed to Delete");
//         }        
//         res.send("Product has been deleted");
//     });
// });

