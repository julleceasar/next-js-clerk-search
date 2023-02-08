import Link from "next/link";
import { banners } from "../../../data";

const BannerThree = () => {
  return (
    <>
      <div className="banner__area-df mt-10">
        {banners.slice(6, 9).map(banner => (
          <div key={banner.id} className="banner__item-3 mb-30">
            <div className="banner__item-3-image m-img">
              <img src={banner.img} alt="" />
            </div>
            <div className="banner__content-5">
              <h5>{banner.title}</h5>
              <p>{banner.desc}</p>
              <Link href="/shop-3-col">
                <a className="os-btn-5">{banner.btnText}</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BannerThree;