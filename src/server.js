const app = require('express')();

app.use(express.static('./dist/resizable-widgets'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/resizable-widgets/'}
);
});
app.listen(process.env.PORT || 8080);
