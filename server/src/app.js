import express from 'express';
import authRouter from './routes/auth.routes.js';
import courseRouter from './routes/course.routes.js';
import categoryRouter from './routes/category.routes.js';
import cors from 'cors';
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/', (req, res) =>{
    res.send('this is working')
})
app.post("/enroll", async (req, res) => {
    const { user_id, course_id } = req.body;
  
    if (!user_id || !course_id) {
      return res.status(400).json({ success: false, message: "Missing user or course ID" });
    }
  
    try {
      const result = await pool.query(
        "INSERT INTO enrollment (user_id, course_id, enrolled_at) VALUES ($1, $2, CURRENT_TIMESTAMP) RETURNING *",
        [user_id, course_id]
      );
      res.json({ success: true, message: "Enrollment successful!", data: result.rows[0] });
    } catch (error) {
      console.error("Error inserting enrollment data:", error);
      res.status(500).json({ success: false, message: "Database insert failed" });
    }
  });
//   app.get("/enrolled-users", async (req, res) => {
//     try {
//       const result = await pool.query(`
//         SELECT e.course_id, u.id AS user_id, u.name AS user_name, e.enrolled_at
//         FROM enrollment e
//         JOIN users u ON e.user_id = u.id
//         ORDER BY e.enrolled_at DESC;
//       `);
//       res.json(result.rows);
//     } catch (error) {
//       console.error("Error fetching enrolled users:", error);
//       res.status(500).json({ success: false, message: "Failed to fetch enrolled users" });
//     }
//   });

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/category', categoryRouter);
// app.use("/api/v1/enrollment", enrollmentRouter);

export default app;