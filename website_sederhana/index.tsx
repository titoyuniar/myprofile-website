import styles from "./styles.module.css";
import imgthreedot from "./ikon/ikonthreedot.svg";
import imguser from "./ikon/ikonuser.svg";
import imgtelepone from "./ikon/ikontelepone.svg";
import imgedit from "./ikon/ikonedit.svg";
import imgarchive from "./ikon/ikonarchive.svg";
import imgarrow from "./ikon/ikonaroww.svg";
import imgdown from "./ikon/ikondown.svg";
import Image from "next/image";
import imgmonitor from "./ikon/ikonmonitor.svg";
import imgsecurity from "./ikon/ikonsecurity.svg";
import imgdatabase from "./ikon/ikondatabase.svg";
import imgkursor from "./ikon/ikonkursor.svg";

function WebsiteSederhana() {
  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.kiri}>
          <div className={styles.kiriatas}>
            <Image src={imgthreedot}></Image>
          </div>
          <div className={styles.kiritengah}>
            <div className={styles.kiritengahtengah}>
              <a className={styles.kiritengahimg} href="#">
                <Image src={imguser}></Image>
              </a>
              <a className={styles.kiritengahimg} href="#">
                <Image src={imgtelepone}></Image>
              </a>
              <a className={styles.kiritengahimg} href="#">
                <Image src={imgedit}></Image>
              </a>
              <a className={styles.kiritengahimg} href="#">
                <Image src={imgarchive}></Image>
              </a>
              <a className={styles.kiritengahimg} href="#">
                <Image src={imgarrow}></Image>
              </a>
            </div>
          </div>
          <div className={styles.kiribawah}>
            <Image src={imgdown}></Image>
          </div>
        </div> */}
        <div className={styles.tengah}></div>
        <div className={styles.kanan}>
          <div className={styles.kanandiv}>
            <div className="text-center">
              <div>
                <h1 className={styles.h1}>Tito Yuniar</h1>
              </div>
              <div className={styles.ulli}>
                {/* <a href="#">20 tahun</a> */}
                {/* <a href="#">Livv</a> */}
                {/* <a href="#">Freelance</a> */}
              </div>
              <div>
                <p className={styles.p}>
                  Assalamualaikum warohmatulahi wabarokatuh.
                </p>
              </div>
            </div>
            {/* <div>
              <h2 className={styles.h2}>Portofolio</h2>
            </div> */}
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className={styles.diatas1}>
                  <Image
                    src={imgmonitor}
                    height="30px"
                    width="30px"
                    margin-right="15px"
                  ></Image>
                  <h3 className={styles.h2seo}>Profile</h3>
                  <p className={styles.p}>
                    Profile Klik <i className="text-danger">Here</i>
                  </p>
                </div>
                <div className={styles.diatas1}>
                  <Image
                    src={imgdatabase}
                    height="30px"
                    width="30px"
                    margin-right="15px"
                  ></Image>
                  <h3 className={styles.h2seo}>Portofolio</h3>
                  <p className={styles.p}>
                    Portofolio Klik <i className="text-danger">Here</i>
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className={styles.diatas1}>
                  <Image
                    src={imgkursor}
                    height="30px"
                    width="30px"
                    margin-right="15px"
                  ></Image>
                  <h3 className={styles.h2seo}>SEO optimization</h3>
                  <p className={styles.p}>
                    SEO Klik <i className="text-danger">Here</i>
                  </p>
                </div>
                <div className={styles.diatas1}>
                  <Image
                    src={imgsecurity}
                    height="30px"
                    width="30px"
                    margin-right="15px"
                  ></Image>
                  <h3 className={styles.h2seo}>Contact</h3>
                  <p className={styles.p}>
                    Contact Klik <i className="text-danger">Here</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WebsiteSederhana;
