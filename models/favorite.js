const mongoose = require("mongoose");
const favoriteSchema = mongoose.Schema;

const favoriteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    campsites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Campsite",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Favorite", favoriteSchema);
