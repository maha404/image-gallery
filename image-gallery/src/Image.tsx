import InfiniteScroll from 'react-infinite-scroll-component';

interface ImageProps {
  id: string;
  dataLength: number;
  next: () => void;
  hasMore: boolean;
  loader: React.ReactNode;
  dataArray?: any[];
}

export default ({ dataLength, next, hasMore, loader, dataArray }: ImageProps) => {
return (
     <InfiniteScroll
        dataLength={dataLength}
        next={next}
        hasMore={hasMore}
        loader={loader}>
          {dataArray?.map((image: any) => (
            <div key={image.id}>
              <img className="image" src={image.download_url} alt={image.author} />
            </div>
          ))}
          </InfiniteScroll>
  );
}