import multer  from "multer";
const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,"./public/temp")
    },
    // filename:function(req,res,cb){
    //     const uniqueSuffix=Date.now()+'-'+Math.round(Math.random()*1E9)
    //     cb(null,this.fieldname+'-'+uniqueSuffix)
    // }
    filename:function(req,res,cb){
        cb(null,file.originalname)
    }
})

const upload= multer({storage})