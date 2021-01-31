import React, { useState } from "react";
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  ImageContent, ProductImg, SectionDetail, SectionShare, Title, TitleContent, DetailDescription, HeartBtn,
} from "./ProductDetail.style";
import Colors from "../../style/Colors";
import { ProductLikeAction } from "../../../redux/action/ProductAction";

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
      setIsLike(true);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
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