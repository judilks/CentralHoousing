function Group(users) {
    this.users = users;
    this.averageNumber = user.housingNumber
}

Group.getUsers = function() {
    return this.users;
};

Group.addUser = function(user) {
    this.users.push(user)
}

Group.removeUser = function(user) {
    let userLocation = this.users.find(user)
    this.users.splice(userLocation, 1)
}

Group.getUser = function(user) {
    let userLocation = this.users.find(user)
    return this.users[userLocation]
}

Group.getAverageNumber = function() {
    for(var i in this.users) {
        accumulatedNumber += i.housingNumber
    }
    return this.averageNumber = accumulatedNumber/this.users.length
}

module.exports = Group;