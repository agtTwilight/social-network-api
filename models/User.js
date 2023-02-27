const { Schema, model } = require('mongoose');

// TODO make sure this validator works!
// Schema to create User model
const userSchema = new Schema(
  {
    username: {type:String, required:true, unique:true, trim:true},
    email: {type:String, required:true, unique:true, match:[/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please fill a valid email address"]},
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'friend',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length();
  })
  // Setter to set the first and last name
  .set(function (v) {
    const friendCount = v;
    this.set({ friendCount});
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
