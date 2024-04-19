var express = require('express'),
    app     = express();

// start server
app.use(express.static(__dirname));
app.listen(8000);
