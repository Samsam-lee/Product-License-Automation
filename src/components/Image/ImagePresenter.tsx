import ImageProps from '../../@types/ImageTypes';

const ImagePresenter: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className}/>
);

export default ImagePresenter;
