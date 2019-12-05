import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import styled from 'styled-components';
import { IonIcon, addIcons } from 'react-svg-ionicons';
import bundle from 'react-svg-ionicons/bundles/all';

addIcons(bundle);

const PaginationStyled = styled.div`
  justify-content: right;
  font-size: 24px;
  margin-top: 25px;

  .page-item span.page-link {
    color: black;
    background: none;
    border: none;
  }
  .page-link {
    border: none;
    color: black;
    opacity: 0.6;
  }
  .active .page-link {
    opacity: 1;
  }
  svg {
    font-size: 42px;
    padding: 0;
  }
`;
const PageItemArrow = styled(PageItem)`
  a {
    padding: 0;
  }
`;

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
            if (number !== presentPage) this.changePage(number);
          }}
          key={number}
          active={number === presentPage}
        >
          {number < 10 && '0'}
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
      <PaginationStyled>
        <Pagination>
          {presentPage > 1 && (
            <PageItemArrow onClick={changePageLeft}>
              <IonIcon name="arrow-round-back" sizes={42} />
            </PageItemArrow>
          )}
          {this.createPaginationList(pages)}
          {presentPage < pages && (
            <PageItemArrow onClick={changePageRight}>
              <IonIcon name="arrow-round-forward" sizes={42} />
            </PageItemArrow>
          )}
        </Pagination>
      </PaginationStyled>
    );
  }
}

PaginationContainer.propTypes = {
  pages: PropTypes.number.isRequired,
  initialPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PaginationContainer;
