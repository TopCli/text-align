"use strict";

const { alignCenter, alignLeft, alignRight } = require("../index");


test("center narrow", () => {
    expect(alignCenter("abc", 10)).toBe("   abc    ");
});

test("center wide", () => {
    expect(alignCenter("古古古", 10)).toBe("  古古古  ");
});

test("left narrow", () => {
    expect(alignLeft("abc", 10)).toBe("abc       ");
});

test("left wide", () => {
    expect(alignLeft("古古古", 10)).toBe("古古古    ");
});

test("right narrow", () => {
    expect(alignRight("abc", 10)).toBe("       abc");
});

test("right narrow", () => {
    expect(alignRight("古古古", 10)).toBe("    古古古");
});

// overflow

test("center narrow overflow", () => {
    expect(alignCenter("abc", 2)).toBe("abc");
});

test("center wide overflow", () => {
    expect(alignCenter("古古古", 4)).toBe("古古古");
});

test("left narrow overflow", () => {
    expect(alignLeft("abc", 2)).toBe("abc");
});

test("left wide overflow", () => {
    expect(alignLeft("古古古", 4)).toBe("古古古");
});

test("right narrow overflow", () => {
    expect(alignRight("abc", 2)).toBe("abc");
});

test("right narrow overflow", () => {
    expect(alignRight("古古古", 4)).toBe("古古古");
});


// nothing

test("left align nothing", () => {
    expect(alignLeft("", 5)).toBe("     ");
});

test("center align nothing", () => {
    expect(alignCenter("", 5)).toBe("     ");
});

test("right align nothing", () => {
    expect(alignRight("", 5)).toBe("     ");
});

// whitespace

test("left align whitespace", () => {
    expect(alignLeft("   ", 5)).toBe("     ");
});

test("center align whitespace", () => {
    expect(alignCenter("   ", 5)).toBe("     ");
});

test("right align whitespace", () => {
    expect(alignRight("   ", 5)).toBe("     ");
});

// whitespace overflow

test("left align whitespace overflow", () => {
    expect(alignLeft("   ", 2)).toBe("   ");
});

test("center align whitespace overflow", () => {
    expect(alignCenter("   ", 2)).toBe("   ");
});

test("right align whitespace overflow", () => {
    expect(alignRight("   ", 2)).toBe("   ");
});

// whitespace mix

test("left align whitespace mix", () => {
    expect(alignLeft("  x  ", 10)).toBe("  x       ");
});

test("center align whitespace mix", () => {
    expect(alignCenter("  x  ", 10)).toBe("    x     ");
});

test("right align whitespace mix", () => {
    expect(alignRight("  x  ", 10)).toBe("       x  ");
});