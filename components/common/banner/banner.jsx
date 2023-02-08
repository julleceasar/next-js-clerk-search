import { banners } from "../../../data";
import Link from "next/link";

const Banner = ({ df, h4, home_six }) => {
  return (
    <>
      <div className={`banner__area ${df ? 'pt-95' : ''} ${h4 ? 'pt-20' : ''} ${home_six ? 'pt-30' : ''}`}>
        <div className={`container ${h4 ? 'custom-container' : ''}`}>
          <div className={`${df ? '' : !h4 && !home_six && 'banner__inner p-relative mt--95'} 
        ${home_six ? 'banner__inner-2 p-relative' : ''}`}>
            <div className="row">
              {banners.slice(h4 ? 3 : 0, h4 ? 6 : 3).map((banner, index) => (
                <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                  <div className="banner__item mb-30 p-relative">
                    <div className="banner__thumb fix">
                      <Link href="/shop">
                        <a className="w-img">
                          <img src={banner.img} alt="banner" />
                        </a>
                      </Link>
                    </div>
                    <div className="banner__content p-absolute transition-3">
                      <h5>
                        <Link href="/shop">
                          <a>{banner.title}</a>
                        </Link>
                      </h5>
                      <Link href="/shop">
                        <a className="link-btn">{banner.btnText}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;