export default function Locations() {
  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        {/* Block - Text Block with H2 Title, Paragraph and Contact Lists Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-block__name">
                  <h2 className="reveal-type anim-uni-in-up">
                    Bienvenido a nuestra oficina
                  </h2>
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__paragraph">
                    <p className="t-large t-bright anim-uni-in-up">
                      Ideas inspiradoras, perspectivas creativas y lo último en
                      diseño y tecnología. Impulsando la innovación para tu
                      viaje digital.
                    </p>
                    <div className="mxd-paragraph__lists">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 col-md-6 col-xl-5 mxd-paragraph__lists-item">
                            <div className="mxd-paragraph__lists-title">
                              <p className="t-large t-bright t-caption anim-uni-in-up">
                                Madrid
                              </p>
                            </div>
                            <ul>
                              <li className="anim-uni-in-up">
                                <a
                                  className="anim-uni-in-up"
                                  href="https://goo.gl/maps/example"
                                  target="_blank"
                                >
                                  Calle Varsovia 21,
                                  <br />
                                  Las Rozas de Madrid
                                  <br />
                                  Madrid, España
                                </a>
                              </li>
                            </ul>
                            <ul>
                              <li className="anim-uni-in-up">
                                <a href="tel:+34910000000">+34 910 00 00 00</a>
                              </li>
                              <li className="anim-uni-in-up">
                                <a href="mailto:hello@magiclemons.agency?subject=Mensaje%20desde%20el%20sitio%20web">
                                  hello@magiclemons.agency
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Text Block with H2 Title, Paragraph and Contact Lists End */}
      </div>
    </div>
  );
}
