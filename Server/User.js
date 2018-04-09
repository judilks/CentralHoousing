function User(userInfo) {
    this.userInfo = userInfo;
    this.invites = []
}

User.prototype.getUserInfo = function() {
    return this.userInfo;
};

User.prototype.addInvite = function(user) {
    this.invites.push(user)
}

User.prototype.removeInvite = function(userInfo) {
    val = this.invites.indexOf(this.userInfo)
    this.invites.splice(val, 1)
}

module.exports = User;
