import styles from './Nav.module.css';

export function Nav() {
    return (
        <>
            <div class={styles['page-inner-content']}>
                <div className="col">
                    <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner banner ">
                            <div class="carousel-item active">
                                <img src="https://massagemvips.vercel.app/images/products/product-1.png" className="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Massagem Relaxante</h5>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://massagemvips.vercel.app/images/products/product-2.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Massagem Quatro Mãos</h5>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://massagemvips.vercel.app/images/products/product-3.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Massagem Nuru</h5>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                {/* Ultimas inclusoes */}

                <div class="gray-background">
                    <div class="page-inner-content">
                        <h3 class="section-title">Últimas Inclusões</h3>
                        <div class="subtitle-underline"></div>
                        <div class="cols cols-4">
                            <div class="product">
                                <img src="https://massagemvips.vercel.app/images/products/product-4.jpg" alt="" />
                                <p class="product-name">Massagista</p>
                                <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                                <p class="product-price">Massagens <span>Terapêuticas</span></p>
                                <a href="https://api.whatsapp.com/send?phone=+5521966377524&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                                class="btnVermais">
                                    <i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


<div class="gray-background">
<div class="page-inner-content">
    <h3 class="section-title">Últimas Inclusões</h3>
    <div class="subtitle-underline"></div>
    <div class="cols cols-4">
        <div class="product">
            <img
                src="https://massagemvips.vercel.app/images/products/product-4.jpg"
                alt=""
            />
            <p class="product-name">Massagista</p>
            <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p class="product-price">Massagens <span>Terapêuticas</span></p>
            <a
                href="https://api.whatsapp.com/send?phone=+5521966377524&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                class="btnVermais"
                style="background-color: rgb(57, 224, 71)"
            ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
            </a>
            <div id="overlay"></div>
            <div id="myModal" class="modal">
                {/* <!-- Modal content --> */}
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div
                                class="carousel-item active"
                                data-bs-interval="1000"
                            >
                                <img
                                    src="https://massagemvips.vercel.app/images/products/product4-1.JPG"
                                    class="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img
                                    src="https://massagemvips.vercel.app/images/products/product4-2.JPG"
                                    class="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div class="carousel-item">
                                <img
                                    src="https://massagemvips.vercel.app/images/products/product4-3.JPG"
                                    class="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div class="carousel-item">
                                <img
                                    src="https://massagemvips.vercel.app/images/products/product4-4.JPG"
                                    class="d-block w-100"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev"
                        >
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Voltar</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next"
                        >
                            <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Avançar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div id="myModalProduct5" class="modal">
            {/* <!-- Modal content --> */}
            <div class="modal-content">
                <span class="close">&times;</span>
                <div
                    id="carouselProduct5"
                    class="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="1000">
                            <img
                                src="https://massagemvips.vercel.app/images/products/product5-1.JPG"
                                class="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img
                                src="https://massagemvips.vercel.app/images/products/product5-2.JPG"
                                class="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="https://massagemvips.vercel.app/images/products/product5-3.JPG"
                                class="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="https://massagemvips.vercel.app/images/products/product5-4.JPG"
                                class="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselProduct5"
                        data-bs-slide="prev"
                    >
                        <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Voltar</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselProduct5"
                        data-bs-slide="next"
                    >
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Avançar</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="product">
            <img
                src="https://massagemvips.vercel.app/images/products/product-5.jpg"
                alt=""
            />
            <p class="product-name">Massagista</p>
            <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p class="product-price">Massagens <span>Terapêuticas</span></p>
            <a
                href="https://api.whatsapp.com/send?phone=+5521965493980&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                class="btnVermais"
                style="background-color: rgb(57, 224, 71)"
            ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
            </a>
        </div>
        <div class="product">
            <img
                src="https://massagemvips.vercel.app/images/products/product-6.jpg"
                alt=""
            />
            <p class="product-name">Massagista</p>
            <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
            <p class="product-price">Massagens <span>Terapêuticas</span></p>
            <a
                href="https://api.whatsapp.com/send?phone=21965493980&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                class="btnVermais"
                style="background-color: rgb(57, 224, 71)"
            ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
            </a>
        </div>
        <div class="product">
            <img
                src="https://massagemvips.vercel.app/images/products/product-7.jpg"
                alt=""
            />
            <p class="product-name">Massagista</p>
            <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
            <p class="product-price">Massagens <span>Terapêuticas</span></p>
            <a
                href="https://api.whatsapp.com/send?phone=21965493980&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                class="btnVermais"
                style="background-color: rgb(57, 224, 71)"
            ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
            </a>
        </div>
    </div>
    <div>
        <div class="page-inner-content">
            <h3 class="section-title">Massagistas & Massoterapêutas</h3>
            <div class="subtitle-underline"></div>
            <div class="cols cols-4">
                <div class="product">
                    <img
                        src="https://massagemvips.vercel.app/images/products/product-4.jpg"
                        alt=""
                    />
                    <p class="product-name">Massagista</p>
                    <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                    <p class="product-price">
                        Massagens <span>Terapêuticas</span>
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=+5521966377524&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                        class="btnVermais"
                        style="background-color: rgb(57, 224, 71)"
                    ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
                    </a>
                </div>
                <div class="product">
                    <img
                        src="https://massagemvips.vercel.app/images/products/product-5.jpg"
                        alt=""
                    />
                    <p class="product-name">Massagista</p>
                    <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                    <p class="product-price">
                        Massagens <span>Terapêuticas</span>
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=21965493980&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                        class="btnVermais"
                        style="background-color: rgb(57, 224, 71)"
                    ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
                    </a>
                </div>
                <div class="product">
                    <img
                        src="https://massagemvips.vercel.app/images/products/product-6.jpg"
                        alt=""
                    />
                    <p class="product-name">Massagista</p>
                    <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                    <p class="product-price">
                        Massagens <span>Terapêuticas</span>
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=21965493980&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                        class="btnVermais"
                        style="background-color: rgb(57, 224, 71)"
                    ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
                    </a>
                </div>
                <div class="product">
                    <img
                        src="https://massagemvips.vercel.app/images/products/product-7.jpg"
                        alt=""
                    />
                    <p class="product-name">Massagista</p>
                    <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                    <p class="product-price">
                        Massagens <span>Terapêuticas</span>
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=21965493980&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                        class="btnVermais"
                        style="background-color: rgb(57, 224, 71)"
                    ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
                    </a>
                </div>
                <div class="product">
                    <img
                        src="https://massagemvips.vercel.app/images/products/product-8.jpg"
                        alt=""
                    />
                    <p class="product-name">Massagista</p>
                    <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                    <p class="product-price">
                        Massagens <span>Terapêuticas</span>
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=21965493980&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                        class="btnVermais"
                        style="background-color: rgb(57, 224, 71)"
                    ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
                    </a>
                </div>
                <div class="product">
                    <img
                        src="https://massagemvips.vercel.app/images/products/product-9.jpg"
                        alt=""
                    />
                    <p class="product-name">Massagista</p>
                    <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                    <p class="product-price">
                        Massagens <span>Terapêuticas</span>
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=21965493980&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                        class="btnVermais"
                        style="background-color: rgb(57, 224, 71)"
                    ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
                    </a>
                </div>
                <div class="product">
                    <img
                        src="https://massagemvips.vercel.app/images/products/product-7.png"
                        alt=""
                    />
                    <p class="product-name">Massagista</p>
                    <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                    <p class="product-price">
                        Massagens <span>Terapêuticas</span>
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=21965493980&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                        class="btnVermais"
                        style="background-color: rgb(57, 224, 71)"
                    ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
                    </a>
                </div>
                <div class="product">
                    <img
                        src="https://massagemvips.vercel.app/images/products/product-7.png"
                        alt=""
                    />
                    <p class="product-name">Massagista</p>
                    <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                    <p class="product-price">
                        Massagens <span>Terapêuticas</span>
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=21965493980&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                        class="btnVermais"
                        style="background-color: rgb(57, 224, 71)"
                    ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
                    </a>
                </div>
                <div class="product">
                    <img
                        src="https://massagemvips.vercel.app/images/products/product-7.png"
                        alt=""
                    />
                    <p class="product-name">Massagista</p>
                    <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                    <p class="product-price">
                        Massagens<span>Terapêuticas</span>
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=21965493980&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                        class="btnVermais"
                        style="background-color: rgb(57, 224, 71)"
                    ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
                    </a>
                </div>
                <div class="product">
                    <img
                        src="https://massagemvips.vercel.app/images/products/product-7.png"
                        alt=""
                    />
                    <p class="product-name">Massagista</p>
                    <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                    <p class="product-price">
                        Massagens <span>Terapêuticas</span>
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=21965493980&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                        class="btnVermais"
                        style="background-color: rgb(57, 224, 71)"
                    ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
                    </a>
                </div>
                <div class="product">
                    <img
                        src="https://massagemvips.vercel.app/images/products/product-7.png"
                        alt=""
                    />
                    <p class="product-name">Massagista</p>
                    <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                    <p class="product-price">
                        Massagens <span>Terapêuticas</span>
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=21965493980&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                        class="btnVermais"
                        style="background-color: rgb(57, 224, 71)"
                    ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
                    </a>
                </div>
                <div class="product">
                    <img
                        src="https://massagemvips.vercel.app/images/products/product-7.png"
                        alt=""
                    />
                    <p class="product-name">Massagista</p>
                    <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                    <p class="product-price">
                        Massagens<span>Terapêuticas</span>
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=21965493980&text=Oi,%20vi%20seu%20an%C3%BAncio%20no%20site%20massagensvip.com.br,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                        class="btnVermais"
                        style="background-color: rgb(57, 224, 71)"
                    ><i class="fab fa-whatsapp"></i>Ver mais pelo WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>