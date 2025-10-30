require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRoute = require('./Router/auth-router');
const contactRoute = require('./Router/contact-router');
const serviceRoute = require('./Router/service-router')

 const adminRoute = require('./Router/admin-router')
const connectDb = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);

app.use("/api/form", contactRoute);
app.use("/api/data",serviceRoute);

//  lets define the admin route 

 app.use("/api/admin", adminRoute)



app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at Port: ${PORT}`);
  });
});