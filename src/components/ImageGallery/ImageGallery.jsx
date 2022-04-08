import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
function ImageGallery({ hits, setModalIdx, toggleModal }) {
  return (
    <Gallery>
      {hits.map(({ id, webformatURL, tags }, index) => {
        return (
          <ImageGalleryItem
            key={id}
            img={webformatURL}
            tags={tags}
            handleClick={e => {
              setModalIdx(index);
              toggleModal();
            }}
          />
        );
      })}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object.isRequired),
  setModalIdx: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
