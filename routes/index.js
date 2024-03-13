var express = require('express');
// var Task = require('../models/task');
var Product = require('../models/product');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Task.find()
  //   .then((tasks) => {      
  //     const currentTasks = tasks.filter(task => !task.completed);
  //     const completedTasks = tasks.filter(task => task.completed === true);

  //     console.log(`Total tasks: ${tasks.length}   Current tasks: ${currentTasks.length}    Completed tasks:  ${completedTasks.length}`)
  //     Product.find()
  //     .then((products) => {
  //       const currentProducts = products.filter(product => !product.completed);
  //       const completedProducts = products.filter(product =>product.completed === true);
  //       console.log(`Total products: ${products.length}   Current products: ${currentProducts.length}    Completed tasks:  ${completedProducts.length}`)
  //       // res.render('index', { currentProducts: currentProducts, completedProducts: completedProducts });
  //       res.render('index', { currentTasks: currentTasks, completedTasks: completedTasks, currentProducts: currentProducts, completedProducts: completedProducts  });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.send('Sorry! Something went wrong.');
  //     });
      
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.send('Sorry! Something went wrong.');
  //   });
  Product.find()
    .then((products) => {
      const currentProducts = products.filter(product => !product.completed);
      const completedProducts = products.filter(product =>product.completed === true);
      console.log(`Total products: ${products.length}   Current products: ${currentProducts.length}    Completed tasks:  ${completedProducts.length}`)
      res.render('index', { currentProducts: currentProducts, completedProducts: completedProducts });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
});


// router.post('/addTask', function(req, res, next) {
//   const taskName = req.body.taskName;
//   const createDate = Date.now();
  
//   var task = new Task({
//     taskName: taskName,
//     createDate: createDate
//   });
//   console.log(`Adding a new task ${taskName} - createDate ${createDate}`)

//   task.save()
//       .then(() => { 
//         console.log(`Added new task ${taskName} - createDate ${createDate}`)        
//         res.redirect('/'); })
//       .catch((err) => {
//           console.log(err);
//           res.send('Sorry! Something went wrong.');
//       });
// });

// router.post('/completeTask', function(req, res, next) {
//   console.log("I am in the PUT method")
//   const taskId = req.body._id;
//   const completedDate = Date.now();

//   Task.findByIdAndUpdate(taskId, { completed: true, completedDate: Date.now()})
//     .then(() => { 
//       console.log(`Completed task ${taskId}`)
//       res.redirect('/'); }  )
//     .catch((err) => {
//       console.log(err);
//       res.send('Sorry! Something went wrong.');
//     });
// });


// router.post('/deleteTask', function(req, res, next) {
//   const taskId = req.body._id;
//   const completedDate = Date.now();
//   Task.findByIdAndDelete(taskId)
//     .then(() => { 
//       console.log(`Deleted task $(taskId)`)      
//       res.redirect('/'); }  )
//     .catch((err) => {
//       console.log(err);
//       res.send('Sorry! Something went wrong.');
//     });
// });


router.post('/addProduct', function(req, res, next) {
  const productName = req.body.productName;
  const productType = req.body.productType;
  const orderDate = Date.now();
  
  var product = new Product({
    productName: productName,
    orderDate: orderDate,
    productType : productType,
  });
  console.log(`Adding a new product ${productName} - orderDate ${orderDate}`)

  product.save()
      .then(() => { 
        console.log(`Added new product ${productName} - orderDate ${orderDate}`)        
        res.redirect('/'); })
      .catch((err) => {
          console.log(err);
          res.send('Sorry! Something went wrong.');
      });
});

router.post('/completeOrder', function(req, res, next) {
  console.log("I am in the PUT method")
  const productId = req.body._id;
  const deliveredDate = Date.now();

  Product.findByIdAndUpdate(productId, { completed: true, deliveredDate: deliveredDate})
    .then(() => { 
      console.log(`Completed product order ${productId}`)
      res.redirect('/'); }  )
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
});


router.post('/deleteOrder', function(req, res, next) {
  const productId = req.body._id;
  Product.findByIdAndDelete(productId)
    .then(() => { 
      console.log(`Deleted product order $(taskId)`)      
      res.redirect('/'); }  )
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
});


module.exports = router;
