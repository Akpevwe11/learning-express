const routes = (app) => {

    app.route('/users')
    .get((req, res) => {
            res.send('GET all users successfully');
            console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
            console.log(`${req.method}`);
    })
    .post((req, res) => {
        res.send('POST request successfully');
    }); 

    app.route('/users/:userId')
    .put((req, res) => {
        res.send('PUT request successfully');
    })
    .delete((req, res) => {
        res.send('DELETE request successfully');
    });   
}

export default routes; 