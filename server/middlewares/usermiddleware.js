
const userMiddleware = async(req,res,next) =>{
    const SECRET_KEY = process.env.SECRET_KEY;
  const header = req.headers.authorization;
  if (header) {
    const token = header.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ msg : err });
      }
      req.user = user;
      next();
    });
  } else return res.status(401).json({ msg : "Unauthorized" });
};

export default userMiddleware;
