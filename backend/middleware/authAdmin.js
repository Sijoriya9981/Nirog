import jwt from "jsonwebtoken"

// admin authentication middleware
const authAdmin = async (req, res, next) => {
   const authHeader = req.headers['authorization'];
         const atoken = authHeader && authHeader.split(' ')[1]; // Get the token from the headers
    if (!atoken) {
        return res.json({ success: false, message: 'Not Authorized Login Again' });
    }     try {
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
export default authAdmin;
