import Link from "next/link"
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaSnapchatGhost, FaTwitter } from "react-icons/fa";

export default function Footer1() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-one custom_container" id="footer" dir="rtl">

                 <div className="logo-box centerize shiro_logo_container">
  <Image
    src="/assets/img/shiro_images/logo.png"
    alt="shiro_logo"
    height={30}
    width={300}
    style={{ height: "50px", width: "auto", cursor: "pointer" }}
  />
                                    </div>
                <div className="footer-main">
                    <div>
                            <div className="number-box centerize footer_content">
                                            <span style={{color: "#ffffff"}}>رقم الترخيص العقاري: 1447657</span>
                                            <span style={{color: "#ffffff", marginLeft: 30, marginRight: 30}}>|</span>
                                            <span style={{color: "#ffffff"}}>رقم تسجيل هيئة التنظيم العقاري: 47486</span>
                                        </div>
                        <p className="footer_content_middle">
                           جميع الحقوق محفوظة. &copy; شيرو استيت {currentYear}
                        </p>
                        <p className="footer_content_middle">
                           تنويه: نحن شريك قناة معتمد رسمياً لمطوري العقارات في دبي المعروضين على هذا الموقع. المعلومات المقدمة —
 بما في ذلك تفاصيل المشاريع، والأسعار، وتوافر الوحدات — هي لأغراض مرجعية عامة فقط وقد تتغير دون إشعار مسبق.
 الصور والمواد البصرية المعروضة في هذه الصفحة لأغراض توضيحية فقط وقد لا تمثل العقارات الفعلية.
 للحصول على أدق المعلومات المحدثة عن المشاريع، يرجى التواصل معنا مباشرة أو الرجوع إلى المصادر الرسمية للمطورين.
                        </p>
                        <div className="footer_link_container">
                            <a className="footer_link" href="https://www.shiroestate.ae/privacy-policy" target="_blank">سياسة الخصوصية</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
