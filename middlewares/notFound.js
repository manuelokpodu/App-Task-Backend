// A middleware in backend development is like a middleman that sits between the incoming request from the client and the final response from the server. it is a function that can modify the request, process it, handle certain task before passing it onto the next part of the code. sending back a response

const notFound = (req, res) => {
  res.json({ message: "Route not found" });
};

module.exports = notFound;
