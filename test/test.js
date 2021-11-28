// Import Third-party Dependencies
import test from "tape";

// Import Internal Dependencies
import * as align from "../index.js";

test("center narrow", (tape) => {
  tape.strictEqual(align.center("abc", 10), "   abc    ");
  tape.end();
});

test("center wide", (tape) => {
  tape.strictEqual(align.center("古古古", 10), "  古古古  ");
  tape.end();
});

test("left narrow", (tape) => {
  tape.strictEqual(align.left("abc", 10), "abc       ");
  tape.end();
});

test("left wide", (tape) => {
  tape.strictEqual(align.left("古古古", 10), "古古古    ");
  tape.end();
});

test("right narrow", (tape) => {
  tape.strictEqual(align.right("abc", 10), "       abc");
  tape.end();
});

test("right narrow", (tape) => {
  tape.strictEqual(align.right("古古古", 10), "    古古古");
  tape.end();
});

// overflow
test("center narrow overflow", (tape) => {
  tape.strictEqual(align.center("abc", 2), "abc");
  tape.end();
});

test("center wide overflow", (tape) => {
  tape.strictEqual(align.center("古古古", 4), "古古古");
  tape.end();
});

test("left narrow overflow", (tape) => {
  tape.strictEqual(align.left("abc", 2), "abc");
  tape.end();
});

test("left wide overflow", (tape) => {
  tape.strictEqual(align.left("古古古", 4), "古古古");
  tape.end();
});

test("right narrow overflow", (tape) => {
  tape.strictEqual(align.right("abc", 2), "abc");
  tape.end();
});

test("right narrow overflow", (tape) => {
  tape.strictEqual(align.right("古古古", 4), "古古古");
  tape.end();
});

// nothing
test("left align nothing", (tape) => {
  tape.strictEqual(align.left("", 5), "     ");
  tape.end();
});

test("center align nothing", (tape) => {
  tape.strictEqual(align.center("", 5), "     ");
  tape.end();
});

test("right align nothing", (tape) => {
  tape.strictEqual(align.right("", 5), "     ");
  tape.end();
});

// whitespace
test("left align whitespace", (tape) => {
  tape.strictEqual(align.left("   ", 5), "     ");
  tape.end();
});

test("center align whitespace", (tape) => {
  tape.strictEqual(align.center("   ", 5), "     ");
  tape.end();
});

test("right align whitespace", (tape) => {
  tape.strictEqual(align.right("   ", 5), "     ");
  tape.end();
});

// whitespace overflow
test("left align whitespace overflow", (tape) => {
  tape.strictEqual(align.left("   ", 2), "   ");
  tape.end();
});

test("center align whitespace overflow", (tape) => {
  tape.strictEqual(align.center("   ", 2), "   ");
  tape.end();
});

test("right align whitespace overflow", (tape) => {
  tape.strictEqual(align.right("   ", 2), "   ");
  tape.end();
});

// whitespace mix
test("left align whitespace mix", (tape) => {
  tape.strictEqual(align.left("  x  ", 10), "  x       ");
  tape.end();
});

test("center align whitespace mix", (tape) => {
  tape.strictEqual(align.center("  x  ", 10), "    x     ");
  tape.end();
});

test("right align whitespace mix", (tape) => {
  tape.strictEqual(align.right("  x  ", 10), "       x  ");
  tape.end();
});
