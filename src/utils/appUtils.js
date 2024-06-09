import _ from 'lodash';

export const returnPaginationRange = (totalPage, page, limit, siblings) => {
    const totalPageNoInArray = 7 + siblings;

    if (totalPageNoInArray >= totalPage) {
        return _.range(1, totalPage + 1)
    }

    if (page === 1) {
        return _.range(1, Math.min(4, totalPage + 1))
    }

    if (page === totalPage) {
        return _.range(Math.max(totalPage - 3, 1), totalPage + 1)
    }

    const leftIndex = Math.max(page - 3, 1)
    const rightIndex = Math.min(page + 3, totalPage)

    return _.range(leftIndex, rightIndex + 1)
}
