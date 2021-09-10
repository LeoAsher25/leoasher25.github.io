import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import "./FilterWrap.scss";

const FilterWrap = (props) => {
  const { filterPrice, setFilterPrice, filterSort, setFilterSort } = props;

  const filterPriceRef = useRef([]);
  const filterSortRef = useRef([]);

  const checkAll = () => {
    if (
      filterPrice.some(
        (item, index) => index !== 0 && item.checked === true
      ) === false
    ) {
      filterPrice[0].checked = true;
    }
  };

  const handleCheckboxChecked = (e, index) => {
    if (index !== 0) {
      // console.log(
      //   "test check 23",
      //   filterPrice.some((item, index) => {
      //     if (index !== 0 && item.checked === true) console.log("ok", item);
      //     return index !== 0 && item.checked === true;
      //   })
      // );
      // console.log("test 1", filterPrice[index]);
      filterPrice[0].checked = false;
      filterPriceRef.current[0].checked = false;
    } else {
      filterPrice.forEach((item) => {
        item.checked = false;
      });
      filterPriceRef.current.forEach((item) => {
        item.checked = false;
      });
      filterPriceRef.current[0].checked = true;
      filterPrice[0].checked = true;
    }
    let tmpFilterPrice = [...filterPrice];
    tmpFilterPrice[index].checked = e.target.checked;
    setFilterPrice([...tmpFilterPrice]);

    return checkAll();
  };

  const handleRadioChecked = (e, index) => {
    filterSort.forEach((item) => {
      item.checked = false;
    });
    let tmpFilterSort = [...filterSort];
    tmpFilterSort[index].checked = e.target.checked;
    setFilterSort([...tmpFilterSort]);
  };

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
                      {filterPrice.map((item, index) => (
                        <div
                          key={index}
                          className="filter-price-item filter-item"
                        >
                          <input
                            ref={(eleRef) =>
                              (filterPriceRef.current[index] = eleRef)
                            }
                            type="checkbox"
                            name="filterPrice"
                            id={`filter-price-checkbox-${index}`}
                            value={item.value}
                            onChange={(e) => handleCheckboxChecked(e, index)}
                          />

                          <label
                            className="filter-item-label"
                            htmlFor={`filter-price-checkbox-${index}`}
                          >
                            <span>{item.title}</span>
                          </label>
                        </div>
                      ))}
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
                      {filterSort.map((item, index) => (
                        <div
                          key={index}
                          className="filter-sort-item filter-item"
                        >
                          <input
                            ref={(eleRef) =>
                              (filterSortRef.current[index] = eleRef)
                            }
                            type="radio"
                            name="filterSort"
                            value={item.value}
                            id={`filter-sort-checkbox-${index}`}
                            onChange={(e) => handleRadioChecked(e, index)}
                          />
                          <label
                            className="filter-item-label"
                            htmlFor={`filter-sort-checkbox-${index}`}
                          >
                            <span>{item.title}</span>
                          </label>
                        </div>
                      ))}
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
