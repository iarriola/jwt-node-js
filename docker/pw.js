use admin
db.createUser(
  {
    user: "root",
    pwd: "root",
    roles: [ { role: "admin", db: "admin" }, { role: "admin", db: "jwt" } ]
  }
)