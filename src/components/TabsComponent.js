import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./TabsComponent.css";

function TabsComponent() {
  return (
    <div className="tabs-master">
      <Tabs defaultIndex={0}>
        <TabList>
          <div className="day-bttn-container">
            <Tab>
              <div className="day-bttn">Saturday</div>
            </Tab>
            <Tab>
              <div className="day-bttn">Sunday</div>
            </Tab>
          </div>
        </TabList>
        {/* Saturday */}
        <TabPanel>
          <Tabs>
            {/* Saturday Stages Tab */}
            <TabList>
              <div className="stage-bttn-container">
                <Tab>
                  <div className="stage-bttn">SAT / STAGE 1</div>
                </Tab>
                <Tab>
                  <div className="stage-bttn">SAT / STAGE 2</div>
                </Tab>
                <Tab>
                  <div className="stage-bttn">SAT / STAGE 3</div>
                </Tab>
              </div>
            </TabList>
            {/* // */}
            {/* Saturday Stage 1 Content */}
            <TabPanel>
              <Tabs>
                <div className="stage-artist-info-container">
                  <TabList>
                    <div className="artist-bttn-container">
                      <Tab>
                        <div className="artist-bttn">SAT / STAGE1 ARTIST1</div>
                      </Tab>
                      <Tab>
                        <div className="artist-bttn">SAT / STAGE1 ARTIST2</div>
                      </Tab>
                      <Tab>
                        <div className="artist-bttn">SAT / STAGE1 ARTIST3</div>
                      </Tab>
                    </div>
                  </TabList>
                  <div>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SATURDAY STAGE1 ARTIST 1 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SATURDAY STAGE1 ARTIST 2 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SATURDAY STAGE1 ARTIST 3 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </Tabs>
            </TabPanel>
            {/* Saturday Stage 2 Content */}
            <TabPanel>
              <Tabs>
                <div className="stage-artist-info-container">
                  <TabList>
                    <div className="artist-bttn-container">
                      <Tab>
                        <div className="artist-bttn">SAT / STAGE2 ARTIST1</div>
                      </Tab>
                      <Tab>
                        <div className="artist-bttn">SAT / STAGE2 ARTIST2</div>
                      </Tab>
                      <Tab>
                        <div className="artist-bttn">SAT / STAGE2 ARTIST3</div>
                      </Tab>
                    </div>
                  </TabList>
                  <div>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SATURDAY STAGE2 ARTIST 1 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SATURDAY STAGE2 ARTIST 2 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SATURDAY STAGE2 ARTIST 3 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </Tabs>
            </TabPanel>
            {/* Saturday Stage 3 Content */}
            <TabPanel>
              <Tabs>
                <div className="stage-artist-info-container">
                  <TabList>
                    <div className="artist-bttn-container">
                      <Tab>
                        <div className="artist-bttn">SAT / STAGE3 ARTIST1</div>
                      </Tab>
                      <Tab>
                        <div className="artist-bttn">SAT / STAGE3 ARTIST2</div>
                      </Tab>
                      <Tab>
                        <div className="artist-bttn">SAT / STAGE3 ARTIST3</div>
                      </Tab>
                    </div>
                  </TabList>
                  <div>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SATURDAY STAGE3 ARTIST 1 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SATURDAY STAGE3 ARTIST 2 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SATURDAY STAGE3 ARTIST 3 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </Tabs>
            </TabPanel>
            {/* // */}
          </Tabs>
        </TabPanel>
        {/* Sunday */}
        <TabPanel>
          <Tabs>
            <TabList>
              <div className="stage-bttn-container">
                <Tab>
                  <div className="stage-bttn">SUN / STAGE 1</div>
                </Tab>
                <Tab>
                  <div className="stage-bttn">SUN / STAGE 2</div>
                </Tab>
                <Tab>
                  <div className="stage-bttn">SUN / STAGE 3</div>
                </Tab>
              </div>
            </TabList>
            <TabPanel>
              <Tabs>
                <div className="stage-artist-info-container">
                  <TabList>
                    <div className="artist-bttn-container">
                      <Tab>
                        <div className="artist-bttn">SUN / STAGE1 ARTIST1</div>
                      </Tab>
                      <Tab>
                        <div className="artist-bttn">SUN / STAGE1 ARTIST2</div>
                      </Tab>
                      <Tab>
                        <div className="artist-bttn">SUN / STAGE1 ARTIST3</div>
                      </Tab>
                    </div>
                  </TabList>
                  <div>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SUNDAY STAGE1 ARTIST 1 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SUNDAY STAGE1 ARTIST 2 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SUNDAY STAGE1 ARTIST 3 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </Tabs>
            </TabPanel>
            <TabPanel>
              <Tabs>
                <div className="stage-artist-info-container">
                  <TabList>
                    <div className="artist-bttn-container">
                      <Tab>
                        <div className="artist-bttn">SUNDAY STAGE2 ARTIST1</div>
                      </Tab>
                      <Tab>
                        <div className="artist-bttn">SUNDAY STAGE2 ARTIST2</div>
                      </Tab>
                      <Tab>
                        <div className="artist-bttn">SUNDAY STAGE2 ARTIST3</div>
                      </Tab>
                    </div>
                  </TabList>
                  <div>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SUNDAY STAGE2 ARTIST 1 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SUNDAY STAGE2 ARTIST 2 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SUNDAY STAGE2 ARTIST 3 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>{" "}
              </Tabs>
            </TabPanel>
            <TabPanel>
              <Tabs>
                <div className="stage-artist-info-container">
                  <TabList>
                    <div className="artist-bttn-container">
                      <Tab>
                        <div className="artist-bttn">SUNDAY STAGE3 ARTIST1</div>
                      </Tab>
                      <Tab>
                        <div className="artist-bttn">SUNDAY STAGE3 ARTIST2</div>
                      </Tab>
                      <Tab>
                        <div className="artist-bttn">SUNDAY STAGE3 ARTIST3</div>
                      </Tab>
                    </div>
                  </TabList>
                  <div>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SUNDAY STAGE3 ARTIST 1 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SUNDAY STAGE3 ARTIST 2 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="artist-desc-container">
                        <h1>SUNDAY STAGE3 ARTIST 3 DESC</h1>
                        <h3>Date and Time of show</h3>
                        <div className="artist-desc-info-container">
                          <div className="artist-desc-image"></div>
                          <div className="artist-desc-text">
                            <p>
                              Her experience comes together in DAJU, which fuses
                              her industry knowledge with a commitment to
                              diversity and inclusion. Since launch, DAJU
                              secured the first Afrobeats showcase at SXSW,
                              booked West African stars like Tomi Agape and
                              Loshh, and provided D&I consultancy for
                              institutions like University of Westminster and
                              The British Council. In conversation with Andrew
                              Mensah for RA's ongoing collaboration with Black
                              Minds Matter, Shogbola traces the arc of her
                              career. Her experience comes together in DAJU,
                              which fuses her industry knowledge with a
                              commitment to diversity and inclusion.
                            </p>
                            <div className="artist-desc-social">
                              <h4 className="social-link">FB</h4>
                              <h4 className="social-link">IG</h4>
                              <h4 className="social-link">SC</h4>
                              <h4 className="social-link">WWW</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </Tabs>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabsComponent;
