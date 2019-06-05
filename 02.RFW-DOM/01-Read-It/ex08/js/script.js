{

  const init = () => {
    const budgets = Array.from(document.querySelectorAll(`.budget`));

    const total = budgets
      .map($budget => parseInt($budget.textContent.slice(1)))
      .reduce((a, b) => a + b);

    document.querySelector(`.total`).textContent = `$${total} million`;
  };

  init();
}
