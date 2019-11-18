import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';

class PaginationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presentPage: props.initialPage || 1,
    };
  }

  changePageRight = () => {
    const { presentPage } = this.state;
    const { changePage } = this;
    changePage(presentPage + 1);
  };

  changePageLeft = () => {
    const { presentPage } = this.state;
    const { changePage } = this;
    changePage(presentPage - 1);
  };

  changePage = newPage => {
    const { onPageChange } = this.props;

    this.setState({ presentPage: newPage });
    onPageChange(newPage);
  };

  createPaginationList = () => {
    const items = [];
    const { presentPage } = this.state;
    const { pages } = this.props;
    for (let number = 1; number <= pages; number++) {
      items.push(
        <PageItem
          onClick={() => {
            this.changePage(number);
          }}
          key={number}
          active={number === presentPage}
        >
          {number}
        </PageItem>,
      );
    }
    return items;
  };

  render() {
    const { pages } = this.props;
    const { presentPage } = this.state;
    const { changePageLeft, changePageRight } = this;

    return (
      <div className="pagination">
        <Pagination>
          {presentPage > 1 && <Pagination.Prev onClick={changePageLeft} />}
          {this.createPaginationList(pages)}
          {presentPage < pages && <Pagination.Next onClick={changePageRight} />}
        </Pagination>
      </div>
    );
  }
}

PaginationContainer.propTypes = {
  pages: PropTypes.number.isRequired,
  initialPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PaginationContainer;
