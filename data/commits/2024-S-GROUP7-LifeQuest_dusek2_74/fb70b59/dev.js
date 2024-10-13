const Schema = mongoose.Schema;
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  completedQuiz: { type: Boolean, default: false },
    MeStat: { type: Number, default: 0 },
    WorkStat: { type: Number, default: 0 },
    LoveStat: { type: Number, default: 0 },
  settings: { type: Schema.Types.ObjectId, ref: "Settings" },