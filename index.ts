import express from "express";
import type { Express, Request, Response } from "express";
const app = express();
const port: number = 6000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello World");
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
