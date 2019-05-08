
import React from "react";

const travels = [
    {
       id: 1,
       destination: "Esfahan",
       country: "Iran",
       distance: "Distance  Tehran to Esfahan: 4463 km - Time: 4 hour 45 mins",
       photo: "https://www.google.com/maps/vt/data=NuB1fL5huwjXetJeKbZGWy4-iTah7_RVqqt2vgNSduWrkj0oT4Avyj9HE-M91KuIm6jFnYN0g62e1FJGy94vPhae09caCK7ndEMCjZ__3GNUE9UaKO1FQFyBaZGn-CzLsNPjXJlpc6WV4UC6J_Wa9bOZpRlAy2k4A_o,PyDmuQYJF4A6BYaGbCXB_K2BGqRAsRK1PBp0XS5a-su0cLq4qCFAfjwfGiGMPzqWjufgGRvIaO1Eagu6TyFDuxscZb3UWBa3JQKXMcXbTU1HnmTTA_TW1w7Iu6w9heQHiNBJ_tDFOzQ6Jnb9cSRK3v1yO3GngDO1MtwoeHOSGQn4ucx27kz0L2l_005S3dSR-yvEmp2Ykhn5WLu5Muyc9F2Y3oP6dFsgpQ9s2DK4Rii9hLT1-dK-NsDTfdfqi_GnLTaPznr7xh4pOdBHF6QSdCDlXZvIwcUU3RiXQImmaIXecRzUsDrUaDw-_siqoLOwgOSTH2o-_zsiLs76oQYiWxSmBC7iKkKt-AVenRZRPySn5DRwNuPLV33ZE5LPmM4hq2MCx2NZGWmV9iY?scale=1&h=200&w=630",
    },
    {
      id: 2,
      destination: "Shiraz",
      country: "Iran",
      distance: "Distance  Esfahan to Shiraz : 481 km - Time : 5 hour 21 mins",
      photo: "https://www.google.com/maps/vt/data=pOF3ZgtN19SCcDvRtYmnPHp7JS4RpxcBPV2Lk_54LHC5huG9DzF-3X-Wsj55c3s82pz6BWweMXQAagzksTS_hDxAmmYLVZUWDBe-bXtLpD7tiDBCRXVQxjs3VjXHUXWkpfeyAcnCeuv_D2K0t_I5VSt5LQT5s_6RTfs,W9My68K7Foe2TEU7lJ0xwbggopH3qX8Js29NqB5fjuu_foPC1KxA4B6AFRaHjAm4NbIn0ahnBLBLA1QhdV0l9XOrQ2AmaVVvem7fqPRLOLc3r4v_b2Nv1igasCItLNe-uw3Tv3PHiyz2Bb6ANgOUcXDnUJoLqMTLtRnuHpv1rjLsXTwB1nPK-X8TyEQYICjaDJb2C-xWvdDJvJvWhs_J8zX-e9r7F5qmtRZsENKq7c_e4G0S78MCf75LSw98ZcsS-EErqDb1ZXkuPiRXzCVZxRdL1Jj0k586JUhE7gT1h8uxJGXMZmZWQALvojSe7KuaRkQb5wNTn8cAWStIavcc9qVDewWlkd7ksyU6wkoCwcVj26dqmxwAebZApNJwLfNY0w?scale=1&h=200&w=630",
    },
    {
      id: 3,
      destination: "Yazd",
      country: "Iran",
      distance: "Distance  Esfahan to Yazd : 311 km - Time : 3 hour 42 mins",
      photo: "https://www.google.com/maps/vt/data=XILq4KK_YEpUsnH78mPi49h1eNIIKlrRx304eu5LH0g8OFGRy2Ot77J9tOhqlorcSxH7-0hinPrO1w_sVMIwIcFBfn1DtfUV9keV6LEXunxHktqDEWXKTq9mjVLHw0aVBC-hEBxaCKxT1IO-9HQX8KdIXeY0KgQR25c,HhjUh_AXahhEx50R0HebBhtgJhKSUf0YXip0gSjmXGteBwHnn3_1P02CaqepSaCtc4ysueV4TO8zUFCKhjBQPKV6NgwcUsbTJVyhdcOd_adv6E1_wSDoP7TRR_As5Ewl-GE_8OX0YNbC0yeKj2AAvLcQS5hBIg1wUxneSTY31yZc4p0h5gN2clbtMZTn7BWhVW9qfgmKba9f4Ad3PffrHwVD4oWbq-6sDBWLRq88GuYEG3rHqmfJpqoO9I0-vrhbBKSDHko3f1U5Y3Rm3mj_BId9f0-AGC1PauCQ0eBz4XLEd4Qi5EmJUUYFGbqZvnU2hICTaxXtruWKr9mNpobzIKMCo7bS3qpztmfKbwlzJ1_Q3ciP39_KFFyRwBBIcQ?scale=1&h=200&w=630",
    },
    {
      id: 3,
      destination: "Kerman",
      country: "Iran",
      distance: "Distance  Yazd to Kerman : 368 km - Time : 3 hour 56 mins",
      photo: "https://www.google.com/maps/vt/data=sdPpsJZyZNZC1rowabyuGuOUV0Eepx1XDNf9IweauL3Gry9Rvbvdb155h78aTdw6H7aUBBiwTjCsHNmrASy12OeECTYNgtN5EVx6iRpOjHN5ZUalaeGpNbr4IhXlHcRNAwp6_QRqA1jWNl9aB9v0ia2Pi1OdocvX8Dw,stVCb6uEMjw2rEul1EG38hxb9bcFRx5DmRk5m0hPW0uPJdOV8faqpqQkAIVZDAimUBu3oasLRnqFSx0x_w5zL52KBLQjBLlEG79fq2r1EUQ5-KtquV3l9qBhCLRE0KtXMsiBPnzSkIRmm-tCgHBcajvqo8T7kfrrJj1UShwSpoX49h2a-QxTdGbQhQ0L4cpKFo_7SBP1f6ULD6VpeHEih0CrpoEBEnCUVwElvG_cbm9GYR_nFyASn8ItBvuzGepecdqXr8mvVtaIICkOcsMHYfLQkAvz7bwohqqLtwZeeSHUgKSEGq4NK_nQUgUWzu9Y8JHM8uQyYr4noevOBo_5iPQ4yPLC7tPO?scale=1&h=200&w=630",
    },
    {
      id: 4,
      destination: "Bushehr",
      country: "Iran",
      distance: "Distance  Shiraz to Busher : 295 km - Time : 4 hour 26 mins",
      photo: "https://www.google.com/maps/vt/data=QcAHQrvaZj85Rpv_mPJ_hDG_Ohr6t1-rL2y_GqRTOqo7-BBbr8wu3C9K64XkvTBs3mvX6U73CWi7_fmW6Miae_jyREkLlhm1XBNgKp-uEP3-xkrt1X8fSS1s2y090-gqEyCyXYgPEgTml4mvV_hvj8gdTMpo0HcQ2Jw,90MxaXCQvDHS-jIYcgTqHB6gsMMCR5WuWGxYx2NCwFIgr4LyPrJiy3w0kCuDCX5eHx_aqpj-VTmD42LDrhKai7vIXS6VWrAZ0wf72e0sWJWRFO8HJyhaECTokeFldpA6wFLdwgHn7CvnIYiYVxWmCp0xJnoEvNbL_OAEzZyUEUicqPdZ58CPl48zQYkygfSkqWolkStIiTsZyqNS76qwMHfoykWe1BZv9_ljaOuuLr1OtdUx0REmH8z_FdXMpHUIbg5J6Rds5iIPKdPKyY6Khm3t_ZFfa-cuN1IPvMEveXYRGAMJugLVQ5JMG0E854RugE_2unNhYCBoizYRTj0GrlSqCtF473sigYEWNj4--zJrDi-6OY2MXnDifRldyeSWCg?scale=1&h=200&w=630",
    },
]



const Travel = () => (
    <div>
      {travels.map(travel => (
          <ul>
          <img src={travel.photo} />
          <h2>{travel.destination}</h2>
          <p>{travel.country}</p>
          <cite>{travel.distance}</cite>
          </ul>
      ))}
    </div>
  );




export default Travel;

