import styles from "./styles.module.css"
import imgthreedot from "./ikon/ikonthreedot.svg"
import imguser from "./ikon/ikonuser.svg"
import imgtelepone from "./ikon/ikontelepone.svg"
import imgedit from './ikon/ikonedit.svg'
import imgarchive from "./ikon/ikonarchive.svg"
import imgarrow from './ikon/ikonaroww.svg'
import imgdown from "./ikon/ikondown.svg"
import Image from 'next/image'
import imgmonitor from "./ikon/ikonmonitor.svg"
import imgsecurity from "./ikon/ikonsecurity.svg"
import imgdatabase from "./ikon/ikondatabase.svg"
import imgkursor from "./ikon/ikonkursor.svg"

function WebsiteSederhana (){
    return (
        <>
        <div className={styles.container}>
            <div className={styles.kiri}>
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
                            <a  className={styles.kiritengahimg}  href="#">
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
            </div>
            <div className={styles.tengah}>
            </div>
            <div className={styles.kanan}>
                <div className={styles.kanandiv} >
                    <div>
                        <h1 className={styles.h1}>Tito Yuniar</h1>
                    </div>
                    <div className={styles.ulli}>
                        {/* <a href="#">28 years</a>
                        <a href="#">Livv</a> */}
                        <a href="#">Freelance</a>
                    </div>
                    <div>
                        <p className={styles.p}>Assalamualaikum warohmatulahi wabarokatuh.Sebelumnya terima kasih sudah mengunjungi website pertama saya.di artikel yang menurut saya bernilai ini saya akan perkenalan terlebih dahulu nama tempat tinggal dan kegiatan sehari hari saya.Perkenalkan saya TITO YUNIAR lahir di Cilacap, tempat tinggal saya di Kecamatan Dayeuhluhur Kabupaten Cilacap, kegiatan sehari hari saya sebelum nya adalah jual beli game online, bengkel sesi akun facebook di facebook, dan main game joki. sekarang saya insyaalah pokus menjadi programing, atau bisa di sebut sehari hari nya ngoding. nah segitu dulu perkenalakn dari saya . terima kasih sudah mengunjungi website petama saya .</p>
                    </div>
                    <div>
                        <h2 className={styles.h2}>my services</h2>
                    </div>
                    <div className={styles.dikananbawah}>
                        <div className={styles.dikiri}>
                            <div className={styles.diatas1}>
                                <Image src={imgmonitor} height="30px" width="30px" margin-right="15px"></Image>
                                <h3 className={styles.h3}>development</h3>
                                <p className={styles.p}>Membangun solusi yang disesuaikan dengan kebutuhan berdasarkan spesifik teknis Anda</p>
                            </div>
                            <div className={styles.dibawah1}>
                            <Image src={imgdatabase} height="30px" width="30px" margin-right="15px"></Image>
                                <h3 className={styles.h2seo} >data base</h3>
                                <p className={styles.p}>data menjadikan fast respon sesuai yang di inginkan</p>
                            </div>
                        </div>
                        <div className={styles.dikanan}>
                            <div className={styles.diatas2}>
                                <Image src={imgkursor} height="30px" width="30px" margin-right="15px"></Image>
                                <h3 className={styles.h2seo}>SEO optimization</h3>
                                <p className={styles.p}>audit situs web Anda, lakukan peningkatan teknis, dan tulis tag meta</p>
                            </div>
                            <div className={styles.dibawah2}>
                                <Image src={imgsecurity} height="30px" width="30px" margin-right="15px"></Image>
                                <h3 className={styles.h2seo}>data pemanganan</h3>
                                <p className={styles.p}>mengamankan data rahasia perusahaan dari cliant</p>
                            </div>
    
                        </div>
                    </div> 
                </div>             
            </div>
        </div>
        </>
    )
}
export default WebsiteSederhana