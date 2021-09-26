describe("My First Test", () => {
  it("Visits the demo page", () => {
    cy.visit("http://localhost:4567/");
    cy.contains("confirm").click();
    cy.window().then((win) => {
      const doc = win.document
      const comfirm = doc.querySelector('div[comfirm]')
      expect(win.innerHeight-17 == comfirm.clientHeight).to.equal(true);
      expect(doc.body.clientWidth == comfirm.clientWidth).to.equal(true);
    });
  });
});
