const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.team-card');

const defaultFilter = 'tech';

filters.forEach((btn) => {

  btn.addEventListener('click', () => {

    filters.forEach((item) => {
      item.classList.remove('active');
    });

    btn.classList.add('active');

    const value = btn.dataset.filter;

    cards.forEach((card) => {

      card.classList.toggle(
        'hide',
        value !== 'all' &&
        card.dataset.team !== value
      );

    });

  });

});

filters.forEach((item) => {

  item.classList.remove('active');

  if (item.dataset.filter === defaultFilter) {
    item.classList.add('active');
  }

});

cards.forEach((card) => {

  card.classList.toggle(
    'hide',
    card.dataset.team !== defaultFilter
  );

});