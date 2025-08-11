export const errorhandler=async(err,req,res,next)=>{

    const statusCode=err.statusCode || 500;
    const message=err.message || "Something went wrong";
    
    if(statusCode===400){
        res.status(400).json({
            success:false,
            message:"Bad Request",

        })

    }
    else if(statusCode===401){
        res.status(401).json({
              success:false,
            message:"Unauthorized",

        })

    }
    else if(statusCode===403){
        res.status(403).json(
          {  success:false,
            message:"Forbidden"}
        )
    }
    else if(statusCode===404){
        res.status(404).json({
            success:false,
            message:"Not found page"
        })
    }
    else if(statusCode===409){
        res.status(409).json({
            success:false,
            message:"too many conflicts"
        })
    }
    else if(statusCode===429){
        res.status(429).json({
            success:false,
            message:"too many requests"
        })
    }else{
        res.json({
            success:false,
            message:"unknown"
        })
    }

}