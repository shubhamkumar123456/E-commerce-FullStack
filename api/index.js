const express =require('express');
const connectTodb=require('./db');
const cors=require('cors');
const dotenv=require('dotenv')
dotenv.config()
const app = express();
connectTodb()
const port=process.env.PORT || 4000;

const userRoutes=require('./routes/user')
const adminRoutes=require('./routes/company')
const postRouter=require('./routes/post')
const cartRoutes=require('./routes/cart');
const historyRouter=require('./routes/history');
const payementRoutes=require('./routes/payement')


app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("home")
})

app.use('/api/users',userRoutes);
app.use('/api/',adminRoutes);
app.use('/api/posts',postRouter);
app.use('/api/cart',cartRoutes);
app.use('/api/history',historyRouter);
app.use('/api/payement',payementRoutes);


app.listen(port,()=>{
    console.log("listening on port ",port)
})