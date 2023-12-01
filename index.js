let express = require ('express');
let app = express ();

let router = express.Router();
let elderberries = [
    {"id": 1, "name": "8oz jar of elderberry syrup"},
    {"id": 2, "name": "16oz jar of elderberry syrup"},
    {"id": 3, "name": "32oz jar of elderberry syrup"},
];

router.get('/', function (req,res,next) {
    res.send(elderberries);
});

app.use('/api/', router);

var server = app.listen(5500, function () {
    console.log('Node server is running on http://localhost:5500..');
});