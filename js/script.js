 const toggler = document.querySelector('.custom-toggler');
  const nav = document.getElementById('navbarNav');

  toggler.addEventListener('click', () => {
    toggler.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });

  // Fecha o menu quando clicar fora (opcional)
  document.addEventListener('click', function (event) {
    if (
      !nav.contains(event.target) &&
      !toggler.contains(event.target) &&
      nav.classList.contains('show')
    ) {
      toggler.classList.remove('open');
      document.body.classList.remove('menu-open');
      const bsCollapse = bootstrap.Collapse.getInstance(nav);
      if (bsCollapse) bsCollapse.hide();
    }
  });