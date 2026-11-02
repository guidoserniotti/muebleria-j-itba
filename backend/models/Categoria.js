import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      unique: true,
      trim: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Categoria", categoriaSchema);
