let usershema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

let finalusers = mongoose.model("usere", usershema);
module.exports = finalusers;
