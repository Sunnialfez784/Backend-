import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Teacher Joke",
      joke: "Teacher: Homework kyu nahi kiya? Student: Sir, light nahi thi. Teacher: Toh candle jala lete! Student: Sir, machis nahi thi.",
    },
    {
      id: 2,
      title: "Doctor Joke",
      joke: "Patient: Doctor sahab, mujhe bhoolne ki bimari hai. Doctor: Kab se? Patient: Kab se kya?",
    },
    {
      id: 3,
      title: "Mobile Joke",
      joke: "Papa: Beta phone chhod de, kuch padhai kar le. Beta: Papa, phone mein hi toh PDF hai!",
    },
    {
      id: 4,
      title: "Friend Joke",
      joke: "Friend: Bhai tu gym kyu nahi jaata? Me: Bhai, ghar mein hi dumbbell pada hai. Friend: Kaha? Me: Gas cylinder!",
    },
    {
      id: 5,
      title: "Exam Joke",
      joke: "Teacher: Exam mein itne kam marks kaise aaye? Student: Sir, marks bhi toh limited the!",
    },
  ];
  res.send(jokes)
});

const post = process.env.PORT || 3000;

app.listen(post, () => {
  console.log(`server at http://localhost:${post}`);
});
