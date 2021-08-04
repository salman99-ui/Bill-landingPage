import React from 'react'
import { MainLogo , Feature1 , Feature2 , Feature3 , App , Play , Kwk , Majestyk} from '../../assets'

import './main.scss'

function Index() {
    return (
        <div className="main-nav">
            <div className="main-screen">
                    <div className="screen">
                        
                        <div className="main-title">
                            <h2>BIll Solusi <span>Pembayaran</span> Harianmu</h2>
                            <p>Cepat , Transparan dan Tanpa Ribet !</p>
                            
                        </div>

                        <div className="screen-logo">
                            <div className="main-logo">
                                <img src={MainLogo} />
                            </div>
                        </div>

                    </div>
                </div>


                <div className="fiture">

                    <h2>Why Choose Us</h2>

                    <div className="main-fiture">

                    <div className="card">
                        <img src={Feature1} />
                            <h5>Transfer Instan , Aman dan Cepat </h5>
                    </div>

                    <div className="card">
                        <img src={Feature2} />
                            <h5>Transfer Antar Teman Tanpa Biaya </h5>
                    </div>

                    <div className="card">
                        <img src={Feature3} />
                            <h5>Aplikasi Harianmu</h5>
                    </div>

                    </div>

                </div>


                <div className="main-app">
                    <div className="logo-app">
                        <img src={App} />
                    </div>

                    <div className="app-title">
                        <h3>Mudahkan Segala aktivitas <span>pembayaranmu </span>hanya dalam gengaman</h3>
                        <a href="https://play.google.com/store/apps/details?id=bill.co.id">
                            <img src={Play} />
                            
                        </a>
                    </div>
                </div>

                <div className="main-partner">
                    <h2>Partnership</h2>
                        <div className="partnership">
                            <div className="card-img">
                                <img src={Kwk} className="partner-logo" />
                            </div>

                            <div className="card-img">
                                <img src={Majestyk} className="partner-logo" />
                            </div>
                            
                        </div>
                </div>

                <div className="feedback">
                    <h2>Testimonial</h2>
                    <div className="wrapper">
                        <div className="slider">
                            <div className="slider-item">
                                <h4>William Rhomania</h4>
                                <p>Aplikasinya berguna sekali di masa pandemi ini dan cukup simple gk ribet penggunaanya. Thx U</p>
                            </div>

                            <div className="slider-item">
                            <h4>IMAM SANTOSO</h4>
                                <p>untuk ke depanya semoga bill indonesia bisa top up di konter HP atau di indomaret dan Alfamart</p>
                            </div>

                            <div className="slider-item">
                                <h4>Joean</h4>
                                <p>Keren sangat membantu</p>
                            </div>

                            <div className="slider-item">
                            
                            <h4>Suhud Uut</h4>
                                <p>Mantul cara pembayaran digital nya, semoga sukses selalu </p>
                            </div>

                            <div className="slider-item">
                                <h4>Yolanda Oktora</h4>
                                <p>Bagus dan Sangat Bermanfaat </p>
                            </div>

                            <div className="slider-item">
                                <h4>Joean</h4>
                                <p>Keren sangat membantu</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-profile">
                    <h2>Dimana & Kapan Saja</h2>
                    <iframe className="video-frame"  src="https://www.youtube.com/embed/3Bn6hTkjd6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
        </div>
    )
}

export default Index
