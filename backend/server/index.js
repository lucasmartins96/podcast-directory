const app = require('./app');

const port = parseInt(process.env.PORT || '3000', 10);
app.set('port', port);

app.listen(app.get('port'), () => {
  console.log(`App listening on port ${port}!`);
});
