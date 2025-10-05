import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Suspense, lazy } from 'react';

const Images = lazy(() => import('./Image'));

function App() {

  const [images, setImages] = useState<Image[]>([]); 
  const [page, setPage] = useState(1);

  type Image = {
    id: string;
  };

  const fetchImages = async () => {
      try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        setImages((prevImages) => [...prevImages, ...response.data]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

  useEffect(() => {
    fetchImages();
  }, [page]);
  
  return (
    <div className="image-gallery"> 
      <Suspense fallback={<div>Loading...</div>}>
        <Images 
          id="scrollableDiv"
          dataLength={images.length}
          next={() => setPage((prevPage) => prevPage + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          dataArray={images}
        />
        <Images 
          id="scrollableDiv"
          dataLength={images.length}
          next={() => setPage((prevPage) => prevPage + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          dataArray={images}
        />
        <Images 
          id="scrollableDiv"
          dataLength={images.length}
          next={() => setPage((prevPage) => prevPage + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          dataArray={images}
        />
      </Suspense>
    </div>
  )
}

export default App
