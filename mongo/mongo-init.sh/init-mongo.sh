db.createUser(
    {
        user: "root",
        pwd: "secret",
        roles: [
            {
                role: "readWrite",
                db: "got"
            }
        ]
    }
);

db.createUser({
    user: 'admin',
    pwd: 'pass',
    roles: [
        {
            role: 'userAdmin',
            db: 'admin'
        }
    ]
})