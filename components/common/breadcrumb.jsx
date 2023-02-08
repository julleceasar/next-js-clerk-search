import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({img,title,subtitle}) => {
  return (
    <>
      <section className="page__title p-relative d-flex align-items-center" style={{background:`url( ${img ? img 
      : '/assets/img/page-title/page-title-1.jpg'})`,backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__title-inner text-center">
                <h1>{title}</h1>
                <div className="page__title-breadcrumb">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page"> {subtitle}</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;