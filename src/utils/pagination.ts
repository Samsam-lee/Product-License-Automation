import { DATA_PER_PAGE, PAGE_COUNT } from '../global/global-conf';

export type PagingType = {
  totalPage: number,
  first: number,
  last: number,
  prev: number,
  next: number,
};

/**
 * 총 데이터 개수와 현재 페이지를 받아 페이지네이션을 할 변수들을 리턴
 * @param {number} totalData 총 데이터 개수
 * @param {number} currentPage 현재 페이지
 * @returns {PagingType} data
 */
const pagination = (totalData: number, currentPage: number) => {
  const dataPerPage = DATA_PER_PAGE; // 한 페이지 당 데이터 개수
  const pageCount = PAGE_COUNT; // 한 페이지 당 페이지 수

  const totalPage = Math.ceil(totalData / dataPerPage); // 총 페이지 수
  const pageGroup = Math.ceil(currentPage / pageCount); // 페이지 그룹

  let last = pageGroup * pageCount; // 화면에 보여질 마지막 페이지 번호
  if (last > totalPage) last = totalPage;

  let first = last % pageCount === 0
    ? last - pageCount + 1
    : last - ((last % pageCount) - 1); // 화면에 보여질 첫 페이지 번호

  const next = last + 1; // 다음 페이지 그룹의 첫 페이지
  const prev = first - 1; // 이전 페이지 그룹의 마지막 페이지

  if (totalPage < 1) first = last;

  const data: PagingType = {
    totalPage,
    first,
    last,
    prev,
    next,
  };

  return data;
};

export default pagination;
