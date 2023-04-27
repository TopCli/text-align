// Import Node.js Dependencies
import { test } from "node:test";
import assert from "node:assert";

// Import Internal Dependencies
import * as align from "../index.js";

test("center narrow", () => {
  assert.strictEqual(align.center("abc", 10), "   abc    ");
});

test("center wide", () => {
  assert.strictEqual(align.center("古古古", 10), "  古古古  ");
});

test("left narrow", () => {
  assert.strictEqual(align.left("abc", 10), "abc       ");
});

test("left wide", () => {
  assert.strictEqual(align.left("古古古", 10), "古古古    ");
});

test("right narrow", () => {
  assert.strictEqual(align.right("abc", 10), "       abc");
});

test("right narrow", () => {
  assert.strictEqual(align.right("古古古", 10), "    古古古");
});

// overflow
test("center narrow overflow", () => {
  assert.strictEqual(align.center("abc", 2), "abc");
});

test("center wide overflow", () => {
  assert.strictEqual(align.center("古古古", 4), "古古古");
});

test("left narrow overflow", () => {
  assert.strictEqual(align.left("abc", 2), "abc");
});

test("left wide overflow", () => {
  assert.strictEqual(align.left("古古古", 4), "古古古");
});

test("right narrow overflow", () => {
  assert.strictEqual(align.right("abc", 2), "abc");
});

test("right narrow overflow", () => {
  assert.strictEqual(align.right("古古古", 4), "古古古");
});

// nothing
test("left align nothing", () => {
  assert.strictEqual(align.left("", 5), "     ");
});

test("center align nothing", () => {
  assert.strictEqual(align.center("", 5), "     ");
});

test("right align nothing", () => {
  assert.strictEqual(align.right("", 5), "     ");
});

// whitespace
test("left align whitespace", () => {
  assert.strictEqual(align.left("   ", 5), "     ");
});

test("center align whitespace", () => {
  assert.strictEqual(align.center("   ", 5), "     ");
});

test("right align whitespace", () => {
  assert.strictEqual(align.right("   ", 5), "     ");
});

// whitespace overflow
test("left align whitespace overflow", () => {
  assert.strictEqual(align.left("   ", 2), "   ");
});

test("center align whitespace overflow", () => {
  assert.strictEqual(align.center("   ", 2), "   ");
});

test("right align whitespace overflow", () => {
  assert.strictEqual(align.right("   ", 2), "   ");
});

// whitespace mix
test("left align whitespace mix", () => {
  assert.strictEqual(align.left("  x  ", 10), "  x       ");
});

test("center align whitespace mix", () => {
  assert.strictEqual(align.center("  x  ", 10), "    x     ");
});

test("right align whitespace mix", () => {
  assert.strictEqual(align.right("  x  ", 10), "       x  ");
});
