import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

function ImageGalleryItem({ img, tags, handleClick }) {
  return (
    <GalleryItem onClick={handleClick}>
      <GalleryImage src={img} alt={tags} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
