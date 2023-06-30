import { Router, Request, Response } from 'express';
const registerUser = Router();

registerUser.get("/getuser", (req: Request, res: Response) => {
  res.send(req.user);
});

registerUser.get("/auth/logout", (req: Request, res: Response) => {
  if (req.user) {
    req.logout(function(err: any) {
      if (err) {
        // Error handling
      }
      res.send("done");
    });
  }
});

export default registerUser;