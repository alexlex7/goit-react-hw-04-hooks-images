import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { getImages } from 'services/fetchApi';
import { Container } from './App.styled';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hits, setHits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setIsLoading(true);
    const getData = async () => {
      const response = await getImages(searchQuery, currentPage);
      const filteredHits = response.hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => ({
          id,
          webformatURL,
          largeImageURL,
          tags,
        })
      );
      setHits(state => [...state, ...filteredHits]);
      setIsLoading(false);
    };
    getData();
  }, [currentPage, searchQuery]);

  const handleSubmit = value => {
    setHits([]);
    setSearchQuery(value);
  };

  const toggleModal = () => {
    setIsShowModal(modal => !modal);
  };

  const handleLoadMore = () => setCurrentPage(page => page + 1);

  return (
    <Container>
      <Searchbar handleSubmit={handleSubmit} />
      {hits.length > 0 && (
        <ImageGallery
          hits={hits}
          toggleModal={toggleModal}
          setModalIdx={setModalIdx}
        />
      )}

      {!isLoading && hits.length > 0 && (
        <Button onClickLoadMore={handleLoadMore} />
      )}
      {isShowModal && (
        <Modal image={hits[modalIdx].largeImageURL} toggleModal={toggleModal} />
      )}
      {isLoading && <Loader />}
    </Container>
  );
};
