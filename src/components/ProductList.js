import React from 'react';
import styled from 'styled-components';

const Product = styled.div`
  margin-left: -1px;
  font-size: 0;
  font-family: Roboto, AppleSDGothicNeo, sans-serif;
  .product_item {
    display: inline-block;
    width: 50%;
    border-left: 1px solid #fff;
    box-sizing: border-box;
    font-size: 14px;
    vertical-align: top;
  }
`;
const Thmb = styled.div`
  position: relative;
  padding-top: 100%;
  background: rgba(0, 0, 0, 0.03);
  .thmb_img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;
const Detailbx = styled.div`
  overflow: hidden;
  height: 150px;
`;
const MallInfo = styled.div`
  height: 40px;
  padding-left: 20px;
  border-bottom: 1px solid #f0f0f0;
  .mall_icon {
    display: inline-block;
    overflow: hidden;
    width: 20px;
    height: 20px;
    margin: 11px 5px 0 0;
    background: url(https://sui.ssgcdn.com/ui/m_ssg/img/common/sp_cm_mall_ic_20191226.png) 0 -50px no-repeat;
    background-size: 200px auto;
  }
`;
const ProductInfo = styled.div`
  padding: 9px 0 0 20px;
  .product_title {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-right: 8%;
    font-size: 14px;
    line-height: 17px;
    color: #222;
    letter-spacing: -0.3px;
    word-wrap: break-word;
    word-break: break-all;
  }
`;
const ProductPrice = styled.div`
  height: 23px;
  line-height: 23px;
  color: #222;
  .price_num {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 19px;
  }
  .price_text {
    display: inline-block;
    margin-top: 2px;
    font-size: 15px;
    font-weight: 500;
    line-height: 19px;
    vertical-align: top;
  }
`;

const ProductList = props => {
  const { products } = props;

  return (
    <Product>
      {products.map((product, index) => (
        <div className="product_item" key={index}>
          <Thmb>
            <img className="thmb_img" src={`https://picsum.photos/500/500?random=${product.name.replace(/\s/g, '')}`} alt="" />
          </Thmb>
          <Detailbx>
            <MallInfo>
              <span className="mall_icon"></span>
            </MallInfo>
            <ProductInfo>
              <div className="product_title">
                Product {index + 1} - {product.name}
              </div>
              <ProductPrice>
                <span className="price_num">10,236,800</span>
                <span className="price_text">원</span>
              </ProductPrice>
            </ProductInfo>
          </Detailbx>
        </div>
      ))}
    </Product>
  );
};

export default ProductList;
