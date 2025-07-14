    // Seleciona elementos principais
    const toggler = document.querySelector('.custom-toggler');
    const nav = document.getElementById('navbarNav');
    const overlay = document.getElementById('overlay');

    // Evento para abrir/fechar menu + alternar overlay + bloquear scroll do body
    toggler.addEventListener('click', () => {
      toggler.classList.toggle('open'); // animação botão X
      document.body.classList.toggle('menu-open'); // bloqueia scroll do body
      overlay.classList.toggle('active'); // mostra/oculta overlay
    });

    // Fecha menu e overlay ao clicar fora do menu e do botão
    document.addEventListener('click', function (event) {
      if (
        !nav.contains(event.target) &&
        !toggler.contains(event.target) &&
        nav.classList.contains('show')
      ) {
        toggler.classList.remove('open');
        document.body.classList.remove('menu-open');
        overlay.classList.remove('active');
        // Fecha menu usando Bootstrap Collapse API
        const bsCollapse = bootstrap.Collapse.getInstance(nav);
        if (bsCollapse) bsCollapse.hide();
      }
    });

    // Fecha menu e overlay ao clicar diretamente na overlay
    overlay.addEventListener('click', () => {
      toggler.classList.remove('open');
      document.body.classList.remove('menu-open');
      overlay.classList.remove('active');
      const bsCollapse = bootstrap.Collapse.getInstance(nav);
      if (bsCollapse) bsCollapse.hide();
    });