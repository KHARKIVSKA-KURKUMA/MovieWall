import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { refs } from './refs';



export function makeTuiPagination(totalItems, totalPages) {
  const visiblePages = totalPages < 5 ? totalPages : 5;
  const options = {
    totalItems,
    itemsPerPage: 20,
    page: 1,
    visiblePages,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination(refs.paginationEl, options);

  if (visiblePages <= 1) {
    refs.paginationEl.style.display = 'none';
  } else {
    refs.paginationEl.style.display = 'block';
  }

  return pagination;
}

// ---- для бібліотеки -----

export const ITEM_PER_PAGE = 10;
export function makeTuiPaginationInLibrary(totalItems) {
  const visiblePages =
    totalItems / ITEM_PER_PAGE < 5 ? Math.ceil(totalItems / ITEM_PER_PAGE) : 5;
  const options = {
    totalItems,
    itemsPerPage: ITEM_PER_PAGE,
    visiblePages,
    centerAlign: false,
  };

  const pagination = new Pagination(refs.paginationEl, options);

  if (visiblePages <= 1) {
    refs.paginationEl.style.display = 'none';
  } else {
    refs.paginationEl.style.display = 'block';
  }

  return pagination;
}
