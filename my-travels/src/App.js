import React, { Component } from 'react';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Popular Journeys in Iran</h1>
          <Travel
          destination="Esfahan"
          country="Iran"
          distance="Distance  Tehran To Isfahan: 4463 km - Time: 4 hour 45 mins"
          photo="https://www.google.com/maps/vt/data=E8NBf1Dy1MOKyxrUw8HMmWGVkwy18GRi3vb1_WwGXv6ktG131hq3aOXqF8_j_wJFYbx9vybirEsODw3-GBj6JZKhdJv19v6vmKJVX2dck6GigEPN7jB9ZRSrBrOJlwm0SWbMmDxp7C0TgEZWbfPOge4hKrjZOzwWz18,2QpMUc9gyx1VPLn-GOAUMd93o0W_Nwu3n9zHK1quRomDnyakVUzCOpb2bpgEVm_3bdCrun1q2sOTMnDdGVwMa-KHnvzH4Podpo9yzGMoSYE6guxT8_Z1nvemWBw1FXI86cfrzLM4IcffB_lD8amlCMlElk9Pmk4-ozd76GV2MiyOK8Sy2o-yNlbuzN1rkTBiBfSR9iGztxwXss3Vr9RQVoZYtaACoNch-JWNstqYdftRDpLXkrUqpDRP-cna0nM3Y_F2AxNiAkWVq04KStyDUz3IluDSxqCfRe0y-NYJ1c69YgaYbRNg5dGHrSkx44XWydVgmA1QAh9yMJrfpeIolSBl-dL6EcJLcLZOfyjiS2cuM_9T0l_e9tozc9stIA?scale=1&h=200&w=630"
        />
        <Travel
          destination="Shiraz"
          country="Iran"
          distance="Distance  Esfahan To Shiraz : 481 km - Time : 5 hour 21 mins"
          photo="https://www.google.com/maps/vt/data=pOF3ZgtN19SCcDvRtYmnPHp7JS4RpxcBPV2Lk_54LHC5huG9DzF-3X-Wsj55c3s82pz6BWweMXQAagzksTS_hDxAmmYLVZUWDBe-bXtLpD7tiDBCRXVQxjs3VjXHUXWkpfeyAcnCeuv_D2K0t_I5VSt5LQT5s_6RTfs,W9My68K7Foe2TEU7lJ0xwbggopH3qX8Js29NqB5fjuu_foPC1KxA4B6AFRaHjAm4NbIn0ahnBLBLA1QhdV0l9XOrQ2AmaVVvem7fqPRLOLc3r4v_b2Nv1igasCItLNe-uw3Tv3PHiyz2Bb6ANgOUcXDnUJoLqMTLtRnuHpv1rjLsXTwB1nPK-X8TyEQYICjaDJb2C-xWvdDJvJvWhs_J8zX-e9r7F5qmtRZsENKq7c_e4G0S78MCf75LSw98ZcsS-EErqDb1ZXkuPiRXzCVZxRdL1Jj0k586JUhE7gT1h8uxJGXMZmZWQALvojSe7KuaRkQb5wNTn8cAWStIavcc9qVDewWlkd7ksyU6wkoCwcVj26dqmxwAebZApNJwLfNY0w?scale=1&h=200&w=630"
        />
        <Travel
          destination="Yazd"
          country="Iran"
          distance="Distance  Esfahan To Yazd : 311 km - Time : 3 hour 42 mins"
          photo="https://www.google.com/maps/vt/data=XILq4KK_YEpUsnH78mPi49h1eNIIKlrRx304eu5LH0g8OFGRy2Ot77J9tOhqlorcSxH7-0hinPrO1w_sVMIwIcFBfn1DtfUV9keV6LEXunxHktqDEWXKTq9mjVLHw0aVBC-hEBxaCKxT1IO-9HQX8KdIXeY0KgQR25c,HhjUh_AXahhEx50R0HebBhtgJhKSUf0YXip0gSjmXGteBwHnn3_1P02CaqepSaCtc4ysueV4TO8zUFCKhjBQPKV6NgwcUsbTJVyhdcOd_adv6E1_wSDoP7TRR_As5Ewl-GE_8OX0YNbC0yeKj2AAvLcQS5hBIg1wUxneSTY31yZc4p0h5gN2clbtMZTn7BWhVW9qfgmKba9f4Ad3PffrHwVD4oWbq-6sDBWLRq88GuYEG3rHqmfJpqoO9I0-vrhbBKSDHko3f1U5Y3Rm3mj_BId9f0-AGC1PauCQ0eBz4XLEd4Qi5EmJUUYFGbqZvnU2hICTaxXtruWKr9mNpobzIKMCo7bS3qpztmfKbwlzJ1_Q3ciP39_KFFyRwBBIcQ?scale=1&h=200&w=630"
        />
        </header>
        
      </div>
    );
  }
}

export default App;
