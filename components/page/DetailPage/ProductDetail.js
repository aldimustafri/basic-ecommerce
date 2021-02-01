/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2021-02-01 18:09:46
 * @modify date 2021-02-01 21:11:41
 * @desc [description]
 */
import React, { useState } from "react";
import { faHeart, faShareAlt, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import ReactModal from "react-modal";
import { useRouter } from "next/router";
import {
  TitleShare, ModalIcon, StyledIcon,
  ImageContent, ProductImg, SectionDetail, SectionShare, Title, TitleContent, DetailDescription, HeartBtn, SectionBuy, TextPrice, BuyBtn, ModalHeading, ModalClose,
} from "./ProductDetail.style";
import Colors from "../../style/Colors";
import { ProductLikeAction } from "../../../redux/action/ProductAction";
import { BuyAction } from "../../../redux/action/BuyAction";
import { server } from "../../../utils/server";

function ProductDetail({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLike, setIsLike] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const pageURL = `${server}/${router.asPath}`;

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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
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

      <ReactModal isOpen={showModal} style={customStyles}>
        <div>
          <ModalHeading>
            <TitleShare>Share This Product</TitleShare>
            <ModalClose onClick={handleCloseModal}>
              <FontAwesomeIcon icon={faWindowClose} style={{ color: `${Colors.red}` }} />
            </ModalClose>
          </ModalHeading>

          <ModalIcon>
            <StyledIcon>
              <FacebookShareButton url={pageURL} className="col-sm-2">
                <FacebookIcon size={48} round />
              </FacebookShareButton>
            </StyledIcon>

            <StyledIcon>
              <TwitterShareButton url={pageURL} className="col-sm-2">
                <TwitterIcon size={48} round />
              </TwitterShareButton>
            </StyledIcon>

            <StyledIcon>
              <LinkedinShareButton url={pageURL} className="col-sm-2">
                <LinkedinIcon size={48} round />
              </LinkedinShareButton>
            </StyledIcon>

            <StyledIcon>
              <TelegramShareButton url={pageURL} className="col-sm-2">
                <TelegramIcon size={48} round />
              </TelegramShareButton>
            </StyledIcon>

            <StyledIcon>
              <WhatsappShareButton url={pageURL} className="col-sm-2">
                <WhatsappIcon size={48} round />
              </WhatsappShareButton>
            </StyledIcon>

            <StyledIcon>
              <EmailShareButton url={pageURL} className="col-sm-2">
                <EmailIcon size={48} round />
              </EmailShareButton>
            </StyledIcon>
          </ModalIcon>

        </div>
      </ReactModal>
    </>
  );
}

export default ProductDetail;
