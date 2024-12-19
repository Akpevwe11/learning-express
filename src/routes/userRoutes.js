import { addNewUser, getAllUsers, getUserByID, updateUser, deleteUser} from "../controllers/userController.js";

const routes = (app) => {

    app.route('/users')
    .post(addNewUser)
    .get(getAllUsers); 


app.route('/users/:id')
.get(getUserByID)
.put(updateUser)
.delete(deleteUser);
  
}


export default routes; 