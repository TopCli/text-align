"use strict";

const align = require("../index");


test("center narrow", () => {
    expect(align.center("abc", 10)).toBe("   abc    ");
});

test("center wide", () => {
    expect(align.center("古古古", 10)).toBe("  古古古  ");
});

test("left narrow", () => {
    expect(align.left("abc", 10, "left")).toBe("abc       ");
});

test("left wide", () => {
    expect(align.left("古古古", 10, "left")).toBe("古古古    ");
});

test("right narrow", () => {
    expect(align.right("abc", 10, "right")).toBe("       abc");
});

test("right narrow", () => {
    expect(align.right("古古古", 10, "right")).toBe("    古古古");
});

// overflow

test("center narrow overflow", () => {
    expect(align.center("abc", 2)).toBe("abc");
});

test("center wide overflow", () => {
    expect(align.center("古古古", 4)).toBe("古古古");
});

test("left narrow overflow", () => {
    expect(align.left("abc", 2, "left")).toBe("abc");
});

test("left wide overflow", () => {
    expect(align.left("古古古", 4, "left")).toBe("古古古");
});

test("right narrow overflow", () => {
    expect(align.right("abc", 2, "right")).toBe("abc");
});

test("right narrow overflow", () => {
    expect(align.right("古古古", 4, "right")).toBe("古古古");
});


// nothing

test("left align nothing", () => {
    expect(align.left("", 5, "left")).toBe("     ");
});

test("center align nothing", () => {
    expect(align.center("", 5)).toBe("     ");
});

test("right align nothing", () => {
    expect(align.right("", 5, "right")).toBe("     ");
});

// whitespace

test("left align whitespace", () => {
    expect(align.left("   ", 5, "left")).toBe("     ");
});

test("center align whitespace", () => {
    expect(align.center("   ", 5)).toBe("     ");
});

test("right align whitespace", () => {
    expect(align.right("   ", 5, "right")).toBe("     ");
});

// whitespace overflow

test("left align whitespace overflow", () => {
    expect(align.left("   ", 2, "left")).toBe("   ");
});

test("center align whitespace overflow", () => {
    expect(align.center("   ", 2)).toBe("   ");
});

test("right align whitespace overflow", () => {
    expect(align.right("   ", 2, "right")).toBe("   ");
});

// whitespace mix

test("left align whitespace mix", () => {
    expect(align.left("  x  ", 10, "left")).toBe("  x       ");
});

test("center align whitespace mix", () => {
    expect(align.center("  x  ", 10)).toBe("    x     ");
});

test("right align whitespace mix", () => {
    expect(align.right("  x  ", 10, "right")).toBe("       x  ");
});
