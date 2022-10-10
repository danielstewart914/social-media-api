const userRouter = require( 'express' ).Router();

const { 
    getAllUsers, 
    getSingleUser,
    createNewUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require( '../../controllers/userController' );

userRouter.route( '/' )
    .get( getAllUsers )
    .post( createNewUser );

userRouter.route( '/:id' )
    .get( getSingleUser )
    .delete( deleteUser )
    .put( updateUser );

userRouter.route( '/:userId/friends/:friendId' )
    .post( addFriend )
    .delete( removeFriend );

module.exports = userRouter;