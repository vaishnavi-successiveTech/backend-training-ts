import express from "express";
import dotenv from "dotenv";

import { router } from "./routes/userRouter";
import { countryRoute } from "./routes/CountryRoutes";

import { errorHandler } from "./middleware/errorHandle";
import { ErrorMiddleWare } from "./middleware/errorMiddleware";
import { CustomHeader } from "./middleware/CustomHeader";
import { basicLimiter } from "./middleware/ratelimiter";
import { ConnectionDb } from "./config/db";

dotenv.config();

export const startServer = async () => {
  try {
    const app = express();
    const PORT = process.env.PORT || 3000;

    const customHeader = new CustomHeader();
    const errorHandle = new ErrorMiddleWare();
    const conn = new ConnectionDb();

    // Rate limiter middleware
    app.use(basicLimiter(5, 60000));
    app.use(express.json());

    // Custom header middleware
    app.use(customHeader.customHeader("created-by", "vaishnavi"));

    // Routes
    app.use("/api", router);
    app.use("/country", countryRoute);

    // 404 Not Found handler (should be after all valid routes)
    app.use((req, res, next) => {
      res.status(404).json({
        success: false,
        message: "Page not found",
      });
    });

    // Error handling middleware
    app.use(errorHandle.errorHandleMiddleware);
    app.use(errorHandler);

    // Connect to DB
    await conn.connectDb();
    // await conn.seedCountries();

    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};
