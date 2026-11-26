import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { userRoute } from "./modules/users/user.route";
import { profileRoute } from "./modules/profile/profile.route";
import { authRoute } from "./modules/auth/auth.route";
import fs from "fs";
import logger from "./middleware/logger";
import globalErrorHandler from "./middleware/globalErrorHandler";
import cors from "cors"

const app: Application = express();
 const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

// const port = config.port;
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(logger)

// app.use((req, res, next) => {
//   // console.log('Method -> URL -> Time:',req.method, req.url, Date.now());
//   const log = `\nMethod : ${req.method} | URL : ${req.url} | Time :${ Date.now()}\n`
//   fs.appendFile("logger.txt",log,(err)=>{
//     console.log(err)
//   })
//   next();
// });

app.use("/api/v1/users", userRoute);
app.use("/api/v1/profiles",profileRoute)
app.use("/api/v1/auth",authRoute)

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "This is root route",
    author: "Arnob",
  });
});


app.use(globalErrorHandler);



export default app;
