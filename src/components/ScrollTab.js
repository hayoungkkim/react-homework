import React, { useState } from 'react';
import styled from 'styled-components';

const CateWrap = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  padding-right: 50px;
  background: #fff;
  .title {
    padding: 10px 0 0 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #222;
  }
  .scroller {
    overflow-x: auto;
    overflow-y: hidden;
    ${props =>
      props.expanded
        ? ''
        : `
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 50px;
        width: 30px;
        height: 100%;
        background-image: linear-gradient(to left,#fff,rgba(255,255,255,0));
      }
    `}
  }
  .cate_list {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    flex-wrap: ${props => (props.expanded ? 'wrap' : 'nowrap')};
  }
  .cate_item {
    padding: 5px;
  }
`;
const CateBtn = styled.button`
  display: block;
  margin: 0;
  padding: 0;
  border: 0 none;
  background-color: transparent;
  outline-color: transparent;
  img {
    width: 50px;
    height: 50px;
    vertical-align: top;
  }
  .cate_name {
    display: block;
    font-size: 14px;
    font-family: Roboto, AppleSDGothicNeo, sans-serif;
    line-height: 20px;
    color: #222;
    letter-spacing: -0.3px;
  }
`;
const IconButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 80px;
  margin: 0;
  padding: 0;
  border: 0 none;
  background-color: #fff;
  outline-color: transparent;
  svg {
    width: 24px;
    height: 24px;
    transform: ${props => (props.expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

const ScrollTab = props => {
  const [expanded, setExpanded] = useState(false);
  const categorys = [
    { name: 'Cate1', imgSrc: 'https://sui.ssgcdn.com/cmpt/banner/201911/2019111914100316825557709555_284.png' },
    { name: 'Cate2', imgSrc: 'https://sui.ssgcdn.com/cmpt/banner/202002/2020022710290489850240110124_293.png' },
    { name: 'Cate3', imgSrc: 'https://sui.ssgcdn.com/cmpt/banner/201911/2019111914105425276065483706_647.png' },
    { name: 'Cate4', imgSrc: 'https://sui.ssgcdn.com/cmpt/banner/202002/2020022710310668405493893549_271.png' },
    { name: 'Cate5', imgSrc: 'https://sui.ssgcdn.com/cmpt/banner/201911/2019111914314627130762700176_551.png' },
    { name: 'Cate6', imgSrc: 'https://sui.ssgcdn.com/cmpt/banner/202003/2020030408354080128767564876_834.png' },
    { name: 'Cate7', imgSrc: 'https://sui.ssgcdn.com/cmpt/banner/202002/2020022710335819554470969447_725.png' },
    { name: 'Cate8', imgSrc: 'https://sui.ssgcdn.com/cmpt/banner/202002/2020022710342242596729813772_726.png' },
    { name: 'Cate9', imgSrc: 'https://sui.ssgcdn.com/cmpt/banner/202001/2020013013041563956073619607_284.png' },
    { name: 'Cate10', imgSrc: 'https://sui.ssgcdn.com/cmpt/banner/201911/2019111913531329881794894279_409.png' }
  ];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CateWrap expanded={expanded}>
      {expanded && <div className="title">Show All</div>}
      <div className="scroller">
        <div className="cate_list">
          {categorys.map((category, index) => {
            return (
              <div className="cate_item" key={index}>
                <CateBtn>
                  <img alt={`${category.name}`} src={`${category.imgSrc}`} />
                  <span className="cate_name">{`${category.name}`}</span>
                </CateBtn>
              </div>
            );
          })}
        </div>
      </div>
      <IconButton expanded={expanded} onClick={handleExpandClick}>
        <svg viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.54)" aria-hidden="true">
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </svg>
      </IconButton>
    </CateWrap>
  );
};

export default ScrollTab;
