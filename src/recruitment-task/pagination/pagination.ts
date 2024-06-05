type PaginationArgs = {
  page: number;
  perPage?: number;
};

const DEFAULT_PER_PAGE = 20;

export class Pagination {
  private readonly page: number;
  private readonly perPage: number;

  constructor({ page, perPage = DEFAULT_PER_PAGE }: PaginationArgs) {
    this.page = page;
    this.perPage = perPage;
  }

  getPage(): number {
    return this.page;
  }

  getPerPage(): number {
    return this.perPage;
  }

  getOffset(): number {
    return (this.page - 1) * this.perPage;
  }

  getTotalPages(total: number): number {
    return this.perPage === 0
      ? 1
      : Math.max(Math.ceil(total / this.perPage), 1);
  }

  hasMore(total: number): boolean {
    return this.page < this.getTotalPages(total);
  }
}
