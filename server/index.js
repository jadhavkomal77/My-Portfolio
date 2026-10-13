
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import fs from "fs";

import adminRoutes from "./routes/adminRoute.js";


const app = express();

const __dirname = path.resolve();

app.use(cookieParser());

app.use(
  express.json({
    limit: "1mb",
  })
);

// =====================================
// CORS
// =====================================

const allowedOrigins = [
  "http://localhost:5173",
  "https://new-castrex-client.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without Origin
      // such as Postman/server-to-server
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error("Not allowed by CORS")
      );
    },

    credentials: true,

    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);


app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is Running! 🚀",
  });
});

if (process.env.NODE_ENV === "production") {
  const distPath = path.join(
    __dirname,
    "dist"
  );

  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
  }
}

app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);

  // CORS error
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "CORS policy blocked this request.",
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

// =====================================
// PORT
// =====================================

const PORT = process.env.PORT || 5000;

// =====================================
// DATABASE + SERVER
// =====================================

const startServer = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error(
        "MONGO_URL environment variable is missing!"
      );
    }

    await mongoose.connect(
      process.env.MONGO_URL
    );

    console.log(
      "MongoDB Connected ✅"
    );

    // Local development server
    if (
      process.env.NODE_ENV !==
      "production"
    ) {
      app.listen(PORT, () => {
        console.log(
          `🚀 Server running locally on port ${PORT}`
        );
      });
    }
  } catch (error) {
    console.error(
      "❌ Server Startup Error:",
      error.message
    );

    process.exit(1);
  }
};

startServer();

export default app;







