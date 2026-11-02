import { test } from "node:test";
import assert from "node:assert/strict";
import Categoria from "../models/Categoria.js";
import Product from "../models/Product.js";

test("Categoria tiene nombre obligatorio, único, con trim y timestamps", () => {
  const nombre = Categoria.schema.path("nombre");
  assert.equal(nombre.instance, "String");
  assert.equal(nombre.isRequired, true);
  assert.equal(nombre.options.unique, true);
  assert.equal(nombre.options.trim, true);
  assert.equal(Categoria.schema.get("timestamps"), true);
});

test("Product tiene categoria opcional que referencia Categoria", () => {
  const campo = Product.schema.path("categoria");
  assert.ok(campo, "falta el campo categoria");
  assert.equal(campo.instance, "ObjectId");
  assert.equal(campo.options.ref, "Categoria");
  assert.ok(!campo.isRequired, "categoria no debe ser obligatorio");
});
