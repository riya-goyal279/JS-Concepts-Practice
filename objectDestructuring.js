const data = {
    user: {
        profile: {
            name: "Alice",
            details: {
                age: 28,
                city: "San Francisco"
            }
        }
    }
};

const {user: {profile: {name, details: {age, city}}}} = data;

console.log(name, age, city)