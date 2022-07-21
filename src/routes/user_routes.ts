import express, { Request, Response } from "express";
import { User } from "../models/user";

const router = express.Router();

router.get("/api", async (req: Request, res: Response) => {
  const dummyUser = await User.find({});
  res.status(200).json(dummyUser);
});

router.post("/api", async (req: Request, res: Response) => {
  const { name, age, email } = req.body;
  const user = User.build({ name, age, email });
  await user.save();
  res.status(201).send(user);
});

export { router as userRouter };
