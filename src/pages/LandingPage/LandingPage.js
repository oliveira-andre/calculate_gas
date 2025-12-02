import React, { useState } from 'react';

import {
  Wallpaper,
  Centerize
} from './LandingPage.styles';

const LandingPage = () => {
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [resultMessage, setResultMessage] = useState(
    'Por favor informe os valores nos campos e clique em calcular'
  );

  const reset = () => {
    setResultMessage(
      'Por favor informe os valores nos campos e clique em calcular'
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (alcoholPrice > 0 && gasolinePrice > 0) {
      const result = alcoholPrice / gasolinePrice;

      if (result > 0.7) {
        setResultMessage('Vale mais a pena abastecer com gasolina');
      } else {
        setResultMessage('Vale mais a pena abastecer com álcool');
      }

      if (result === 1) {
        setResultMessage('Os valores são iguais');
      }

      if (result > 2 || result < 0.01) {
        setResultMessage('Por favor, informe os valores corretamente');
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
                  <p className="title">Calculadora de combustível</p>

                  <form onSubmit={e => handleSubmit(e)}>
                    <div className="field">
                      <label className="label" htmlFor="alcohol_price">Preço do álcool</label>
                      <div className="control">
                        <input
                          className="input"
                          type="tel"
                          name="alcohol_price"
                          id="alcohol_price"
                          placeholder='Digite o preco do alcool'
                          value={alcoholPrice}
                          onChange={e => {
                            if (e.target.value === '') {
                              setAlcoholPrice(e.target.value);
                            } else {
                              if (e.target.value.length === 1 && String(alcoholPrice).length === 0) {
                                const currentValue = parseFloat(e.target.value);
                                if (isNaN(currentValue)) {
                                  return;
                                }

                                setAlcoholPrice(e.target.value + '.')
                              }else {
                                const currentValue = parseFloat(e.target.value);
                                if (isNaN(currentValue)) {
                                  return;
                                }

                                if (e.target.value[e.target.value.length - 1] === '0') {
                                  setAlcoholPrice(e.target.value);
                                }else {
                                  setAlcoholPrice(parseFloat(e.target.value));
                                }
                              }
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label" htmlFor="gasoline_price">Preço da gasolina</label>
                      <div className="control">
                        <input
                          className="input"
                          type="tel"
                          name="gasoline_price"
                          id="gasoline_price"
                          placeholder='Digite o preco da gasolina'
                          value={gasolinePrice}
                          onChange={e => {
                            if (e.target.value === '') {
                              setGasolinePrice(e.target.value);
                            } else {
                              if (e.target.value.length === 1 && String(gasolinePrice).length === 0) {
                                const currentValue = parseFloat(e.target.value);
                                if (isNaN(currentValue)) {
                                  return;
                                }

                                setGasolinePrice(e.target.value + '.')
                              }else {
                                const currentValue = parseFloat(e.target.value);
                                if (isNaN(currentValue)) {
                                  return;
                                }

                                if (e.target.value[e.target.value.length - 1] === '0') {
                                  setGasolinePrice(e.target.value);
                                }else {
                                  setGasolinePrice(parseFloat(e.target.value));
                                }
                              }
                            }
                          }}
                        />
                      </div>
                    </div>

                    <button className="button is-primary is-outlined is-fullwidth">
                      Calcular
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
