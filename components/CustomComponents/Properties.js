"use client";
import Link from "next/link"
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaHouseUser, FaChartLine, FaCity, FaGolfBall, FaTree, FaStore, FaBiking, FaTruckMonster, FaHotel, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaStar } from "react-icons/fa6";
import { Home, Building, Trees, Umbrella, UmbrellaIcon, TreePine, Activity, Dumbbell, Sailboat, MapPin, Leaf, TrendingUp } from "lucide-react";
export default function Properties() {
    return (
        <>
            <section className="custom_container properties_section" id="siniya-projects" dir="rtl">
              <div className="main-slider-one__content">
        <div className='banner_text_container'>

        <h1 className='heading_middle content_why_invest'>المشاريع المميزة في Sobha Siniya Island</h1>
        </div>
      </div>
      <div className='resp_usd'>
        <p className="down_styling para_styling">
 استكشف المساكن الحصرية المصممة بمرافق عالمية المستوى، وإطلالات لا مثيل لها،
 وأسلوب حياة مستوحى من المنتجعات في Sobha Siniya Island.
</p>

      </div>

      <div className="row apartment_row_styling margin_left_null">
            <div className="why_invest_wrapper why_invest_mobile_container col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
               <div className="apartment_container">
  <Image
    src="https://salescenter-siniyaisland.com/images/yachtside/2.jpg?v=1"
    alt="Apartment Image"
    width={1200}
    height={800}
    className="apartment_image_styling"
  />
</div>
            </div>
             <div className="why_invest_wrapper col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="badge">
                الشقق
                </div>
                <h3 className="project_title">شقق على الواجهة المائية تبدأ من 1.33 مليون درهم إماراتي*</h3>
                <div className="currency_container">
                    <div className="property_price icon_price_styling">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/gbp.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300} // adjust based on your logo’s aspect ratio
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> 275 ألف جنيه إسترليني*
                        </span>
                    </div>
                    <div className="property_price icon_price_styling">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/usd_curr.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300} // adjust based on your logo’s aspect ratio
                                                    style={{ height: "auto", width: "100%", maxWidth: 30 }}
                                                  /> 362 ألف دولار أمريكي*
                        </span>
                    </div>
                    <div className="property_price icon_price_styling">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/eur.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300} // adjust based on your logo’s aspect ratio
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> 313 ألف يورو*
                        </span>
                    </div>
                   <div className="property_price">
                        <span className="property_price_span">
                          <Image
                                                    src="/assets/icon/sobha_icons/inr.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300} // adjust based on your logo’s aspect ratio
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> 3.21 كرور روبية هندية*
                        </span>
                    </div>
                </div>

                <div className="consultation_btn_style btn_cen btn_mobile_resp">
  <button
            className="hover_external_btn"
            onClick={() => {
              const element = document.getElementById("contact-form");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            أنا مهتم
          </button>
</div>

<div className='resp_usd'>
        <p className="down_styling_note" style={{color: "#9f8151 "}}>
  قد تختلف الأسعار العالمية حسب سعر الصرف.
</p>

      </div>

                 {/* <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="badge">
                Apartments
                </div>
            </div>
             <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="badge">
                Apartments
                </div>
            </div>
                 </div> */}
            </div>
      </div>

      <div className="row apartment_row_styling margin_left_null">
             <div className="why_invest_wrapper_villa col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="badge">
                الفيلات
                </div>
                <h3 className="project_title">فيلات على الواجهة المائية تبدأ من 10.75 مليون درهم إماراتي*</h3>
                <div className="currency_container_villa">
                     <div className="property_price">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/gbp.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300} // adjust based on your logo’s aspect ratio
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> 2.22 مليون جنيه إسترليني*
                        </span>
                    </div>
                    <div className="property_price">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/usd_curr.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300} // adjust based on your logo’s aspect ratio
                                                    style={{ height: "auto", width: "100%", maxWidth: 30 }}
                                                  /> 2.93 مليون دولار أمريكي*
                        </span>
                    </div>
                    <div className="property_price">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/eur.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300} // adjust based on your logo’s aspect ratio
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> 2.53 مليون يورو*
                        </span>
                    </div>
                    <div className="property_price">
                        <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/inr.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300} // adjust based on your logo’s aspect ratio
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> 25.97 كرور روبية هندية*
                        </span>
                    </div>
                </div>

                <div className="consultation_btn_style btn_cen btn_mobile_resp">
  <button
            className="hover_external_btn"
            onClick={() => {
              const element = document.getElementById("contact-form");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            أنا مهتم
          </button>
</div>

<div className='resp_usd'>
        <p className="down_styling_note" style={{color: "#9f8151 "}}>
  قد تختلف الأسعار العالمية حسب سعر الصرف.
</p>

      </div>
            </div>

            <div className="why_invest_wrapper_villa col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
               <div className="villa_container">
  <Image
    src="https://salescenter-siniyaisland.com/images/coral/1.jpg?v=1"
    alt="Apartment Image"
    width={1200}
    height={800}
    className="apartment_image_styling"
  />
</div>
            </div>
      </div>
            </section>
        </>
    )
}