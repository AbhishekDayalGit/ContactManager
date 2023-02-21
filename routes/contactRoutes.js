const express=require('express')
const router=express.Router()
// router.route("/").get(()=>{
//     console.log(111);
// })
const {getContacts,createContact,updateContact,getContact,deleteContact}=require('../controller/contact')
router.route("/").get(getContacts).post(createContact)
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact)


module.exports=router
