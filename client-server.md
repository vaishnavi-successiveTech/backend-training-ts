# Client-Server Architecture

The **Client-Server Architecture** is a foundational model in computer networking and software design. It structures an application as two separate entities: the **client**, which requests services, and the **server**, which provides services.

---

##  Core Concept

- **Client**: A user-facing application that sends requests (e.g., web browser, mobile app).
- **Server**: A backend system or application that listens for and processes incoming client requests, and returns responses (e.g., database server, web server).

---

##  Characteristics

- **Two-tier communication**: Clients and servers communicate over a network (e.g., HTTP).
- **Request-response model**: Clients make requests; servers process and send back responses.
- **Centralized resources**: Data, business logic, and security are handled at the server level.

---

##  Workflow

1. The client initiates a request to the server (e.g., asking for a web page).
2. The server processes the request using business logic or database access.
3. The server sends back a response (e.g., HTML page, JSON data).
4. The client receives and renders the response for the user.

---

##  Pros

- **Centralized control**: All logic and data are managed on the server.
- **Easy to maintain**: Updates are done on the server side.
- **Scalable**: New clients can be added without changing the server logic.

---

##  Cons

- **Single point of failure**: If the server crashes, all clients are affected.
- **Scalability challenges**: With a large number of clients, server load increases.
- **Latency**: Network communication adds delay to interactions.

---




