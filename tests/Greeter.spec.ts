import Greeter from '../src/Greeter';
test("Hello", () => {
    const g = new Greeter;
    const to = "Moin";
    const msg = g.greet(to);
    expect(msg).toBe(`Hello ${to}`);
});