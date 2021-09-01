import React from "react";
import { Col, Row } from "react-bootstrap";
import "../scss/FilterWrap.scss";

const FilterWrap = () => {
  return (
    <div className="filter-wrap">
      <div className="filter-content">
        <Row>
          <Col xs="12" md="2" className="">
            <div className="header">
              <i className="fas fa-filter"></i>
              <span>Bộ lọc</span>
            </div>
          </Col>

          <Col xs="12" md="10">
            <div className="content">
              <Row>
                <Col xs="12" md="6">
                  <div className="filter-price filter-type">
                    <div className="filter-price-title filter-type-title">
                      <span>Lọc giá</span>
                      <i className="fas fa-angle-down"></i>
                    </div>

                    <div className="filter-price-content  filter-content">
                      <div className="filter-price-item filter-item">
                        <input
                          type="radio"
                          name="filterPrice"
                          id="filter-price-1"
                        />
                        <label htmlFor="filter-price-1">Dưới 100.000đ</label>
                      </div>

                      <div className="filter-price-item filter-item">
                        <input
                          type="radio"
                          name="filterPrice"
                          id="filter-price-2"
                        />
                        <label htmlFor="filter-price-2">
                          100.000đ - 300.000đ
                        </label>
                      </div>

                      <div className="filter-price-item filter-item">
                        <input
                          type="radio"
                          name="filterPrice"
                          id="filter-price-3"
                        />
                        <label htmlFor="filter-price-3">
                          300.000đ - 500.000đ
                        </label>
                      </div>

                      <div className="filter-price-item filter-item">
                        <input
                          type="radio"
                          name="filterPrice"
                          id="filter-price-4"
                        />
                        <label htmlFor="filter-price-4">
                          500.000đ - 1.000.000đ
                        </label>
                      </div>

                      <div className="filter-price-item filter-item">
                        <input
                          type="radio"
                          name="filterPrice"
                          id="filter-price-5"
                        />
                        <label htmlFor="filter-price-5">Trên 1.000.000đ</label>
                      </div>
                    </div>
                  </div>
                  {/* end of filter-price  */}
                </Col>

                <Col xs="12" md="6">
                  <div className="filter-sort filter-type ">
                    <div className="filter-sort-title filter-type-title ">
                      <span>Sắp xếp</span>
                      <i className="fas fa-caret-down"></i>
                    </div>

                    <div className="filter-sort-content filter-content">
                      <div className="filter-sort-item filter-item active">
                        <i className="fas fa-check"></i>
                        <span>Giá: Tăng dần</span>
                      </div>

                      <div className="filter-sort-item filter-item">
                        <i className="fas fa-check"></i>
                        <span>Giá: Giảm dần</span>
                      </div>

                      <div className="filter-sort-item filter-item">
                        <i className="fas fa-check"></i>
                        <span>Tên: A-Z</span>
                      </div>

                      <div className="filter-sort-item filter-item">
                        <i className="fas fa-check"></i>
                        <span>Tên: Z-A</span>
                      </div>

                      <div className="filter-sort-item filter-item">
                        <i className="fas fa-check"></i>
                        <span>Cũ nhất</span>
                      </div>

                      <div className="filter-sort-item filter-item">
                        <i className="fas fa-check"></i>
                        <span>Mới nhất</span>
                      </div>

                      <div className="filter-sort-item filter-item">
                        <i className="fas fa-check"></i>
                        <span>Bán chạy nhất</span>
                      </div>
                    </div>
                  </div>
                  {/* end of filter-sort  */}
                </Col>
              </Row>
            </div>
          </Col>

          {/* end of content (of filer)  */}
        </Row>
      </div>
      {/* end of filter-content */}
    </div>
    // end of filter-wrap
  );
};

export default FilterWrap;
