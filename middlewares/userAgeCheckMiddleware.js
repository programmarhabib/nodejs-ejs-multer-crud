/**
 * age check middleware function
 * */ 

export const ageCheckMilldewareF=(req, res, next)=>{
    if (req.body.age > 18) {
      
      next()
    }else{
      res.status(200).json({message:"you are not allwoed"})
    }
}
