import { addNewUser, getAllUsers } from "../controllers/userController.js";

const routes = (app) => {

    app.route('/users')
    .post(addNewUser)
    .get(getAllUsers); 
  
}

export default routes; 