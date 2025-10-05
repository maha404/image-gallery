import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {

  type Image = {
    id: string;
    author: string;
    download_url: string;
    // add other fields if needed
  };

  const [images, setImages] = useState<Image[]>([]); 
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
      try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        console.log(response.data);
        console.log('page:', page);
        setImages((prevImages) => [...prevImages, ...response.data]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const style = {
    borderRadius: '20px',
    width: '200px',
    marginBottom: '20px',
    // border: '5px solid white',
    borderLeft: '5px solid white',
    borderBottom: '5px solid white',
   
  };
  
  return (
    <div style={{ display: 'flex', gap: '20px' }}> 
    <InfiniteScroll
    dataLength={images.length} //This is important field to render the next data
    next={() => setPage((prev) => prev + 1)}
    hasMore={true}
    loader={<h4>Loading...</h4>}>
      {images.map((image: any) => (
        <div key={image.id} className="image-card">
          <img src={image.download_url} alt={image.author} style={style} loading='lazy' />
        </div>
      ))}
      </InfiniteScroll>
 
        <InfiniteScroll
          dataLength={images.length} //This is important field to render the next data
          next={() => setPage((prev) => prev + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}>
            {images.map((image: any) => (
              <div key={image.id} className="image-card">
                <img src={image.download_url} alt={image.author} style={style} loading='lazy' />
              </div>
            ))}
        </InfiniteScroll>
     
    
        <InfiniteScroll
          dataLength={images.length} //This is important field to render the next data
          next={() => setPage((prev) => prev + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}>
            {images.map((image: any) => (
              <div key={image.id} className="image-card">
                <img src={image.download_url} alt={image.author} style={style} loading='lazy' />
              </div>
            ))}
        </InfiniteScroll>
     
    </div>
  )
}

export default App
