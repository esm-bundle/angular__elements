describe("@esm-bundle/angular__elements", () => {
  ["es2015", "es2020"].forEach((ecma) => {
    it(`can load the System.register ${ecma} bundle`, async () => {
      const m = await System.import(
        `/base/system/${ecma}/ivy/angular-elements.js`
      );
      expect(m.createCustomElement).toBeDefined();
    });

    it(`can load the System.register ${ecma} prod bundle`, async () => {
      const m = await System.import(
        `/base/system/${ecma}/ivy/angular-elements.min.js`
      );
      expect(m.createCustomElement).toBeDefined();
    });
  });
});
