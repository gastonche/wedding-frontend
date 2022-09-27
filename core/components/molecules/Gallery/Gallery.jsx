import Image from "next/image";
import GalleryStyles from "./Gallery.module.css";
import Title from "../../atoms/Title/Title";

export default function Gallery() {
  return (
    <>
    <Title>Gallery</Title>
      <div className={GalleryStyles.gallery}>
        <div className={GalleryStyles.gallery__column}>
          <Image src="/rings.jpg" alt="rings" width="500" height="650" />
          <Image src="/rings.jpg" alt="rings" width="500" height="650" />
        </div>
        <div className={GalleryStyles.gallery__column}>
          <Image src="/rings.jpg" alt="rings" width="500" height="650" />
          <Image src="/rings.jpg" alt="rings" width="500" height="650" />
          <Image src="/rings.jpg" alt="rings" width="500" height="650" />
        </div>
        <div className={GalleryStyles.gallery__column}>
          <Image src="/rings.jpg" alt="rings" width="500" height="650" />
          <Image src="/rings.jpg" alt="rings" width="500" height="650" />
        </div>
        <div className={GalleryStyles.gallery__column}>
          <Image src="/rings.jpg" alt="rings" width="500" height="650" />
        </div>
      </div>
    </>
  );
}
