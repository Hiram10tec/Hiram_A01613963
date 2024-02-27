const server = http.createServer( (request, response) => {    
  console.log(request.url);
  response.setHeader('Content-Type', 'text/html');
  response.write(`
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Clash of clans</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      </head>
      <body>
          <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                  <img src="https://clash-of-clans-wiki.com/pics/clash_of_clans.jpg" width="112" height="28">
                </a>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
            
              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item">
                    Home
                  </a>
            
                  <a class="navbar-item">
                    Documentation
                  </a>
            
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      More
                    </a>
            
                    <div class="navbar-dropdown">
                      <a class="navbar-item">
                        About
                      </a>
                      <a class="navbar-item">
                        Jobs
                      </a>
                      <a class="navbar-item">
                        Contact
                      </a>
                      <hr class="navbar-divider">
                      <a class="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div>
                </div>
            
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <a class="button is-primary">
                        <strong>Sign up</strong>
                      </a>
                      <a class="button is-light">
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
  
          <section class="section">
              <div class="container">
                  <h2 class="title">Hola Clash of Clans!</h2>
  
                  <div class="columns">
                      <div class="column">
                          <div class="card">
                              <div class="card-image">
                                <figure class="image is-4by3">
                                  <img id="imagen_barbaro" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRYVFRUYGBgYGBgYGhoYGBIYGhgYGBgaGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQkJCs0NDQ2NDE0OjQ0NDQxNDQ0NDQ0NDQ0ND80MTQ0NDQ0MTQ0NDQ1NDQ0NDQ0NDQ0NDQ0NP/AABEIAQEAxAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADgQAAIBAgQEBAQFBAICAwAAAAECAAMRBBIhMQVBUXEiYYGRE6Gx0QYyUsHwFBVC4XLxI5IWYqL/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QAJhEAAgICAgEEAgMBAAAAAAAAAAECEQMhEjFBEyIyUQRhFHGBkf/aAAwDAQACEQMRAD8A9TRBCkk9b9RFnxVtRraHKkb72t6TOqUHJsu0+Yg+Mds9uNN7C0MSSwJPzmspGW4sZgrRy7xum9iALgc4jak+gygn0aCuPCPK3vG2w4sIth1UjML9o29TwgwOokZXehFk1Yb2GkSqIhOptNh3A1taZNd1JNxrGi1eikJMGKltA3aEo4e5DtaZ7r4tOXKGplzz/wCpzSVyKuLfQ+nDw1yJrYUIoy6Xvb1MxcNjcpC6i53mylMa9b3v5eUlbTszZlJaYSrw5Swa3OYH4lwoFiBa816nFXA1XpeI8Rr/ABgOQFu8EnCMlKIcPOMk30YeAwecES1TAsCCOU9Jh8ItNSebCLYyn+UAbxZZpcv0aPX5S10Z3wzYXgcRR6TWShfeBxNHrGxyvYqmrMgrF6jWjtcATJ4hUtNUE26KKrCNi12jNCpsZ5sV7tNKlWIsJaWKloLimj1OHcWjJOkwsPXsN40mMirog4uwWOHi9P3MkDisQubflJE2dTNjGVgTpFziAoI53/n0ha1Ek/zaDrYPQE85GVSexoqNUEppnI1sCYSnSDObHnuegi1BrXDG2UQX9R+m+tz85yVdB4t9G3Srrew2vHqwGmlx5fWebSqNCTqeU1UxOYBV3ECWnZGeN2mhrEr4dBcTDZQW877Rx8d8LwvfLrPO1uIXqM66gfwSmOFpsbHF9D+LoMh205QKY4JuD36CCfilV8qIjNz8Klve0P8A2jEPqUCDo5H0F4Wkvl0aYyjVSaR3ErmVXB8I5eV7z0P4exWYFW5C6jnYaTD/ALLVBuaigW/KAxHrtNLA4T4ZDFhfXkbEcvaZ3kjHp2SzcZQpMY4mzW2CgH3MVxtDwLl/Mw17mNVqwb8wBt3ir2LZifTlMqluyULSX6GOEU6lTwvqF0vNbF4YKL9BEuG8SSmpUgm5vcW/eM4niKOLA27gza/S9FyvbM8+bn1SFqCZm0Ggi+Pp3YzSw48Hhtr01gMThrDzmZScYrX7GjL3HjuIuVJtrPN11ct4rz22Iw4JMxuIYIDbn0m7Bmj0boNIwqYUaG0cQW84pUoWO0PRuQPIzXLasr+jQparCMLC15ns7DnL5i1pLiJx2crLrvykkqhflJCHij3iDTQTlemCkKr5b76Qb1VfS+0yyaekeem7sy8Sq/l3G14Cnh1tckqNrzZfChdbdvWKugAAbQX005xU2tF45U1SFcRg1LKUbS1jNI4JQAQTm01HODo08+XoWtfvPQ4TDLRTfMept8uk6EXlfdJEsuakkuzPxnBTWVbmwtqSNe9oLDfhvDUhmfxnqx09FGkFxDjzBiBawmBjOJO+rMfIDSaIyirUV/0klkapukeoxHFaKDKugHJQB8pj4j8RJyHvPM4hz1MULQely3I5NR6PTYjj45f9xKpx5phsZwGOvxoeUd6j8Gv/AHlou/FKh/y+kRkjLDBeBXkkNf3Nx/lLrxV+szjvJG9OH0L6kvs16HFal9CQfK4+k3uG8eqFlSqMysbZuYvtfqJ5LCPZ1PnY+s9EyaDykc2ONVRSPuVs28TRJOgmZiKbDlPWU1DorW3APuJmY9CBsJ5iUsbVlceW3R4viFC5vMg3Sesq4YMSTtMjH4UWNuU9PDmT9rNydLRmmuLawuGcmKOgHOUOJttymrjfQOVPZplfOci6rmAbqJIlMbkfRCCbgnQwWAohS1muTKFWOl/55wlJLuNLfvMMXtHmS6asdxNO41vaLjC5zrfyv5RpFLEC+nSPoml+U1wwxyt+EZuTj0JJhsqX6a6fzzlalU5bS4qXzC/K/wA4Cp+U9j9J586hkSj9GjGm17jymIa57kmK1N40427RWqdTNMCrFK+8VMO7QBmqJCRJWdnY4pwTtpwS1oAFGE5lhQs6qwilFXf+bT0+HOZQeoB+U8/TTWbXDm8AHS49j9rSGV6L4z2PA3zUU8rr7H7WhMfQzLYTL4Li8isvLNfsCP8AU0BxAM2UTBk4yi4+RVGSlyRmf0mUETG4pRABAE9di6ek8/jhuLTPilKM6ZqwzcnbPD4ukLm0Q+GwvNnGIAxtpKLQ5z3ITpGmS5CNO9tpIZwbyRrDR9Q+HbU62lqFRWNgLGBesVUkm/K0SpYgf43LDn5zHKcY0kjy4xck7Np1IGkMjEL4tABaZNXHMosxu1wcvfrHkxGdLjtboZXBJOTp/wCCyxtLZRaam7AnT+Wgqux7H6TtElQVPMwOIewPYzzs8l6q1X2WgtHnag0XtM6ud/Sa1ekbdpmYikZqxtFJdGe0EYd0MEyzXFkGU5TpP0ktKn9j+0YQ6IRRBWhFM4Ba06eU4WlGnAYUPNThtTf3mQjx7A1MpN9O8lNaKQez1PCKWdmXqtx3B/3NDheCyOxYjNyExOD4zK4Ya3BX3m1UQWNQMSx5Dl2mGUUpWu/JRuW43pmpiSLTz2M52hzUYi5bYegi1RyQbaxW4ylyaHxQcTzWNQFjyi4Zduk08dhjuRM0Ycqc3Ka4STRs8A8gnZSrV1MkpsJ77EUzfKRy3v1/eWw2HWn4z0Nh17+sYqjUgctSx5DnF1xRdguW6iYHPe/8PNim1+vIjic7nMLC55WlnqGmoGa1zfTmRNB8KFBI15zPxCJub3GunlraBRnd9FoyUteBgYgsyX6X06+cDxBtJfAksCbbak/T5TMx+Ou5pqpYjU25RJRlPKv6Co7aQF6mhij4gc5HxaC4Y5T56RGq4OxmyEPtAl0GdwecXqARZmlc80qJGQxUUadormGcA87zrPM3G4jK9LoXy/8AspA+dpSEW3QjZoEzheVLSjPCKwmeUd4hjOIoilib20011OwivCsUMRWppUuKVU5AUJDK5/LmPPWwt5y8Px5S2Tc4o1hW6R04FaqbkMNjc2v5jaIYjAmi70ib5TofIi80uGVNI0sairKQdsnAMUyOab8iCPQ6iex+NmuyG1wdOnWeO4kmWrTqDmcrd+Xy+k9RwrEqtNwVuc5v1sZ535ONL3I1Yr67L0mfZtuX3hKFQgnnO0czXyqbEdPy+so1I5dv52mB+00WumAq1gW12gMThhbTaMtQuuxJ7SlNbCxMpzta7Qy10Zn9AOkkc+IOskPOZaz1ePoFxZTa+45EDlHMBhAqrcbDXzMZ+BmN9NOm0KOk14fxWpOU1/R4UsrceKFMaQF8phtQ8Laes9HXoX9vnMjF4UqLXJ5zvyYNvrRTBJJVZl4JyjEbBgdOwnOCYYFalQ7u5Hov+7y7g3XbmPl/qF4S1sOvdz/+zJQVS/w1zerXk85xvDXJuLzzyYDNUUZyinQkcp7DH6kzEr0hfaa8boSW0ZXHsDXwwVlZa1M3F7WIbcAleR62mVT4xrZ0Km1zrmAPTTcz0LoOkAmGQtfICe1zNDcWtojGEr7sTSozKCFOo2OhiOI4bUqkFzkCnMOZuNj5T1tLDgDaL4lIuNq9DyikjG/pHv8An07a/aUrYM8yTNDnDFLiVpR3RKuRgvRQq9NkujlW8BClGG5F9+srwvDqlSmwRlSk2cZiCzuNV221sb+U0q1AgyqpNSytxozvCk7LYvEM7s7bsb9ugjeBSwitOmN5pYO0jN6KQ0w3EqH/AIif0kN7H7GMcKJZnUH8yq3e1r/WV4nUAoP/AMSPeD/DjMa+HtqGGU9iCD9/SYckeSaRrxz4uz2XBscB/wCHKAoB8X1JMbbCDKzLqDtYRajw+9XKAct7k+XeegqEBco2GkyRh6kHy6WkSyzSncfJ5Kr4dNZm4kkX847x2sA2hAtMQ177mRxY6N0E+KZwESQYe2kkpRos+qPiVURevXZh4LXtvaBFNmPkO28saIVgbn7zU8uWa3paPBUYr+ylJm1LNcjS2gnVRnUg/wAHSAxFMZtBzudflNPCJZQR0ksMHkm4tvVjSfFWjzWMQqyjmbn20mZw7E+F6fNWJHYm/wBbzdx9dcwzIVK39b+c8mXy4nTmSPeT1zpPwbsdyhsNi73mbUBnosThxa+0xaoF9JWM6DSaMyqbS+AYBHY73AEO+GBg/wCkUAi517faVeaLVCpJB0rArvrM+vV1i1XhJzZlrVFPS6lf/W1oLEK4/wDsfLw39Cf3lIOKemJLYVmhMPWsNZkviH/Qw72/YwNZXcWOYL0W49zzmjkmiHKmba1gcynmDby84ulS8TwdHKLC9vMk/WPIqweokG1JFlMbw7axXw9ozhk16wPJGQVFeAf4gxVqap+o/Ia/aOcExhREZTZhcDt0+cwOO1L1AP0i33jvDqBZE6Bmueg0kMquNDR+R9d4XiVFIMSbsL3It/BM/G8XRM3ivflPL1+LNYKDoBb0EzK+KvzicXJKNaQywxTbZp4vHoxJKDXqT94kKtO+1vW/1mRiMRE/6k3lF+Omirzcej1QCHXN9Z2YVPEG0kT+Kg/yGfXA1mzchpaHquGtpCrSUiwlTQA1J9I/CajqmmedcRdqR/3GcKcoIO0G9UDViJjY/jAGgiR445cl2NGEp6o1eItTYWOv85TwHEBbErb9QPpHa3EGc7wFdBmVz+n6aH+eczZpqU+VbN+HG8cdlcfii7a6KNhEmqAQWIxEz62KA3M6MG+ybY+2JgXxJ6zz+L4wq9PK53gf7sxF8lx5H/U0x/Hk1dCSyxWjdfEHrANVmY3ErC5RvlKtxG4uEb1tKLBJeCTyRfk0/iQL1fOZacRYkjJtpylzinJtk385RYZfROU4/Y61YSwrecRZKhI2F+8xK3GCpsGDa2NgR6iOsEmL6is9QcRO0sUQbgzDo44GNJViOFdjKTHeK+IrUH+RsR0a23aNYfF5aSgdTF6HiVlIB0vbzGxHaJZ4Yx5d+CylStGsMbecfFTI+JO/ElOCO5jdSteBvAlp1WlVHRKUh+m+kkDTfSSdQeR99B8oricSEF73MmKxVp5viOMvfWebKSWkNjxcns5xLiZOxmI9a51lMTUvF80j32ehCCSpDQe07XrnJEnqSB7oB5n6xHHobJ8RHEVLamYHEcSdhuflNXGNcxPhmGzXqHUliF9NLzbiiltmB7PF4sszlQCbXAA123h6WMrohQHKt76rqPIEibHAFNGvVFZcpIJBcW0za2J63G09JxDhVKqBdXN7aqeR9J6POK0YmpNnhG4xXcWLi3/FftHBxyp+hPZvvPQv+FKS/k+J6lT+0I/4eTq9vMp9oryK9Dxgq2jy9Pi7Ak5FJJvuRJX41VNioVLX2F9+89HS4ElvHe9zzXa5tt5WlG4FSLf5ZbciN+fLtCpnOEfpnkDjqxbWo9zpvyO+m0YrcGK02qBrgC+3LnrPUf8Ax/DgqRTJ63dvff8Al4zxKgxoMiIdUKgAE7DQR+SJuL8I8Hg6h29RNnCVvb6QHD+EstzUUqSLAH6zvwyjlfWTyRT2h4vwbuHYggwOJFnbufvJhmuoncYPGfT6CZ8fyKroXM6DOTomigNlgZYSgMsDHS0TbGk2klEOkkAT6vjcXMLF4iTFYgzNqVLzyFE9SKSOs8rmgi0qXitF0Sq8LhHunZm+gP7xKu8Nwpro46N9V/1C4+2xMvQjjDYHtDfh8DInc/UxfiI3nfw/U0A6MRNEfgYl2esNTqFPcAxariWH/QhCdIhiHiRKOkUrYo9BFHrEytSpBF5oiiLYRngjUIlC0qxlEJJnXxBMNQruNmI7GJ3jFGGS0LFgeJuTa5vMHHDxr2M2+IDaYuMPjXsY6+IkvkPcPblC4seI9h9Ivw7eN4n8xkY/IouhQzghGWUyy6FZW86pktLokZsSggkhUTSST5DcT1D1LxctBs8rmmVx0boyOs0CzzlR4s9SScdllI7WeN8EbwVO6/QzJrVIxwbF5WZD/na3cX09jDKL4iylYfHbxDg9XK7L0N47jT8plIhVlfkSVby6GPjVxoyvTPZCrpEcS8pha911gsS4giqY8noEzwJMheUJmhIiWJlSZUmcjIRnYam8WJl0MZ9Crspj30Exa+rn2/f95p4p7mJ10syjna57k3+3tA3UTqt2OcPTbuIZ11PeWwi2EuZGHbZVLQsUkFOHywiJLWChUUpcUY2iTpQDU7DWLKQVEWeqi6FrHpeSFwnEMC6hqoUPscy3OnnbaSLv6Y/t+xwmVZ4NngmeNxsHIlV4m9WWrPEXeTcCimXqPKUzrAs8JRnKIrkajYgsPMjU/adRRa3K0XWFRpyjXQGw9B8ptyl8S8UYylTEG2us5x3YOWqL55M8VGKXr76TvxRHFsYNSVNSBNSVD+cKYgfNO57CKmsOs41S8dbFCrqbmUqpds380lVaFVoXG0dYzQbSXBi6NCq0RR49DqQUGEWADQiGBjJjKmDxtNmpuEUsxW1h0OhPteWSaOBNlZvT9/tJSlx2VguTo+dvhWBsUa//ABb7Ts9zUcXnI3rv6D6K+xV2i7tCuYCoZdGcBVaKVDGKjRWpA0dyAlo1Qilo1QERoaxxTLgway14DrLM0C8uZWcdYtVogxZqVpo2lXSFIRiAWdyxk05zJGSA2DRIQSBZ0RwEBlwYOWE44MphEMCssDOODq0IhgRDU4shojVOOF7JbuYpTlK9a8zT2zVB0rKu+s5B5pJ2heRZoBzLsYBjNSMrYvWNoBjC4hMwtex5GLIeu43hOJaNURARiiYGgpjAlrSCdiDHQJUrLWktOACInCIUiUYTjrKWlSsJaVIjoDBlZy0KBOlZx1AMs6BCWnLQgIJZZWWE4AQRinF1jFOTkx4Bnew+UlGiGi5OZvITRooQJGdVZthFVs7/AEy/pEkLYTkz8i/BfRlEQFUWh3cdR7iLVag6j3E9KJ5TKGJ1ks1+saLr+oe4lGAZWNxpbmIJOkCO2LiGonWLrUX9Q9xCLUX9Q9xOsNGhTMJaKUqy/qHuIwKq9R7iIEvOSvxB1HuJw1B1HuITmXMraU+IOo9xIag6j3EIpYyhk+IOo9xKtUXqPcQpnF0MjCDSqvUe4nWqr+oe4it7GOmcMqaq9R7iVNRf1D3EaxQgE6IMVB1HuJYVB1HuJzZwdBGkTSBwygkaj3E2xSUADSRk/ovijbszvg21jCPfeGZRtcSHD35j5RHtGjlQuask78PzHuJJCkV5M+tSGSSemujyDkgkkgl0GPZWQSSQo46ssskkBxJJJITiSSSTgEM5JJAjiCSSSd5CjhkkkhOOmdkknPoBZZcSSSbKxIZaSSd4OZWckkijH//Z" alt="Imagen de bárbaro">
                                </figure>
                              </div>
                              <div class="card-content">
                                <div class="media">
                                  <div class="media-left">
                                    <figure class="image is-48x48">
                                      <img src="data:image/jpeg;base64,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" alt="Placeholder image">
                                    </figure>
                                  </div>
                                  <div class="media-content">
                                    <p class="title is-4">Bárbaro</p>
                                    <p class="subtitle is-6">@julianbarbaro Lvl: <span id="nivel_barbaro">1</span></p>
                                  </div>
                                </div>
                            
                                <div class="content">
                                  Vida: <span id="vida_barbaro">20</span> <br>
                                  Ataque: <span id="ataque_barbaro">12</span> <br> <br>
                                  <button id="boton_atacar_arquera" class="button is-danger">Atacar arquera</button> <br> <br>
                                  <button id="boton_levelear_barbaro" class="button is-success">Subir de nivel</button>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div class="column">
                          <div class="card">
                              <div class="card-image">
                                <figure class="image is-4by3">
                                  <img id="imagen_arquera" src="https://static.wikia.nocookie.net/clashofclans/images/6/68/Avatar_Archer.png/revision/latest?cb=20200913014217" alt="Imagen de arquera">
                                </figure>
                              </div>
                              <div class="card-content">
                                <div class="media">
                                  <div class="media-left">
                                    <figure class="image is-48x48">
                                      <img src="https://static.wikia.nocookie.net/clashofclans/images/6/68/Avatar_Archer.png/revision/latest?cb=20200913014217" alt="Placeholder image">
                                    </figure>
                                  </div>
                                  <div class="media-content">
                                    <p class="title is-4">Arquera</p>
                                    <p class="subtitle is-6">@jazmin Lvl: <span id="nivel_arquera">1</span></p>
                                  </div>
                                </div>
                            
                                <div class="content">
                                  Vida: <span id="vida_arquera">14</span> <br>
                                  Ataque: <span id="ataque_arquera">8</span> <br> <br>
                                  <button id="boton_atacar_barbaro" class="button is-danger">Atacar bárbaro</button> <br> <br>
                                  <button id="boton_levelear_arquera" class="button is-success">Subir de nivel</button>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div class="column">
                          <div class="card">
                              <div class="card-image">
                                <figure class="image is-4by3">
                                  <img src="https://static.wikia.nocookie.net/clashofclans/images/1/1a/Pekka1234.jpg/revision/latest?cb=20161108071047" alt="Imagen del Pekka">
                                </figure>
                              </div>
                              <div class="card-content">
                                <div class="media">
                                  <div class="media-left">
                                    <figure class="image is-48x48">
                                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                    </figure>
                                  </div>
                                  <div class="media-content">
                                    <p class="title is-4">Pekka</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                  </div>
                                </div>
                            
                                <div class="content">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                  <a href="#">#css</a> <a href="#">#responsive</a>
                                  <br>
                                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div class="column">
                          <div class="card">
                              <div class="card-image">
                                <figure class="image is-4by3">
                                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                </figure>
                              </div>
                              <div class="card-content">
                                <div class="media">
                                  <div class="media-left">
                                    <figure class="image is-48x48">
                                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                    </figure>
                                  </div>
                                  <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                  </div>
                                </div>
                            
                                <div class="content">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                  <a href="#">#css</a> <a href="#">#responsive</a>
                                  <br>
                                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                              </div>
                            </div>
                      </div>
  
                  </div>
                  <div class="columns">
  
                      <div class="column">
                          <div class="card">
                              <div class="card-image">
                                <figure class="image is-4by3">
                                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                </figure>
                              </div>
                              <div class="card-content">
                                <div class="media">
                                  <div class="media-left">
                                    <figure class="image is-48x48">
                                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                    </figure>
                                  </div>
                                  <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                  </div>
                                </div>
                            
                                <div class="content">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                  <a href="#">#css</a> <a href="#">#responsive</a>
                                  <br>
                                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                              </div>
                            </div>
                      </div>
  
                      <div class="column">
                          <div class="card">
                              <div class="card-image">
                                <figure class="image is-4by3">
                                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                </figure>
                              </div>
                              <div class="card-content">
                                <div class="media">
                                  <div class="media-left">
                                    <figure class="image is-48x48">
                                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                    </figure>
                                  </div>
                                  <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                  </div>
                                </div>
                            
                                <div class="content">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                  <a href="#">#css</a> <a href="#">#responsive</a>
                                  <br>
                                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                              </div>
                            </div>
                      </div>
  
                    </div>
  
  
                  <table>
                      <tbody>
                          <tr><td class="verde">20</td><td>4</td></tr>
                          <tr><td class="verde">100</td><td>2</td></tr>
                      </tbody>
                      <thead>
                          <tr><th>Bárbaros</th><th id="pekkas">Pekkas</th></tr>
                      </thead>
                      <tfoot>
                          <tr><td colspan="2">Tabla de ejércitos</td></tr>
                      </tfoot>
                  </table>
                  
              </div>
          </section>
          <footer class="footer">
              <div class="content has-text-centered">
                <p>
                  <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                  is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
              </div>
            </footer>
          <script>
          const barbaro = {nivel: 1, vida: 20, ataque: 12};
          const arquera = {nivel: 1, vida: 14, ataque: 8};
          
          const boton_levelear_barbaro = document.getElementById("boton_levelear_barbaro");
          
          const subir_barbaro = () => {
              barbaro.nivel++;
              barbaro.vida += 4;
              barbaro.ataque += 2;
          }
          
          boton_levelear_barbaro.onclick = () => {
              subir_barbaro();
              const span_nivel = document.getElementById("nivel_barbaro");
              span_nivel.innerHTML = barbaro.nivel;
              const span_ataque = document.getElementById("ataque_barbaro");
              span_ataque.innerHTML = barbaro.ataque;
              const span_vida = document.getElementById("vida_barbaro");
              span_vida.innerHTML = barbaro.vida;
          }
          
          const boton_atacar_arquera = document.getElementById("boton_atacar_arquera");
          
          boton_atacar_arquera.onclick = () => {
              arquera.vida -= barbaro.ataque;
              
              if (arquera.vida <= 0) {
                  const imagen_arquera = document.getElementById("imagen_arquera");
                  imagen_arquera.src = "https://pbs.twimg.com/media/FGqnaSAWYAM-P__.jpg";
                  const boton_levelear_arquera = document.getElementById("boton_levelear_arquera");
                  boton_levelear_arquera.style.display = "none";
                  const boton_atacar_barbaro = document.getElementById("boton_atacar_barbaro");
                  boton_atacar_barbaro.style.display = "none";
              }
          
              const span_vida = document.getElementById("vida_arquera");
              span_vida.innerHTML = arquera.vida;
          }
          
          const subir_arquera = () => {
              arquera.nivel++;
              arquera.vida += 2;
              arquera.ataque += 4;
          }
          
          boton_levelear_arquera.onclick = () => {
              subir_arquera();
              const span_nivel = document.getElementById("nivel_arquera");
              span_nivel.innerHTML = arquera.nivel;
              const span_ataque = document.getElementById("ataque_arquera");
              span_ataque.innerHTML = arquera.ataque;
              const span_vida = document.getElementById("vida_arquera");
              span_vida.innerHTML = arquera.vida;
          }
          
          const boton_atacar_barbaro = document.getElementById("boton_atacar_barbaro");
          
          boton_atacar_barbaro.onclick = () => {
              barbaro.vida -= arquera.ataque;
              
              if (barbaro.vida <= 0) {
                  const imagen_barbaro = document.getElementById("imagen_barbaro");
                  imagen_barbaro.src = "https://p.turbosquid.com/ts-thumb/Vw/S5IUL1/9XyEOpwn/barbarian/png/1548506480/1920x1080/fit_q99/213fe431655c56a984598422f62ed769f31ed4fa/barbarian.jpg";
                  const boton_levelear_barbaro = document.getElementById("boton_levelear_barbaro");
                  boton_levelear_barbaro.style.display = "none";
                  const boton_atacar_arquera = document.getElementById("boton_atacar_arquera");
                  boton_atacar_arquera.style.display = "none";
              }
          
              const span_vida = document.getElementById("vida_barbaro");
              span_vida.innerHTML = barbaro.vida;
          }
          </script>
      </body>
  </html>
  `);
  response.end();
});
