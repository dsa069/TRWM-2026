import mongoose from "mongoose";

const dbURI =
  "mongodb://loc8r:loc8rpass@localhost:27017/loc8tr?authSource=admin";

mongoose
  .connect(dbURI)
  .then(() => {
    console.log(`Mongoose connected to ${dbURI}`);
  })
  .catch((err) => {
    console.error("Mongoose initial connection error:", err);
  });

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

// Graceful shutdown helper
const gracefulShutdown = (msg: string, callback: () => void) => {
  mongoose.connection
    .close()
    .then(() => {
      console.log(`Mongoose disconnected through ${msg}`);
      callback();
    })
    .catch((err) => {
      console.error("Error closing mongoose connection:", err);
      callback();
    });
};

//TO DO: Reemplazar nodemon
process.once("SIGUSR2", () => {
  gracefulShutdown("nodemon restart", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});
process.on("SIGINT", () => {
  gracefulShutdown("app termination", () => {
    process.exit(0);
  });
});
process.on("SIGTERM", () => {
  gracefulShutdown("Heroku app shutdown", () => process.exit(0));
});

export default mongoose;
