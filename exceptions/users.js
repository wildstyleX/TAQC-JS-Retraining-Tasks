function getUser(id) {
    if (id < 0 || typeof id !== 'number') {
        throw new Error(`Id ${id} is less than 0 or is not numerical!`);
    }
    return {id};
}

function getUsers(ids) {
    const usersObject = [];
    for (const id of ids) {
        try {
            const user = getUser(id);
            usersObject.push(user);
        } catch (err) {
            console.error(`Error: ${err.message}`);
        }
    }
    return usersObject;
}

const idsArray = [3, 5, -15, 7, 9];
const usersArray = getUsers(idsArray);
usersArray.forEach(user => {
    console.log(`User ID: ${user.id}`);
});