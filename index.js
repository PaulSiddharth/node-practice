const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const fs = require("fs");

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next)=>{
    // return res.json({msg:"hello from middleware1"})
    next();
})

app.get("/users", (req, res) => {

    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    return res.send(html);

});
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.route("/api/users/:id").get((req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    return res.json(user);
}).patch((req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    user.first_name = req.body.first_name;
    return res.json(user);
}).delete((req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    users = users.filter(user => user.id != id);
    return res.json(user);
});


app.post("/api/users", (req, res) => {
    const user = req.body;
    users.push({ ...user, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        return res.json({ status: "user created", id: users.length });
    });
});


app.listen(8800, () => {
    console.log("Server started on http://localhost:8800");
});