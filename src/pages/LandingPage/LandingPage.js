import React, { useState } from 'react';

import {
  Wallpaper,
  Centerize
} from './LandingPage.styles';

const LandingPage = () => {
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [resultMessage, setResultMessage] = useState(
    'Please type the value on the inputs and then click on calculate'
  );

  const reset = () => {
    setResultMessage(
      'Please type the value on the inputs and then click on calculate'
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (alcoholPrice > 0 && gasolinePrice > 0) {
      const result = alcoholPrice / gasolinePrice;

      if (result > 0.7) {
        setResultMessage('Gasoline is woth');
      } else {
        setResultMessage('Alcohol is woth');
      }

      if (result === 1) {
        setResultMessage('They are at the same');
      }

      if (result > 2 || result < 0.01) {
        setResultMessage('Please, fill the fields correctly');
      }
    } else {
      reset();
    }
  };

  return (
    <Wallpaper>
      <div className="container">
        <section className="section">
          <div className="columns is-multilne is-mobile">
            <Centerize>
              <div className="card">
                <div className="card-content">
                  <p className="title">Gas Calculator</p>

                  <form onSubmit={e => handleSubmit(e)}>
                    <div className="field">
                      <label className="label" htmlFor="alcohol_price">Alcohol Price</label>
                      <div className="control">
                        <input
                          className="input"
                          type="tel"
                          name="alcohol_price"
                          id="alcohol_price"
                          placeholder='Type the alcohol price'
                          value={alcoholPrice}
                          onChange={e => {
                            if (e.target.value === '') {
                              setAlcoholPrice(e.target.value);
                            } else {
                              setAlcoholPrice(parseInt(e.target.value));
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label" htmlFor="gasoline_price">Gasoline Price</label>
                      <div className="control">
                        <input
                          className="input"
                          type="tel"
                          name="gasoline_price"
                          id="gasoline_price"
                          placeholder='Type the gasoline price'
                          value={gasolinePrice}
                          onChange={e => {
                            if (e.target.value === '') {
                              setGasolinePrice(e.target.value);
                            } else {
                              setGasolinePrice(parseInt(e.target.value));
                            }
                          }}
                        />
                      </div>
                    </div>

                    <button className="button is-primary is-outlined is-fullwidth">
                      calculate
                    </button>
                  </form>

                  <div className="column is-12 has-text-centered mt-6">
                    <p className="title">{resultMessage}</p>
                  </div>
                </div>
              </div>
            </Centerize>
          </div>
        </section>
      </div>
    </Wallpaper>
  );
};

export default LandingPage;
