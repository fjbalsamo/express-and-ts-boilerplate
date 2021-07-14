import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
/**
 * this replace at body-parser
 */
app.use(express.json());

/**
 * open origins *.*
 */
app.use(cors());

const port: string = process.env.PORT || "3000";

app.use("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "hello from server" });
});

app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
