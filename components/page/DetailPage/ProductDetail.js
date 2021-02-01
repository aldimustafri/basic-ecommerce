/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2021-02-01 18:09:46
 * @modify date 2021-02-01 18:09:47
 * @desc [description]
 */
import React, { useState } from "react";
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  ImageContent, ProductImg, SectionDetail, SectionShare, Title, TitleContent, DetailDescription, HeartBtn, SectionBuy, TextPrice, BuyBtn,
} from "./ProductDetail.style";
import Colors from "../../style/Colors";
import { ProductLikeAction } from "../../../redux/action/ProductAction";
import { BuyAction } from "../../../redux/action/BuyAction";

function ProductDetail({ data }) {
  const dispatch = useDispatch();
  const [isLike, setIsLike] = useState(false);
  const [, setShowModal] = useState(true);

  const handleClickLike = () => {
    if (isLike) {
      dispatch(ProductLikeAction({
        id: data.id,
        loved: 1,
      }));
      setIsLike(false);
    } else {
      dispatch(ProductLikeAction({
        id: data.id,
        loved: 1,
      }));
      setIsLike(true);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleClickBuy = () => {
    dispatch(BuyAction(data));
  };

  return (
    <>
      <SectionDetail>
        <ImageContent>
          <ProductImg src={data.imageUrl} />

          <SectionShare onClick={handleOpenModal}>
            <FontAwesomeIcon icon={faShareAlt} style={{ color: `${Colors.blackSoft}`, fontSize: "16px" }} />
          </SectionShare>
        </ImageContent>

        <TitleContent>
          <Title>{data.title}</Title>
          <HeartBtn onClick={handleClickLike}>
            <FontAwesomeIcon icon={faHeart} style={{ color: isLike ? `${Colors.red}` : `${Colors.grey}`, fontSize: "16px" }} />
          </HeartBtn>
        </TitleContent>

        <DetailDescription>
          {data.description}
        </DetailDescription>

        <SectionBuy>
          <TextPrice>{data.price}</TextPrice>
          <BuyBtn onClick={handleClickBuy}>Buy</BuyBtn>
        </SectionBuy>
      </SectionDetail>

      {/* <ReactModal isOpen={showModal} style={customStyles}>
        <div>
          <ModalHeading>
            Share
          </ModalHeading>
        </div>
      </ReactModal> */}
    </>
  );
}

export default ProductDetail;
