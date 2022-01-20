import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 4005;

const main = async () => {
  const app = express();

  app.use(express.json());

  app.get("/", (req: Request, res: Response) => {
    res.json({ msg: "server running successfully" });
  });

  app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
  });
};

main();
